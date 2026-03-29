const jobs = new Map();

const jobStore = {
  createJob: (job) => {
    jobs.set(job.id, job);
  },

  updateJob: (id, data) => {
    const job = jobs.get(id);
    jobs.set(id, { ...job, ...data });
  },

  getJob: (id) => jobs.get(id),
};

export default jobStore;