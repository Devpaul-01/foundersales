const Queue = require('bull');

// Create email queue
const emailQueue = new Queue('email', process.env.REDIS_URL || {
  // In-memory for development (no Redis needed)
  redis: { port: 6379, host: '127.0.0.1' }
});

// Process email jobs
emailQueue.process(async (job) => {
  const { to, position } = job.data;
  console.log("Processing job");
  
  const emailService = require('./emailService');
  await emailService.sendWelcomeEmail(to, position); // ← this is the right method
  
  return { sent: true, to };
});
// Error handling
emailQueue.on('failed', (job, err) => {
  console.error(`Email job ${job.id} failed:`, err);
});

module.exports = emailQueue;