var express = require('express');
var router = express.Router()

var normalpage = require('../routes/normal')
var awssql = require('./awssql')

router.use(express.urlencoded({ extended : true}))//주소를가져와서 json화- url인코드 미들웨어
//리액트에서 비동기로 요청시
router.post('/',(req, res, next) => {//요청,응답,미들웨어or라우트
    var type = req.query.type; //localhost:3000/preinterview?type=list
    req.body.mapper = "IntroduceSql";     
  
   if( type ){  
      switch(type){
        //사전인터뷰 글보기,글쓰기,글수정
         case 'interviewlist' : req.body.crud = "select"; 
                       req.body.mapper_id = "interview";
                       break;
         case 'interviewwrite': req.body.crud = "insert"; 
                       req.body.mapper_id = "interviewInsert";
                       break;
         case 'interviewmodify': req.body.crud = "update"; 
                       req.body.mapper_id = "interviewModify";
                       break; 
         //면접제안 글보기,글쓰기
         case 'meetinglist': req.body.crud = "select"; 
                       req.body.mapper_id = "meeting";
                       break;
         case 'meetingwrite': req.body.crud = "insert"; 
                       req.body.mapper_id = "meetingInsert";
                       break;                                                 
                                    
         default      : req.body.crud = "delete"; 
                        req.body.mapper_id = "interviewDrop";
                        break; 
      }      

          router.use('/', awssql )
          next('route')
   }
   else{           
        router.use('/', normalpage )
        next('route')
   }   
})

module.exports = router;