
var express= require('express')
var app = express();

var jym = require('./api/jym')

app.listen(8080,function(){
    console.log('localhost 8080 접속완료')
})
app.post('/',(req,res) => {
    res.send('첫페이지');
})
app.use('/preinterview', jym)

