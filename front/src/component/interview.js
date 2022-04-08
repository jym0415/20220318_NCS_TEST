import React, {useEffect, useState} from 'react'; 
import axios from 'axios';

const Interview = (props) => {   
    let [ interviewId, interviewIdUpdate ] = useState([]);  
    //초기값 interviewId= [] , interviewIdUpdate([...result.data])실행되고나서 데이터가
    // 들어오면 nterviewId 값이바뀜
    const [typeData,insertDB] = useState(0);


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
                                    //  console.log(result)
                                    interviewIdUpdate([...result.data]); 
                                    insertDB(result.data[result.data.length -1 ].keyno);                                                 
                                    }
                                catch(err){ console.log("타입확인 : " +err.message) }
                                 }
            )
             .catch ( e => { console.log(e +'이유로 통신이 불안전함') }
            ) 
    } 
    useEffect( () => {  interviewDataSetting(); } , [typeData]  ) 
    //typeData값이 변할때 재렌더링해라

        return (  
            <div> 
                <h2>{ interviewId.length > 0 ? props.titlenm : "데이터전송중..." }</h2>
             {
                 interviewId.map(( contant, i ) => {
                     return(
                         <li key={contant.keyno}>
                             <h3>{i+1} {contant.subject}</h3><div>{contant.content}</div>
                         </li>
                     )
                 })
             }
            </div>
        );   
}
export default Interview;