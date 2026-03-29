Post api res:- http://localhost:4000/api/job
{
  "message": "Job created",
  "jobId": "ffad8c13-f525-43c9-8fc2-f29e35235d5b"
}

Get api res:- http://localhost:4000/api/job/ffad8c13-f525-43c9-8fc2-f29e35235d5b

1st:
{
  "id": "ffad8c13-f525-43c9-8fc2-f29e35235d5b",
  "fileUrl": "https://example.com/rhha.pdf",
  "status": "queued",
  "createdAt": "2026-03-29T13:16:37.191Z"
}

2nd 
{
  "id": "ffad8c13-f525-43c9-8fc2-f29e35235d5b",
  "fileUrl": "https://example.com/rh.pdf",
  "status": "processing",
  "createdAt": "2026-03-29T13:14:53.978Z",
  "startedAt": "2026-03-29T13:15:22.731Z"
}

3rd
{
  "id": "ffad8c13-f525-43c9-8fc2-f29e35235d5b",
  "fileUrl": "https://example.com/rh.pdf",
  "status": "completed",
  "createdAt": "2026-03-29T13:14:53.978Z",
  "startedAt": "2026-03-29T13:15:22.731Z",
  "completedAt": "2026-03-29T13:15:42.732Z",
  "result": {
    "extractedText": "Sample extracted text from document",
    "wordCount": 120
  }
}

when server runs in console output:-
Server running on port 4000
Worker started for job: df5e2d64-a066-4b6a-a340-fd6f1eddbdb1
Worker started for job: 36e705e2-d760-4847-b91f-dc7c4cdf83e3
Worker started for job: 7001e961-4ae4-4503-8201-c826c15ffbf5
Worker started for job: ffad8c13-f525-43c9-8fc2-f29e35235d5b
Worker started for job: 1b8c0c6e-319d-4fc3-9ab2-343d31832d87
Worker started for job: 9cd81536-5446-4399-99ad-087c330ce42f
Worker started for job: 3ae4d79c-1543-4abb-8194-6c5ce240ebfb
Worker started for job: b2567d2a-1a43-4e0d-9c76-c758e15049d6


# Asynchronous Document Processing API System

## Overview

This project is a backend system built using Node.js and Express that allows users to submit documents for processing asynchronously. The system uses a queue-based architecture with BullMQ and Redis to handle background processing, ensuring scalability and non-blocking API performance.

---

## Features

- Create document processing jobs via API
- Asynchronous job processing using BullMQ
- Background worker for handling tasks
- Job status tracking (queued, processing, completed, failed)
- Retry mechanism for failed jobs
- Support for multiple concurrent jobs
- Mock processing with configurable delay

---

## Tech Stack

- Node.js
- Express.js
- BullMQ (Queue system)
- Redis (Queue backend)
- UUID (Unique job IDs)

---

---

## Job Lifecycle

1. queued  
2. processing  
3. completed / failed  

---

## How It Works

1. User sends a request to create a job
2. Job is added to BullMQ queue
3. Worker picks the job from queue
4. Worker processes the job asynchronously
5. Job status is updated in store
6. User fetches status via API

---

## Design Principles

### Separation of Concerns
The application is divided into layers such as routes, controllers, services, and workers to ensure maintainability and clarity.

### Asynchronous Processing
Heavy tasks are offloaded to background workers using a queue system, preventing API blocking.

### Queue-Based Architecture
BullMQ with Redis is used to manage jobs, ensuring reliability, retry handling, and scalability.

### Job State Management
Each job maintains a lifecycle state for tracking and debugging.

### Unique Job Identification
Each job is assigned a UUID for tracking and retrieval.

### Scalability
Multiple workers can be added to process jobs concurrently.

### Extensibility
The system can be extended with:
- Database integration (MongoDB, PostgreSQL)
- File uploads (Multer)
- Cloud storage (AWS S3)
- Real-time updates (WebSockets)

---

## Retry and Failure Handling

- Jobs can be retried using BullMQ retry options
- Failed jobs are marked with error messages
- Worker listens for failure events and updates status

---

## Limitations

- Uses in-memory storage (Map), not persistent
- No authentication or authorization
- Mock processing instead of real document parsing

---

## Future Improvements

- Replace in-memory store with database
- Add authentication (JWT)
- Integrate file upload handling
- Add monitoring dashboard for jobs
- Deploy using Docker and cloud services

---

## Author

Satyam Gupta
Full Stack Developer