const router = require('express').Router()
const bcryp = require("bcryptjs")
const jwt = require("jsonwebtoken")

const db = require('./user-model')

router.post('/signin', (req, res) => {
    const [user] = req.body

    db.add(user)
        .then(id => {
            res.status(201).json(id)
        })
})

router.post('/login', (req, res) => {

})

function generateToken(user) {
    const payload = {
        userId: user.id,
        user: user.username
    }

    const secret = "localhost"
    const options = {
        expiresIn: '1h'
    }

    return jwt.sign(payload, secret, options)
}