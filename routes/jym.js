var express = require('express');
var mysql = require('mysql');
var dbconfig = require('../db/config.js')

// const connection = mysql.createConnection(dbconfig) 5번대신6번으로사용
var pool = mysql.createPool(dbconfig); //66개
//데이터베이스에 연결된 connection을 미리만들어준후 pool에보관하였다가 필요할때,
//pool에서 connection을 가져다 사용한 후,다시 pool에 반환하는 기법.
var router = express.Router()

router.use(express.urlencoded({ extended : true}))

router.get('/',(req, res, next) => {//요청,응답,미들웨어or라우트

    var botable = req.query.botable; //~~~~?botable=content_interview
    if(botable == 'preinterview'){
        pool.getConnection(function(err, connection){
            connection.query('SELECT * FROM introduce.'+botable, 
            (error, rows) => {
                if(error) throw error;
                // console.log('해당스키마안의 테이블 내용 : ', rows);
                res.send(rows);
                });
            connection.release();//추가 실행문    
        })
    }else{ //botable이 없는 경우
        var accident = require('./normal')
        router.use('/', accident) //라우팅생성
        next('route')//next에 res를 출력하게 페이지분배
    }
        
      
})


module.exports = router;