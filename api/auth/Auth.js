const router = require('express').Router()
const bcryp = require("bcryptjs")
const jwt = require("jsonwebtoken")

const db = require('./user-model')

router.post('/signup', (req, res) => {
    let user = req.body

    const rounds = 12

    const hash = bcryp.hashSync(user.password, rounds)

    user.password = hash

    db.add(user)
        .then(id => {
            res.status(201).json(id)
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).json('server error could not register account')
        })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body

    db.findBy({ username })
        .then(([user]) => {
            if (user && bcryp.compareSync(password, user.password)) {
                const token = generateToken(user)

                res.status(200).json({ message: "correctly logged in", payload: token })
            } else {
                res.status(400).json('incorrect username or password')
            }
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).json('server error retrieving user')
        })
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

module.exports = router