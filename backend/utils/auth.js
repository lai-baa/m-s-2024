// backend/utils/auth.js
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { Admin } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

// Sends a JWT Cookie
const setTokenCookie = (res, admin) => {
    // Create the token.
    const safeAdmin = {
      id: admin.id,
      email: admin.email,
      username: admin.username,
    };
    const token = jwt.sign(
      { data: safeAdmin },
      secret,
      { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
    );
  
    const isProduction = process.env.NODE_ENV === "production";
  
    // Set the token cookie
    res.cookie('token', token, {
      maxAge: expiresIn * 1000, // maxAge in milliseconds
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction && "Lax"
    });
  
    return token;
};

const restoreAdmin = (req, res, next) => {
    // token parsed from cookies
    const { token } = req.cookies;
    req.admin = null;
  
    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
      if (err) {
        return next();
      }
  
      try {
        const { id } = jwtPayload.data;
        req.admin = await Admin.findByPk(id, {
          attributes: {
            include: ['email', 'createdAt', 'updatedAt']
          }
        });
      } catch (e) {
        res.clearCookie('token');
        return next();
      }
  
      if (!req.admin) res.clearCookie('token');
  
      return next();
    });
};

// If there is no current user, return an error
const requireAuth = function (req, _res, next) {
    if (req.admin) return next();
  
    const err = new Error('Authentication required');
    err.title = 'Authentication required';
    err.errors = { message: 'Authentication required' };
    err.status = 401;
    return next(err);
}

module.exports = { setTokenCookie, restoreAdmin, requireAuth };