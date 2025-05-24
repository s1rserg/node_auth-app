const AppError = require('../utils/appError');
const { verify } = require('../auth/token.service');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new AppError('Authentication token missing or malformed', 401));
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verify(token);

    req.id = decoded.id;

    next();
  } catch (err) {
    return next(new AppError('Invalid or expired token', 401));
  }
};

module.exports = { authMiddleware };
