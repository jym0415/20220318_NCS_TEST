var express= require('express')
var app = express();

var getsend = require('./routes/getsend')
var postsend = require('./routes/postsend')
var sqlsend = require('./routes/sqlsend')

app.get('/',(req,res) => {
    res.send('첫페이지');
})

app.use('/postsend', postsend)
app.use('/getsend', getsend)
app.use('./sqlsend', sqlsend)


app.listen(8080,() => {
    console.log('콘솔확인 구동완료!')
})