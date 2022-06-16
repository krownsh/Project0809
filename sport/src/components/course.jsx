import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './course.css'


class Course extends Component {
    state = {  } 
    render() { 
        return (
            <div id="box" className='container'>
                <h5>aa/bb/cc</h5>
                <div className='row justify-content-center'>
                    
                    <div id="carouselExampleSlidesOnly" class="carousel slide col-lg-7" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://fakeimg.pl/350x200/ff0000/000" class="d-block w-100" />
                            </div>
                            <div class="carousel-item">
                                <img src="https://fakeimg.pl/350x200/ff0000,128/000,255" class="d-block w-100" />
                            </div>
                            <div class="carousel-item">
                                <img src="https://fakeimg.pl/350x200/?text=Hello" class="d-block w-100" />
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-5 row justify-content-center'>
                        <div className='row justify-content-center'>
                            <p className='col-lg-12 my-3 text-center'>肌地台 自由教練場地租借</p>
                            <div className='col-lg-12 mx-3 text-center'>
                                <span id='spa'>拳擊格鬥</span>
                                <span id='spa'>懸吊運動</span>
                                <span id='spa'>混合健身</span>
                                <span id='spa'>高強度間歇訓練</span>
                                <span id='spa'>有氧訓練</span>
                            </div>
                            <div className='col-lg-12 m-3 text-center'>
                                <img id='icon' src={require('./icon/map.png')} />
                                <span className='p-3'>臺中市北屯區東山路一段156-6</span>
                            </div>
                            <div className='col-lg-12 text-center'>
                                <img src="https://dummyimage.com/100/000/fff" className='img-fluid mx-3' id='img'/>
                                <span >$ 300/60分鐘</span>
                            </div>
                            <button id='buttonA' className='mx-3'>聯絡場地</button><br />
                            <button id='buttonA' className='m-3'>立即租借</button>
                        </div>
                        
                    </div>

                    <div className='container my-5'>
                        <div className='container'>
                            <p id='title' className='container'>場地簡介</p>
                            <p>
                                在離開俱樂部後，我也台中到處跑去上課，深知自由教練的不易，剛好有機會承租了這個店面，環境不大，但該有的設備都有，專門為自由教練所準備的場地，外面有個休息區，沒課的時候可以在這裡休息、訓練。
                                會招收少數的會員自主訓練，在這裏不會有太大的壓力，不會有教練強迫推銷課程，可以很自在的在這裡運動，環境都有監視器、置物櫃，也有準備AED，櫃檯處也提供咖啡機使用。
                            </p>
                        </div>
                        <div className='container'>
                            <p id='title' className='container'>租借限制</p>
                            <p>無限制，一般消費者、教練/老師皆可租借(可帶學員入場教學)</p>
                        </div>
                        <div className='container'>
                            <p id='title' className='container'>設備與服務</p>
                            <ul>
                                <li>場地器材</li>
                                <ul>
                                    <p>基本設施</p>
                                </ul>
                                <li>場館設備</li>
                                <ul>
                                    <p>基本設施</p>
                                    <p>安全設施</p>
                                    <p>衛浴清潔</p>
                                    <p>其他服務</p>
                                </ul>
                            </ul>
                        </div>
                        <div className='container'>
                            <p id='title' className='container'>營業時段</p>
                            <ul>
                                <li>固定開放時段</li>
                            </ul>
                            <div className='container'>
                                <div class="row">
                                    <table class="table" data-toggle="table">
                                        <tbody>
                                            <tr>
                                                <th scope="row" className='bg-info'>週一</th>
                                                <td>08:00 ~ 23:00</td>
                                                <th scope="row" className='bg-info'>週二</th>
                                                <td>08:00 ~ 23:00</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className='bg-info'>週三</th>
                                                <td>08:00 ~ 23:00</td>
                                                <th scope="row" className='bg-info'>週四</th>
                                                <td>08:00 ~ 23:00</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className='bg-info'>週五</th>
                                                <td>08:00 ~ 23:00</td>
                                                <th scope="row" className='bg-info'>週六</th>
                                                <td>08:00 ~ 23:00</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className='bg-info'>週日</th>
                                                <td>08:00 ~ 23:00</td>
                                                <th scope="row"></th>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            
                            </div>
                        </div> 
                        <div className='container'>
                             <p id='title' className='container'>收費方式</p>
                             <ul>
                                <li>預約</li>
                                <p>正常時段：$ 300 / 60 分鐘最低購買次數為 1 次購買滿 30 次，每次折扣 $ 100</p>
                            </ul>
                        </div>                       
                        <div className='container'>
                            <p id='title' className='container'>地址</p>
                            <div className='row align-items-center m-2'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.055014686727!2d120.70789029999999!3d24.169803299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917f71782ec5b%3A0xdf6c6936864c2259!2zNDA25Y-w5Lit5biC5YyX5bGv5Y2A5p2x5bGx6Lev5LiA5q61MTU2LTbomZ8!5e0!3m2!1szh-TW!2stw!4v1655384835675!5m2!1szh-TW!2stw" className='col-lg-6' height='300vh'></iframe>
                                <div className='col-lg-6 container text-center'>
                                    <p className='text-align:center'>臺中市北屯區東山路一段156-6</p>
                                    <a href="https://goo.gl/maps/PnXNtARA1F72HbM67" target="_blank">
                                        <img id='icon' src={require('./icon/google-maps.png')} />查看地圖
                                    </a>
                                </div>
                            </div>
                            
                        </div>                        
                        <div className='container'>
                            <p id='title' className='container'>取消政策</p>
                            <div className='container'>
                                <div className='row'>
                                    <h5 className='col-lg-5 p-3'><img id='icon' src={require('./icon/check.png')} className='mx-2'/>課程開始1小時前</h5>
                                    <h5 className='col-lg-5 p-3'><img id='icon' src={require('./icon/cross.png')} className='mx-2'/>課程開始少於1小時</h5>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <p id='title' className='container'>注意事項</p>
                            <div className='container'>
                                <div className='row'>
                                    <h5 className='col-lg-12 p-3'><img id='icon' src={require('./icon/no-smoke.png')} className='mx-2'/>禁止吸煙</h5>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <p id='title' className='container'>授課師資</p>
                            <div className='text-center mt-3'>
                                    <img src="https://dummyimage.com/100/000/fff"  style={{height: '100%'}} id='img'/>
                                    <span className='p-5'>name</span>
                            </div>
                            <div className='row container mt-4'>
                                <div className='col-12'>
                                        <dl>
                                            <dt>證照</dt>
                                            <ul>
                                                <p>ACE CPT 美國運動委員會 私人教練專業證照認證</p>
                                                <p>AFAA PFT 美國運動體適能協會 個人體適能指導員</p>
                                                <p>TRX STC 懸吊訓練師</p>
                                                <p>Cross core 懸吊訓練</p>
                                                <p>VIPR 功能性訓練</p>
                                                <p>運動體適能營養專家LV1+LV2</p>
                                                <p>SMART 自我筋膜放鬆</p>
                                                <p>肌能系貼紮</p>
                                                <p>身體感知訓練技巧</p>
                                            </ul>
                                        </dl>
                                </div>
                            </div>
                            
                        </div>
                        <div className='container'>
                            <p id='title' className='container'>課後評價 <span style={{fontSize: '20px'}}>共有 81 人向您推薦這堂課</span></p>
                            
                            
                        </div>
                        <div className='container'>
                            <p id='title' className='container'>關聯課程</p>
                        </div>
                        
                    </div>
                    




                    
                </div>
                    
            </div>
        );
    }
}
 
export default Course;