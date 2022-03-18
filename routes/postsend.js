var express = require('express');
var router = express.Router()

router.post('/',(req,res) => {
    res.send('post요청응답')
})

module.exports = router;