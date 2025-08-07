import { addPropertyScore } from "../AnalyticController/PropertyScoreController.js";
import { TeamImageMover } from "../helper/FolderCleaners/PropertyImageMover.js";
import Team from "../models/Team.js";

export const addTeam = async (req, res) => {
  try {
    const { userId, name, designation, experience, property_id } = req.body;
    const profile = req?.files?.["profile"]?.[0]?.webpFilename || null;
    const originalProfile =
      req?.files?.["profile"]?.[0]?.originalFilename || null;

    if (!name || !designation || !experience || !property_id) {
      return res.status(400).send({ error: "Missing required fields." });
    }

    const teamCount = await Team.countDocuments({ property_id });

    const latestTeam = await Team.findOne().sort({ _id: -1 }).limit(1);
    const uniqueId = latestTeam ? latestTeam.uniqueId + 1 : 1;

    const newTeam = new Team({
      userId,
      uniqueId,
      name,
      profile: [profile, originalProfile],
      designation,
      experience,
      property_id,
    });

    await newTeam.save();
    await TeamImageMover(req, res, property_id);

    if (teamCount === 0) {
      await addPropertyScore({
        property_score: 10,
        property_id: property_id,
      });
    }

    return res.status(201).send({ message: "Team added." });
  } catch (err) {
    console.error("Add Team Error:", err);
    return res.status(500).send({ error: "Internal server error!" });
  }
};

export const getTeam = async (req, res) => {
  try {
    const allTeam = await Team.find();
    return res.status(200).json(allTeam);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
};

export const getTeamById = async (req, res) => {
  try {
    const { objectId } = req.params;
    const team = await Team.findById(objectId);

    if (!team) {
      return res.status(404).json({ error: "Team not found." });
    }

    return res.status(200).json(team);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
};

export const getTeamByPropertyId = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const team = await Team.find({ property_id: propertyId });
    return res.status(200).json(team);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
};

export const updateTeam = async (req, res) => {
  try {
    const { objectId } = req.params;
    const { name, designation, experience, status } = req.body;

    const team = await Team.findById(objectId);
    if (!team) {
      return res.status(404).send({ error: "Team not found!" });
    }

    const profile =
      req?.files?.["profile"]?.[0]?.webpFilename || team.profile?.[0] || null;
    const originalProfile =
      req?.files?.["profile"]?.[0]?.originalFilename ||
      team.profile?.[1] ||
      null;

    const updateData = {
      name,
      designation,
      experience,
      status,
      profile: [profile, originalProfile],
    };

    await Team.findByIdAndUpdate(objectId, { $set: updateData });
    await TeamImageMover(req, res, team.property_id);
    return res.status(200).send({ message: "Team updated successfully." });
  } catch (err) {
    console.error("Update error:", err);
    return res.status(500).send({ error: "Internal server error!" });
  }
};

export const deleteTeam = async (req, res) => {
  try {
    const { objectId } = req.params;
    const deletedTeam = await Team.findByIdAndDelete(objectId);

    if (!deletedTeam) {
      return res.status(404).json({ error: "Team not found." });
    }

    const teamCount = await Team.countDocuments({
      property_id: deletedTeam.property_id,
    });

    if (teamCount === 0) {
      await addPropertyScore({
        property_score: -10,
        property_id: deletedTeam.property_id,
      });
    }

    return res.status(200).json({ message: "Team deleted." });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
};
