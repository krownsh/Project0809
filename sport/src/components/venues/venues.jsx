import React, { Component } from 'react';
import Card from '../Card';
import 'bootstrap/dist/css/bootstrap.css';
// import 'react-bootstrap-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './venues.css'

class Venues extends Component {
    state = { } ;

    render() { 
        return (
            <div id="box" className='container'>
                <h5>aa/bb/cc</h5>
                    {/* <Carousel>
                        <div>
                            <img src="https://fakeimg.pl/350x200/ff0000/000" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src="https://fakeimg.pl/350x200/ff0000/000" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src="https://fakeimg.pl/350x200/ff0000/000" />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel> */}
                <div className='row justify-content-center'>
                    <div id="carouselExampleSlidesOnly" className="carousel slide col-lg-7" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://fakeimg.pl/350x200/ff0000/000" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://fakeimg.pl/350x200/ff0000,128/000,255" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://fakeimg.pl/350x200/?text=Hello" className="d-block w-100" />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 row justify-content-center'>
                        <div className='row justify-content-center'>
                            <h2 className='col-lg-12 my-3 text-center'>每日線上視訊直播運動課程</h2>
                            <div className='col-lg-12 mx-3 text-center'>
                                <span id='spa'>團體課程</span>
                                <span id='spa'>混合健身</span>
                            </div>
                            <div className='col-lg-12 m-3 text-center'>
                                <img id='icon' src={require('../icon/chronometer.png')} />
                                <p className='p-3'>臺中市北屯區東山路一段156-6</p>
                            </div>
                            <div className='col-lg-12 text-center mt-0'>
                                <img id='icon' src={require('../icon/place.png')} />
                                <span >線上視訊教學</span>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6 text-center'>
                                    <img src="https://dummyimage.com/100/000/fff" className='img-fluid mx-3 mt-1 rounded-circle h-100'/> 
                                </div>
                                <div className='col-lg-6 mt-2 ml-1 text-center'>
                                    <h4 className='mt-2'>$ 50+ </h4>
                                    <button className='button m-1 mt-4 w-100'>聯絡師資</button><br />
                                    <button className='button m-1 w-100'>立即購課</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className='container my-5'>
                        <div className='container'>
                            <p id='title' className='container'>課程簡介</p>
                            <div className='container'>
                                <p>
                                    在離開俱樂部後，我也台中到處跑去上課，深知自由教練的不易，剛好有機會承租了這個店面，環境不大，但該有的設備都有，專門為自由教練所準備的場地，外面有個休息區，沒課的時候可以在這裡休息、訓練。
                                    會招收少數的會員自主訓練，在這裏不會有太大的壓力，不會有教練強迫推銷課程，可以很自在的在這裡運動，環境都有監視器、置物櫃，也有準備AED，櫃檯處也提供咖啡機使用。
                                </p>
                            </div>
                            
                        </div>
                        <div className='container'>
                            <p id='title' className='container'>課程時段</p>
                            <ul>
                                <li>特定時段</li>
                                {/* vvvvvvv */}
                            </ul>
                        </div>
                        <div className='container'>
                            <p id='title' className='container'>課程地點</p>
                            <ul>
                                <li>師資指定地點</li>
                            </ul>
                            <div className='container'>
                                <div className='row align-items-center m-2'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.055014686727!2d120.70789029999999!3d24.169803299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917f71782ec5b%3A0xdf6c6936864c2259!2zNDA25Y-w5Lit5biC5YyX5bGv5Y2A5p2x5bGx6Lev5LiA5q61MTU2LTbomZ8!5e0!3m2!1szh-TW!2stw!4v1655384835675!5m2!1szh-TW!2stw" className='col-lg-6' height='300vh'></iframe>
                                    <div className='col-lg-6 container text-center'>
                                        <p className='text-align:center'>臺中市北屯區東山路一段156-6</p>
                                        <a href="https://goo.gl/maps/PnXNtARA1F72HbM67" target="_blank">
                                            <img id='icon' src={require('../icon/google-maps.png')} />查看地圖
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <p id='title' className='container'>取消政策</p>
                            <div className='container'>
                                <div className='row'>
                                    <h5 className='col-lg-5 p-3'><img id='icon' src={require('../icon/check.png')} className='mx-2'/>
                                        課程開始1小時前
                                        <span style={{fontSize: '15px'}}> (可全額退款100%) </span>
                                    </h5>
                                    <h5 className='col-lg-5 p-3'><img id='icon' src={require('../icon/cross.png')} className='mx-2'/>
                                        課程開始少於1小時
                                        <span style={{fontSize: '15px'}}> (不可退款) </span>
                                    </h5>
                                </div>
                            </div>
                        </div> 
                        <div className='container'>
                            <p id='title' className='container'>授課師資</p>
                            <div className='text-center mt-3'>
                                    <img src="https://dummyimage.com/100/000/fff" className='rounded-circle h-100'/>
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
                            <div className='container'>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-5 mx-5'>
                                        <table className="table " data-toggle="table">
                                            <tr>
                                                <th scope="row" className='row text-center'>
                                                    <img src="https://dummyimage.com/100/000/fff" className='col-5 mt-3 rounded-circle h-100'/>
                                                    <div className='col-5 mx-3 my-2'>
                                                        <h3>name <span style={{fontSize: '15px'}}> time </span></h3>
                                                        <p className='mt-3'>我會想再繼續租借我會想再繼續租借我會想再繼我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借</p>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row" className='row text-center'>
                                                    <img src="https://dummyimage.com/100/000/fff" className='col-5 mt-3 rounded-circle h-100'/>
                                                    <div className='col-5 mx-3 my-2'>
                                                        <h3>name <span style={{fontSize: '15px'}}> time </span></h3>
                                                        <p className='mt-3'>我會想再繼續租借我會想再繼續租借我會想再繼我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借</p>
                                                    </div>
                                                </th>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className='col-lg-5 mr-5'>
                                        <table className="table " data-toggle="table">
                                            <tr>
                                                <th scope="row" className=' row text-center'>
                                                    <img src="https://dummyimage.com/5000/000/fff" className='col-5 mt-3 rounded-circle h-100'/>
                                                    <div className='col-5 mx-3 my-2'>
                                                        <h3>name <span style={{fontSize: '15px'}}> time </span></h3>
                                                        <p className='mt-3'>我會想再繼續租借我會想再繼續租借我會想再繼我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借</p>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row" className='row text-center'>
                                                    <img src="https://dummyimage.com/100/000/fff" className='col-5 mt-3 rounded-circle h-100'/>
                                                    <div className='col-5 mx-3 my-2'>
                                                        <h3>name <span style={{fontSize: '15px'}}> time </span></h3>
                                                        <p className='mt-3'>我會想再繼續租借我會想再繼續租借我會想再繼我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借我會想再繼續租借</p>
                                                    </div>
                                                </th>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <p id='title' className='container'>關聯課程</p>
                            <div className='container'>
                                <div className='row mt-5 justify-content-center'>
                                    <Card />
                                    <Card />
                                    <Card />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Venues;