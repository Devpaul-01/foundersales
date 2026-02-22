const express = require('express');
const router = express.Router();
const waitlistController = require('../controllers/waitlistController');
const { validateEmail, handleValidationErrors } = require('../middleware/validation');
const rateLimit = require('express-rate-limit');

// Rate limiting
const signupLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 signups per IP
  message: { error: true, message: 'Too many signup attempts. Try again later.' }
});

// Simple admin auth middleware — checks for ADMIN_SECRET in request header
function requireAdmin(req, res, next) {
  const secret = req.headers['x-admin-secret'];
  if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: true, message: 'Unauthorized' });
  }
  next();
}

// Routes
router.post(
  '/signup',
  signupLimiter,
  validateEmail,
  handleValidationErrors,
  waitlistController.signup
);

router.get(
  '/recent-signups',
  waitlistController.getRecentSignups
);

router.get(
  '/count',
  waitlistController.getCount
);

// Manual email dispatch — call this from Postman/curl whenever you want to send emails
// POST /api/waitlist/send-emails
// Header: x-admin-secret: <your ADMIN_SECRET from .env>
router.post(
  '/send-emails',
  requireAdmin,
  waitlistController.sendPendingEmails
);

module.exports = router;
