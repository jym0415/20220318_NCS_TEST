var inputdata = 'preinterview';
var [num, orderby] = ['', '']
switch(inputdata){
    case "preinterview" : 
        num = 5;
        orderby = 'asc';
        break;
    case "portfolio" : 
        num = 10;
        orderby ='desc';
        break;
    case "qna" : 
        num = 3;
        orderby = 'desc';
        break
    default:alert('그런테이블 없어,다시확인해');break

}


