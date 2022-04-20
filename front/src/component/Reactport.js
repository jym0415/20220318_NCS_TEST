import React, { Component } from 'react';

class Reactport extends Component {
    render() {
        return (
            <div id='reactportfolio' className='rel'>
                    <div className="bg"></div>
                    <div className='container d-flex'>
                    <div className='reactTitle rel'>
                        <img src="/img/react.png" alt="reactimg"/>
                    </div>
                    <div className="row w-100">
                        <div className='reactLeft col-8 d-lg-flex'>
                            <div className='reactImgBox col-6 order-lg-1'>
                                <div className='reactImg'></div>
                            </div>
                            <div className='reactContent col-6 order-lg-0'>
                                <ul className='d-flex keyword'>
                                    <li>#RestFul</li>
                                    <li>#AWS</li>
                                    <li>#Xml</li>
                                </ul>
                                <ul>
                                    <li>제작특징 서술</li>
                                    <li>제작특징 서술</li>
                                    <li>제작특징 서술</li>
                                </ul>
                            </div> 
                        </div>
                        <div className='reactRight col-4'>
                            <div className='reactPortfolio'>
                                <ul>
                                    <li className="reactlist ">제작특징</li>
                                    <li className="reactlist ">기획서</li>
                                    <li className="reactlist ">디자인</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default Reactport;