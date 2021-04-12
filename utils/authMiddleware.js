const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.heaers.authorization

    const secret = 'localhost'

    if (token) {
        jwt.verify(token, secret, (err, dec) => {
            if (err) {
                res.status(401).json("OUT!")
            } else {
                req.decodedToken = dec

                next()
            }
        })
    } else {
        res.status(400).json('log in to continue')
    }
}