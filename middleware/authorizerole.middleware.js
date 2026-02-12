// Middleware to check if user has the required role
export const authorizeRole = (requiredRole) => {
    return (req, res, next) => {
        try {
            // Check if user exists (authMiddleware should have already verified)
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: 'User not authenticated'
                });
            }

            // Check if user has the required role
            if (req.user.role !== requiredRole) {
                return res.status(403).json({
                    success: false,
                    message: `Access denied. Required role: ${requiredRole}`
                });
            }

            // User has the required role, proceed to next middleware/controller
            next();
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: 'Error checking user role',
                error: err.message
            });
        }
    };
};
