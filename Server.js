import app from "./src/app.js";

// Start worker
import "./src/workers/job.worker.js";

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});