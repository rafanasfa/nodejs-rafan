const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.status(200).json({
        name:'rafan'
    })
})

module.exports = router