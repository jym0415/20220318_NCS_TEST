import React from "react";
import axios from 'axios';
import $ from "jquery";


export default function interviewform(props){

const submitClick = async (type, e) => { 
    //비동기식,첫번째 인자: xml까지->sql 선택의 key 
    //두번째 인자는 마우스피드백
    //이벤트 리스너 ->함수저장 -> 객체의이벤트

    const  fnValidate = (e) =>{ //유효성검사->true,flase
            if(!$('#agreeTerm').is(':checked')){   
                alert("동의하시게나");
                $('label[for="agreeTerm"]').addClass('notice');                 
                return false;
            }
                // if(){
                //     return false;
                // }
            return true; //제일아래있어야함.if를 다 통과하면 true값 반환
      
          }

     
      if(fnValidate()){ // 동의했기때문에 데이터 모아서 이제 비동기로 노드한테 보내야겟다
        
        //폼 필드에 내가 원하는대로 사용자가 데이터를 삽입
        var  jsonstr = decodeURIComponent($("[name='"+props.botable+"']").serialize());           
        var  json_form = JSON.stringify(jsonstr).replace(/\&/g, '\",\"') 
        json_form = "{\""+ json_form.replace(/=/gi, '\":\"') + "\"}"   
        //json화 시킴 -> 노드 에게주려고

        //노드 -> xml -> sql
        try{
            axios({
                url : `/preinterview?type=${props.botable}`, //요청
                header : {
                    "Content-Type" : "application/json", //데이터변형을 막기위해 string화
                },
                method : "POST",
                body : json_form
            })
            .then(
                (result) => {  
                            try{
                                console.log(result)
                            
                                    // if(){
                                    //     alert("인터뷰 완료")
                                    // }else{
                                        
                                    // }
                                                   
                                }
                            catch(err){ console.log("타입확인 : " +err.message) }
                             }
        )
             .catch ( e => { console.log(e +'이유로 데이터 못옴') }
        ) 
        }
        catch(err){
            console.log('서버통신 문제 잠시후 다시시도 : '+err)
        }

      }
       // e.preventDefault();     
               

}
  return (
    <div>
    <h2>{ props.titlenm }</h2>
            <form  action=''  method='post' name={props.botable}>
            <div className='formStyle'>
                <dl>
                    <dt><label htmlFor='wr_subject'>인터뷰제목</label></dt>
                    <dd>
                        <input type='text' name='wr_subject' id="wr_subject" required />
                    </dd>
                </dl>
                <dl>
                    <dt><label htmlFor="wr_content">인터뷰내용</label></dt>
                    <dd>
                        <textarea rows={5} name="wr_content" id="wr_content"  required >

                        </textarea>
                    </dd>
                </dl>
                <div className="agree">
                    <input type="checkbox" id="agreeTerm" />
                    <label htmlFor="agreeTerm"><span>개인정보정책동의</span></label>
                </div>
                <a href="#none" onClick={e => { submitClick(props.botable, e) }}  className='btn' > 인터뷰올리기 </a>
            </div>
            </form> 
    </div>
  ) 
}