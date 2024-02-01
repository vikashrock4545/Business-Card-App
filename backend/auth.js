const { admin } = require("./db");

async function adminMiddleware(req, res, next) {
    const username = req.headers.username
    const password = req.headers.password

    const value = await admin.findOne({
        username: username,
        password: password
    });

    if(value) {
        next();
    } else {
        res.status(404).json({
            message: 'Invalid login credentials'
        })
    }
}

module.exports = { adminMiddleware }