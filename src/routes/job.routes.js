import express from "express";
import { createJob, getJobStatus } from "../controllers/job.controller.js";

const router = express.Router();

router.post("/job", createJob);
router.get("/job/:id", getJobStatus);

export default router;