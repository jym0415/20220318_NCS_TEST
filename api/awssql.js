var express = require('express');
var mysql = require('mysql');
var mybatisMapper = require('mybatis-mapper')
// var dbconfig = require('../db/config.js')   
var dbconfig = require('../db/mycafe24')

var router = express.Router()
var pool = mysql.createPool(dbconfig);
//mybatis 모듈 가져와서 mapper정보받아서 query 쿼리문전달

router.use(express.json())
//req-body를 json화해서 받음

mybatisMapper.createMapper(['./mapper/introduceSql.xml'])
//경로 : node-main(yumi.js)을기준으로 써줘야함!!!
//xml가져올준비
var format = { language : 'sql', indent : '  '}

router.post('/',(req, res, next) => {
    var params = req.body; //json
    var query = mybatisMapper.getStatement(
    params.mapper, params.mapper_id, params, format );
    //sql문 추출해서 query에 담기

    pool.getConnection(function(err, connection){

        if(err) console.log("DB접속불가 : " +err);

        connection.query(
        query,    //sql문이 들어와야 에러안남
        (error, rows) => {
            if(error) throw error; //rows를 받지못하는상황

            if(req.body.crud == 'select' ){
                res.send(rows); //react한테 res.data를 줘
            }else{
                res.send("success");  //succ라는 문자를줘  
            }
            });
        connection.release();//pool 연결한거 풀기
    }) 
})
module.exports = router;