var express = require('express');
var router = express.Router()

var normalpage =require('../routes/normal')
var awssql = require('./awssql')

router.use(express.urlencoded({ extended : true}))//주소를가져와서 json화
//리액트에서 비동기로 요청시
router.get('/',(req, res, next) => {//요청,응답,미들웨어or라우트
    var sqlsideis = req.query.type; 
    if(sqlsideis == 'aws'){
        req.body.mapper = "IntrodueSql" //mapper의 namespace
        req.body.crud = "select" //select,insert,update,delete 중선택
        req.body.mapper_id = "interview" //sql문 정보를 담고있는 객체의 id

        router.use('/',awssql)
        next('route')

    }else{//평범한 라우팅은 이쪽으로 
        // localhost:3000/preinterview
        // localhost:3000/preinterview/write
        router.use('/',normalpage)
        next('route')
    }
        
      
})


module.exports = router;