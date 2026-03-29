import { Queue } from "bullmq";
import { createConnection } from "../config/redis.js";

const jobQueue = new Queue("documentQueue", 
{
  connection: createConnection(),
});

export default jobQueue;