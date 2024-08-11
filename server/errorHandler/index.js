const errorHandler = (err, req, res, next) => {
    switch (err.name) {
        case"EMPTY_EMAIL_PASSWORD":
            res.status(401).json({
                message: "Email and Password Required"
            });
            case"INVALID_LOGIN":
            res.status(401).json({
                message: "Invalid Email or Password"
            });
        default:
            res.status(500).json({
                message: "Internal Server Error"
            })
        break
    }
}

module.exports = errorHandler