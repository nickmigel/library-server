const router = require('express').Router()

// const db = require('./saved-model')

router.get('/', (req, res) => {
    console.log('you got the songs')
})

router.get('/:id', (req, res) => {
    console.log(`you got song id:${req.params.id}`)
})

router.push('/', (req, res) => {
    console.log('you added a song')
})

router.put('/:id', (req, res) => {
    console.log(`song at ${req.params.id} has been changed to ${req.body}`)
})

router.delete('/:id', (req, res) => {
    console.log(`saved song at ${req.params.id} has been removed`)
})

module.exports = router