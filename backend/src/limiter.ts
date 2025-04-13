import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 3 * 60 * 1000, // 3 minutes
  max: 20,
});

export default limiter;
