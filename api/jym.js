var express = require('express');
var router = express.Router()

var normalpage = require('../routes/normal')
var awssql = require('./awssql')

router.use(express.urlencoded({ extended : true}))//주소를가져와서 json화- url인코드 미들웨어
//리액트에서 비동기로 요청시
router.post('/',(req, res, next) => {//요청,응답,미들웨어or라우트
    var type = req.query.type; //localhost:3000/preinterview?type=list
    var routenm = normalpage;
    req.body.mapper = "IntroduceSql";     
    
      switch(type){
        //사전인터뷰 글보기,글쓰기,글수정
         case 'interviewlist' : req.body.crud = "select"; 
                       req.body.mapper_id = "interview";
                       var routenm = awssql;
                       break;
         case 'interviewwrite': req.body.crud = "insert"; 
                       req.body.mapper_id = "interviewInsert";
                       var routenm = awssql;
                       break;
         case 'interviewmodify': req.body.crud = "update"; 
                       req.body.mapper_id = "interviewModify";
                       var routenm = awssql;
                       break; 
         //면접제안 글보기,글쓰기
         case 'meetinglist': req.body.crud = "select"; 
                       req.body.mapper_id = "meeting";
                       var routenm = awssql;
                       break;
         case 'meetingwrite': req.body.crud = "insert"; 
                       req.body.mapper_id = "meetingInsert";
                       var routenm = awssql;
                       break;                                                 
        //포트폴리오 
        case 'portfoliolist': req.body.crud = "select"; 
                        req.body.mapper_id = "portfolio";
                        var routenm = awssql;
        break;                          
         default      :var routenm = normalpage;
                        break; 
      }      

          router.use('/', routenm )
          next('route')  
})

module.exports = router;