import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const EventSchema = mongoose.Schema(
  {
    uniqueId: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    event_title: {
      type: String,
    },
    featured_image: {
      type: Array,
    },
    event_start_date: {
      type: Date,
      required: true,
    },
    event_end_date: {
      type: Date,
      required: true,
    },
    event_difficulty_level: {
      type: Number,
    },
    duration: {
      type: String,
    },
    yoga_type: {
      type: Number,
    },
    visibility_start_date: {
      type: Date,
    },
    visibility_end_date: {
      type: Date,
    },
    entrance_type: {
      type: String,
    },
    prices: {
      type: Object,
    },
    event_description: {
      type: String,
    },
    status: {
      type: String,
      default: "Pending",
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const Events = regularDatabase.model("events", EventSchema);

export default Events;
