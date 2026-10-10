// Lightweight in-memory rate limiter middleware
// Prevents endpoint abuse, spam, and brute-force attacks

const ipRequests = new Map();

// Periodic cleanup of stale IP records (every 5 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of ipRequests.entries()) {
    if (now - record.resetTime > 0) {
      ipRequests.delete(key);
    }
  }
}, 300000);

/**
 * Creates a rate limiting middleware function
 * @param {Object} options
 * @param {number} options.windowMs - Time window in milliseconds (default: 15 mins)
 * @param {number} options.max - Max requests per windowMs (default: 30)
 * @param {string} options.message - Error message when rate limit is exceeded
 */
function createRateLimiter(options = {}) {
  const windowMs = options.windowMs || 15 * 60 * 1000;
  const max = options.max || 30;
  const message = options.message || 'Too many requests. Please slow down and try again later.';

  return (req, res, next) => {
    // Get client IP address
    const forwarded = req.headers['x-forwarded-for'];
    const ip = (forwarded ? forwarded.split(',')[0].trim() : req.socket.remoteAddress) || '127.0.0.1';
    const key = `${req.baseUrl || req.path}:${ip}`;
    const now = Date.now();

    let record = ipRequests.get(key);

    if (!record || now > record.resetTime) {
      record = {
        count: 1,
        resetTime: now + windowMs
      };
      ipRequests.set(key, record);
    } else {
      record.count += 1;
    }

    const remaining = Math.max(0, max - record.count);
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);

    res.setHeader('X-RateLimit-Limit', max);
    res.setHeader('X-RateLimit-Remaining', remaining);
    res.setHeader('X-RateLimit-Reset', Math.ceil(record.resetTime / 1000));

    if (record.count > max) {
      res.setHeader('Retry-After', retryAfter);
      return res.status(429).json({
        error: message,
        retryAfterSeconds: retryAfter
      });
    }

    if (typeof next === 'function') {
      next();
    }
  };
}

module.exports = { createRateLimiter };
