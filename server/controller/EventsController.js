import run from "nodemon/lib/monitor/run.js";
import { downloadImageAndReplaceSrcNonProperty } from "../helper/FolderCleaners/EditorImagesController.js";
import Events from "../models/Events.js";
import YogaType from "../models/YogaType.js";

export const CreateEvent = async (req, res) => {
  try {
    const {
      userId,
      event_title,
      event_start_date,
      event_end_date,
      event_difficulty_level,
      duration,
      yoga_type,
      visibility_start_date,
      visibility_end_date,
      entrance_type,
      price,
      event_description,
      address,
    } = req.body;

    let updatedDescription = event_description;
    if (event_description) {
      updatedDescription = await downloadImageAndReplaceSrcNonProperty(
        event_description,
        "events"
      );
    }

    const featuredImageWebp = req.files?.["featured_image"]?.[0]?.webpFilename;
    const featuredImageOriginal =
      req.files?.["featured_image"]?.[0]?.originalFilename;

    if (
      !userId ||
      !event_title ||
      !event_description ||
      !event_start_date ||
      !duration ||
      !visibility_start_date ||
      !entrance_type ||
      !event_difficulty_level ||
      !yoga_type ||
      !address
    ) {
      return res.status(400).json({ error: "Required Field is Missing" });
    }

    const isExistingValidation = await Events.findOne({ userId, event_title });
    if (isExistingValidation) {
      return res
        .status(400)
        .json({ error: "Same Title Already Existing For Same User" });
    }

    let yogaTypeDoc = await YogaType.findOne({ yoga_type });
    let yogaTypeUniqueId;
    if (yogaTypeDoc) {
      yogaTypeUniqueId = yogaTypeDoc.uniqueId;
    } else {
      const lastYogaType = await YogaType.findOne().sort({ uniqueId: -1 });
      yogaTypeUniqueId = lastYogaType ? lastYogaType.uniqueId + 1 : 1;

      const newYogaType = new YogaType({
        uniqueId: yogaTypeUniqueId,
        yoga_type: yoga_type.toLowerCase(),
      });
      await newYogaType.save();
    }

    const lastEvent = await Events.findOne().sort({ uniqueId: -1 });
    const eventUniqueId = lastEvent ? lastEvent.uniqueId + 1 : 1;

    const newEvent = new Events({
      uniqueId: eventUniqueId,
      userId,
      event_title,
      featured_image: [featuredImageWebp, featuredImageOriginal],
      event_start_date,
      event_end_date,
      event_difficulty_level,
      duration,
      yoga_type: yogaTypeUniqueId,
      visibility_start_date,
      visibility_end_date,
      entrance_type,
      prices: price,
      event_description: updatedDescription,
      address,
    });

    await newEvent.save();

    return res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    console.error("CreateEvent error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Events.find();
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getEventsbyId = async (req, res) => {
  try {
    const { objectId } = req.params;
    const events = await Events.findOne({ _id: objectId });
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const deleteEvent = async (req, res) => {
  try {
    const { objectId } = req.params;
    if (!objectId) {
      return res.status(400).json({ error: "objectId is Missing" });
    }

    const events = await Events.findOneAndDelete({ _id: objectId });
    if (!events) {
      return res.status(404).json({ error: "Event Not Found" });
    }
    return res.status(200).json({ messaeg: "Event Not Found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const UpdateEvent = async (req, res) => {
  try {
    const { objectId } = req.params;

    const {
      userId,
      event_title,
      event_start_date,
      event_end_date,
      event_difficulty_level,
      duration,
      yoga_type,
      visibility_start_date,
      visibility_end_date,
      entrance_type,
      price,
      event_description,
      address,
      status,
    } = req.body;

    if (!objectId) {
      return res
        .status(400)
        .json({ error: "Event objectId is required for update" });
    }

    let updatedDescription = event_description;
    if (event_description) {
      updatedDescription = await downloadImageAndReplaceSrcNonProperty(
        event_description,
        "events"
      );
    }

    const featuredImageWebp = req.files?.["featured_image"]?.[0]?.webpFilename;
    const featuredImageOriginal =
      req.files?.["featured_image"]?.[0]?.originalFilename;

    let yogaTypeUniqueId;
    if (yoga_type) {
      let yogaTypeDoc = await YogaType.findOne({ yoga_type });
      if (yogaTypeDoc) {
        yogaTypeUniqueId = yogaTypeDoc.uniqueId;
      } else {
        const lastYogaType = await YogaType.findOne().sort({ uniqueId: -1 });
        yogaTypeUniqueId = lastYogaType ? lastYogaType.uniqueId + 1 : 1;

        const newYogaType = new YogaType({
          uniqueId: yogaTypeUniqueId,
          yoga_type: yoga_type.toLowerCase(),
        });
        await newYogaType.save();
      }
    }

    const updatedEvent = await Events.findOneAndUpdate(
      { _id: objectId },
      {
        ...(userId && { userId }),
        ...(event_title && { event_title }),
        ...(featuredImageWebp &&
          featuredImageOriginal && {
            featured_image: [featuredImageWebp, featuredImageOriginal],
          }),
        ...(event_start_date && { event_start_date }),
        ...(event_end_date && { event_end_date }),
        ...(event_difficulty_level && { event_difficulty_level }),
        ...(duration && { duration }),
        ...(yogaTypeUniqueId && { yoga_type: yogaTypeUniqueId }),
        ...(visibility_start_date && { visibility_start_date }),
        ...(visibility_end_date && { visibility_end_date }),
        ...(entrance_type && { entrance_type }),
        ...(price && { price }),
        ...(updatedDescription && { event_description: updatedDescription }),
        ...(address && { address }),
        ...(status && { status }),
      },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    return res
      .status(200)
      .json({ message: "Event updated successfully", event: updatedEvent });
  } catch (error) {
    console.error("UpdateEvent error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
