var express= require('express')
var app = express();

var getsend = require('./api/getsend')
var postsend = require('./api/postsend')
var sqlsend = require('./api/sqlsend')
var jym = require('./api/jym')

app.get('/',(req,res) => {
    res.send('첫페이지');
})

app.use('/postsend', postsend)
app.use('/getsend', getsend)
app.use('/sqlsend', sqlsend)
app.use('/preinterview', jym)

app.listen(8080,() => {
    console.log('콘솔확인 구동완료!')
})