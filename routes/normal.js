//botalble에 대한 응답을 해줄 수 없는 경우 출력될 페이지

var express = require('express');
var router = express.Router()

router.get('/',(req,res) => {
    res.send('해당 페이지를 찾을 수 없습니다.주소창을 확인해주세요')
})

module.exports = router;