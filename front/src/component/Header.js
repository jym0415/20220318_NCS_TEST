import React, { Component } from 'react';

class Header extends Component {
    
    render() {
        return (
        <div className='hd container' id='hd'>
            <div className='hdtop col-12 '>
            <h2 className='text-center'>Hello Yumi!</h2>
            </div>
            <div className='hdmain  row d-lg-flex'>
                <div className='hdLeft col-7 p-md-4 col-lg-6 order-lg-1'>
                    <div className="hdmainimg">
                        <div className="hdimg ">
                    </div>
                </div>
                </div>
                <div className="hdRight col-5 p-md-4 col-lg-3 order-lg-0">
                        <div className="hdproflie ">
                            <h3 className='py-2 py-md-4'>PROFILE</h3>
                            <ul>
                                <li className='py-2 py-md-4'>정유미</li>
                                <li className='py-2 py-md-4'>1995. 04. 15</li>
                                <li className='py-2 py-md-4'>010 4145 2282</li>
                                <li className='py-2 py-md-4'>jym9504@gmail.com</li>
                            </ul>
                        </div>
                        <div className="hdlicense">
                            <h3 className='py-2 py-md-4'>LICENSE</h3>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='py-2 py-md-4'>운전면허</p>
                                <p>2019.04</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='py-2 py-md-4'>미용사 (네일)</p>
                                <p>2015.05</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='py-2 py-md-4'>구글애널리틱스</p>
                                <p>2018.05</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='py-2 py-md-4'>웹 디자인 기능사</p>
                                <p>2018.05</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='py-2 py-md-4'>컴퓨터 활용능력 1급</p>
                                <p>2018.05</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='py-2 py-md-4'>GTQ 그래픽 기술자격 1급</p>
                                <p>2018.05</p>
                            </div>
                            
                            
                        </div>

                </div>                             
                <div className='hdbottom col-12 p-md-4 col-lg-3 order-lg-2'>
                    <div className="hdskills  ">
                        <h3 className='py-2 py-md-4'>SKILLS</h3>
                        <p class="progress-title">Html5 & Css3</p>
                        <div className='skills d-flex align-items-center'>
                            <div class="progress ">
                                <div class="progress-bar HTML5"></div>
                            </div>   
                            <span>80%</span>
                        </div>
                        <p class="progress-title">js & jQuery</p>
                        <div className='skills d-flex align-items-center'>
                            <div class="progress ">
                                <div class="progress-bar js"></div>
                            </div>   
                            <span>70%</span>
                        </div>
                        <p class="progress-title">Node & React</p>
                        <div className='skills d-flex align-items-center'>
                            <div class="progress ">
                                <div class="progress-bar node"></div>
                            </div>   
                            <span>65%</span>
                        </div>
                        <p class="progress-title">Mysql & Xml</p>
                        <div className='skills d-flex align-items-center'>
                            <div class="progress ">
                                <div class="progress-bar mysql"></div>
                            </div>   
                            <span>70%</span>
                        </div>
                        <p class="progress-title">포토샵 & 일러스트</p>
                        <div className='skills d-flex align-items-center'>
                            <div class="progress ">
                                <div class="progress-bar photo"></div>
                            </div>   
                            <span>80%</span>
                        </div> 
                        <p class="progress-title">피그마 & 프로크리에이트</p>
                        <div className='skills d-flex align-items-center'>
                            <div class="progress ">
                                <div class="progress-bar figma"></div>
                            </div>   
                            <span>85%</span>
                        </div>     
                    </div>
                </div>   
            </div>            
        </div>
        );
    }
}

export default Header;