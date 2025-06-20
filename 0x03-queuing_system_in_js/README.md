# 0x03. Queuing System in JS

## 📌 Project Description

This project is part of the **ALX Back-End Specialization** and focuses on implementing a basic queuing system using **JavaScript (Node.js)** and **Redis**.

It simulates real-world asynchronous task queues, such as those used in background jobs, task schedulers, or service queues, with job creation, processing, and management handled through Redis.

---

## 🧠 Learning Objectives

By completing this project, you will:

- Understand how **Redis** works and how to use it with Node.js
- Learn about **job queues** and **task processing**
- Work with the **Kue** library (a priority job queue backed by Redis)
- Handle asynchronous jobs using callbacks and event listeners
- Gracefully handle job failures and retries

---

## 🛠️ Technologies Used

- Node.js
- Redis
- [Kue](https://github.com/Automattic/kue) (Job queue library)
- JavaScript (ES6+)
- Command Line Interface (CLI)

---

## 📁 Project Structure

| File | Description |
|------|-------------|
| `0-redis_client.js` | Creates a basic Redis client. |
| `1-redis_op.js` | Implements basic Redis operations (set, get). |
| `2-redis_op_async.js` | Uses promises and async/await for Redis operations. |
| `3-redis_conn.js` | Handles Redis connection events. |
| `4-redis_advanced_op.js` | Handles lists in Redis (queue simulation). |
| `5-publisher.js` | Publishes messages to a Redis channel. |
| `6-subscriber.js` | Subscribes and listens for messages from Redis. |
| `7-job_creator.js` | Creates multiple jobs using Kue. |
| `8-job_processor.js` | Processes jobs and logs their lifecycle. |
| `9-stock.js` | Manages a stock reservation system. |
| `100-stock.js` | Adds endpoints for stock management. |
| `101-stock.js` | Adds job queueing to handle stock reservation asynchronously. |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- Redis server running locally or in Docker

### Install Dependencies

```bash
npm install

