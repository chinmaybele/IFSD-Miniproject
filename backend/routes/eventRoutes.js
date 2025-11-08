import express from "express";
import { getEvents, createEvent, getEventById } from "../controllers/eventController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getEvents).post(protect, createEvent);
router.route("/:id").get(getEventById);

export default router;
