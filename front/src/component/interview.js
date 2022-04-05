import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
import $ from 'jquery';

const Interview = (props) => {   
    let [ interviewId, interviewIdUpdate ] = useState([]);  
    //초기값 interviewId= [] , interviewIdUpdate([...result.data])실행되고나서 데이터가
    // 들어오면 nterviewId 값이바뀜
    const [typeData,insertDB] = useState(0);
    const titletext = props.titlenm; 

    const interviewDataSetting = async () => {                      
    //const 없으면 먼저터짐 순서맞추기위해 꼭 넣어줘야함
             axios({
                        url : `/preinterview?type=${props.botable}`,
                        method : 'POST',
                })
             .then(
                    (result) => {  
                                    //select 전용
                                try{
                                     console.log(result)
                                    interviewIdUpdate([...result.data]); 
                                    insertDB(result.data[result.data.length -1 ].wr_id);                                                 
                                    }
                                catch(err){ console.log("타입확인 : " +err.message) }
                                 }
            )
             .catch ( e => { console.log(e +'이유로 통신이 불안전함') }
            ) 
    } 
    useEffect( () => {  interviewDataSetting(); } , [typeData]  ) 
    //typeData값이 변할때 재렌더링해라

    const submitClick = async (type, e) => {

        const fnValidate = (e) => {//여기서 유효성검사 필드에값이 맞지않거나
            return true;
        }
        if(fnValidate()){
        var jsonstr = $("[name='interviewwrite']").serialize(); //네임=값&네임=값    
        
        alert("1."+jsonstr);
        var json_form = JSON.stringify(jsonstr).replace(/\&/g, '\",\"') //네임=값","네임=값
        alert("2."+json_form);
        json_form = "{\""+ json_form.replace(/=/gi, '\":\"') + "\"}" //{ 네임":"값","네임":"값}
        alert("3.데이터를 한번에  json문법화됨 serialize() 안쓰면 일일이 담아야 함 "+json_form);

        e.preventDefault(); //react에서는 폼태그 전송 막기 위해서는 return false 가 아니다.
       
        }
    }
        return (  
            <div> 
                <h2>{ interviewId.length > 0 ? titletext : "데이터전송중..." }</h2>
             {
                 interviewId.map(( contant, i ) => {
                     return(
                         <li key={contant.wr_id}>
                             <h3>{i+1} {contant.wr_subject}</h3><div>{contant.wr_content}</div>
                         </li>
                     )
                 })
             }
            </div>
        );   
}
export default Interview;