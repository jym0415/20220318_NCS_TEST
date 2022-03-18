var express = require('express');
var router = express.Router()

router.get('/',(req,res) => {
    res.send('getsend요청응답')
})

module.exports = router;