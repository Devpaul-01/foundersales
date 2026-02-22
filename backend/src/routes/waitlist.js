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

// Routes (GOOGLE OAUTH REMOVED)
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

module.exports = router;