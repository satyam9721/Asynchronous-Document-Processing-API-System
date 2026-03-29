import express from "express";
import jobRoutes from "./routes/job.routes.js";

const app = express();

app.use(express.json());
app.use("/api", jobRoutes);

export default app;