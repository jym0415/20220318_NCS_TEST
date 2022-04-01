
var express= require('express')
var app = express();

// var getsend = require('./api/getsend')
// var postsend = require('./api/postsend')
// var sqlsend = require('./api/sqlsend')
var jym = require('./api/jym')

app.listen(8080,function(){
    console.log('localhost 8080 접속완료')
})
app.post('/',(req,res) => {
    res.send('첫페이지');
})

// app.use('/postsend', postsend) 데이터연동 안하면 굳이필요없음 리액트에서 하면됨
// app.use('/getsend', getsend)
// app.use('/sqlsend', sqlsend)
app.use('/preinterview', jym)

