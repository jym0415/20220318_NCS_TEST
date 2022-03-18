import React, { Component } from 'react'
import axios from 'axios';

export default class Classcomponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            mytext : '디비기다리는중..',
            mytextjson : ''
        }
    }
    componentDidMount = async () =>{
        const gettext = await axios.get('/getsend')
        this.setState({ mytext : gettext.data })
        const getjson = await axios.get('/getsend/getjson')
        this.setState({ mytextjson : getjson.data.url })
    }
  render() {
    return (
        <div>
            <h3>나는 클래스형 컴포넌트야~</h3>
            <p>componentDidMount 함수에 의해서 해당컴포넌트가 새로고침 되는거지</p>
            <p>data가 텍스트일때 : {this.state.mytext}</p>
            <p>json포멧으로 왔기때문에 key까지 들어가야만 값을 얻음 : {this.state.mytextjson}</p>
        </div>
    );
  }
}
