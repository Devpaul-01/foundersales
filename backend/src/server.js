require('dotenv').config();            // load .env first
require('./services/queueService');          // <-- start the Bull email processor

const express = require('express');
const cors = require('cors');
const waitlistRoutes = require('./routes/waitlist');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/waitlist', waitlistRoutes);

// Error handling
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: true, message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 FounderSales backend running on port ${PORT}`);
  console.log(`📧 Email service: ${process.env.RESEND_API_KEY ? 'Resend' : process.env.SMTP_USER ? 'SMTP' : 'Disabled'}`);
  console.log(`🔐 Google OAuth: ${process.env.GOOGLE_CLIENT_ID ? 'Enabled' : 'Disabled'}`);
});