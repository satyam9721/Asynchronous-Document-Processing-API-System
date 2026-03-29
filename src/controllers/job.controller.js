import * as jobService from "../services/job.service.js";

export const createJob = async (req, res) => {
  try {
    const fileUrl = req.body.fileUrl;

    const job = await jobService.createJob(fileUrl);

    res.json({
      message: "Job created",
      jobId: job.id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getJobStatus = (req, res) => {
  const job = jobService.getJobStatus(req.params.id);

  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }

  res.json(job);
};