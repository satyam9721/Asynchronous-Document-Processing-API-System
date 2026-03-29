import { v4 as uuidv4 } from "uuid";
import jobQueue from "../queues/job.queue.js";
import store from "../models/job.store.js";
import STATUS from "../utils/status.js";

export const createJob = async (fileUrl) => {
  const jobId = uuidv4();

  const jobData = {
    id: jobId,
    fileUrl,
    status: STATUS.QUEUED,
    createdAt: new Date(),
  };

  store.createJob(jobData);

  await jobQueue.add("processDocument", {
    jobId,
    fileUrl,
  });

  return jobData;
};

export const getJobStatus = (jobId) => {
  return store.getJob(jobId);
};