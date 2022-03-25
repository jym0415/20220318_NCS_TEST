var express = require('express');
var mysql = require('mysql');
var mybatisMapper = require('mybatis-mapper')
var dbconfig = require('../db/config.js')   

var router = express.Router()
var pool = mysql.createPool(dbconfig);
//mybatis 모듈 가져와서 mapper정보받아서 query 쿼리문전달

router.use(express.json())
//body정보를 풀어써야해서

mybatisMapper.createMapper(['./mapper/introduceSql.xml'])
//경로 : node-main(yumi.js)을기준으로 써줘야함!!!
//xml가져올준비
var format = { language : 'sql', indent : '  '}

router.get('/',(req, res, next) => {
    var params = req.body;
    var query = mybatisMapper.getStatement(
    params.mapper, params.mapper_id, params, format );

    pool.getConnection(function(err, connection){
        connection.query(
        query,    
        (error, rows) => {
            if(error) throw error;
            res.send(rows);
            });
        connection.release();//추가 실행문   연결한것을풀어라
    }) 
})
module.exports = router;