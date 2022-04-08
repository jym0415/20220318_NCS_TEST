//botalble에 대한 응답을 해줄 수 없는 경우 출력될 페이지

var express = require('express');
var router = express.Router()

router.get('/',(req,res) => {
    res.send('/preinterview?type=해당키워드가 없거나 요청주소에 맞는 get데이터가없음')
})
router.post('/',(req,res) => {
    res.send('/preinterview?type=해당키워드가 없거나 요청주소에 맞는 post데이터가 없음.')
})


module.exports = router;