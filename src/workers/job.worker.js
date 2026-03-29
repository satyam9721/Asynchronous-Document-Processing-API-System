import { Worker } from "bullmq";
import { createConnection } from "../config/redis.js";
import store from "../models/job.store.js";
import STATUS from "../utils/status.js";


const worker = new Worker(
  "documentQueue",
  async (job) => {
    const jobId = job.data.jobId;
    console.log("Worker started for job:", jobId);

    store.updateJob(jobId,{
        status: STATUS.PROCESSING,
        startedAt: new Date(),
    });
await new Promise((res) => setTimeout(res, 20000));

const result = {
    extractedText: "Sample extracted text from document",
    wordCount: 120,
};
store.updateJob(jobId,{
    status: STATUS.COMPLETED,
    completedAt: new Date(),
    result,
});

    return result;
  },
  {
    connection: createConnection(),
  }
);

export default worker;