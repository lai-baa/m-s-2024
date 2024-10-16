const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Admin } = require('../db/models');
const { jwtConfig } = require('../config');
const { secret, expiresIn } = jwtConfig;

// Generate JWT Token
const generateToken = (admin) => {
  const data = { id: admin.id, email: admin.email, username: admin.username };
  return jwt.sign({ data }, secret, { expiresIn: parseInt(expiresIn, 10) });
};

// Middleware to restore the logged-in admin from the JWT cookie
const restoreAdmin = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return next();

  try {
    const { data } = jwt.verify(token, secret);
    req.admin = await Admin.findByPk(data.id);
  } catch (err) {
    res.clearCookie('token');
  }
  return next();
};

// Require admin to be authenticated
const requireAuth = (req, res, next) => {
  if (!req.admin) {
    const err = new Error('Unauthorized');
    err.status = 401;
    return next(err);
  }
  return next();
};

module.exports = { generateToken, restoreAdmin, requireAuth };