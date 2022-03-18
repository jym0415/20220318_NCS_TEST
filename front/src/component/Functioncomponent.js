import axios from 'axios';
import React, {useEffect, useState}from 'react';

 function Functioncomponent() {
    const [ mytext , mytextUpdate ] = useState('아직디비안와서 나혼자임')

    useEffect( async () => {
        await axios.post('/getsend/post',{})
        .then( res => {
            mytextUpdate(res.data.title)
            }           
        )
        

    }, [])
  return (
    <div>
        <h3>post는 axios.post로 응답받아야해!</h3>
        <p>post나와라 : {mytext}</p>
    </div>
  )
}

export default Functioncomponent
