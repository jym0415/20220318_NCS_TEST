var express= require('express')
var app = express();

app.get('/',(req,res) => {
    res.send('첫페이지');
})

app.listen(8080,() => {
    console.log('콘솔확인 구동완료!')
})