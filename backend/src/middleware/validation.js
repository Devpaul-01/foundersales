const { body, validationResult } = require('express-validator');

const validateEmail = [
  body('email')
    .isEmail()
    .withMessage('Invalid email address')
    .normalizeEmail()
    .trim(),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: true,
      message: 'Validation failed',
      details: errors.array()
    });
  }
  next();
};

module.exports = {
  validateEmail,
  handleValidationErrors
};