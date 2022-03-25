var express = require('express');
var router = express.Router()
//post는 주소창으로안나옴 postman으로 확인하기!

router.post('/',(req,res) => {
    res.send('post요청응답')
})

module.exports = router;