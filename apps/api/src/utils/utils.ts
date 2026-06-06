// import rateLimit from "express-rate-limit";

// export const LoginLimit = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 5, // Limit each IP to 5 password reset requests per windowMs
//     message: 'Too many Login attempts, please try again after 15 minutes',
//     standardHeaders: true,
//     legacyHeaders: false,
//     handler: (req, res) => {
//         res.status(429).json({
//             message: "To many Request",
//             retryAfter:900,
//         })
//     }
// })