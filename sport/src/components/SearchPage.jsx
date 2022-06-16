import React, { Component } from 'react';
import '../css/search.css';
import '../js/search.js';
class SearchPage extends Component {
    state = {}

    render() {
        return (
            <div className='container'>
                <span>首頁</span><span> / </span><span className='text-danger'>探索</span>
                <div className='row mt-3'>
                    <div className='col-3 border'>
                        <h3>篩選</h3>
                        <form className='mt-3'>
                            <input type="text" placeholder="搜尋" />

                            <div className='d-flex justify-content-between mt-3'><span>地點</span><span className='text-secondary'>清除</span></div>
                            <select>
                                <option value="" selected="selected"></option>
                                <option value="KL">基隆</option><option value="Tp">台北</option><option value="TY">桃園</option>
                            </select>

                            <div className='d-flex justify-content-between mt-3'><span>區域</span><span className='text-secondary'>清除</span></div>
                            <select>
                                <option value="" selected="selected"></option>
                                <option value="KL">基隆</option><option value="Tp">台北</option><option value="TY">桃園</option>
                            </select>

                            <div className='d-flex justify-content-between mt-3'><span>日期</span><span className='text-secondary'>清除</span></div>
                            <input type="date" /> ~<input type="date" />

                            <div className='d-flex justify-content-between mt-3'><span>星期</span><span className='text-secondary'>清除</span></div>
                            <input type="checkbox" id="mon" name="mon" />
                            <label for="mon" className='m-1'> 星期一</label><br />
                            <input type="checkbox" id="tues" name="tues" />
                            <label for="tues" className='m-1'> 星期二</label><br />
                            <input type="checkbox" id="wed" name="wed" />
                            <label for="wed" className='m-1'> 星期三</label><br />
                            <input type="checkbox" id="thur" name="thur"/>
                            <label for="thur" className='m-1'> 星期四</label><br />
                            <input type="checkbox" id="fri" name="fri" />
                            <label for="fri" className='m-1'> 星期五</label><br />
                            <input type="checkbox" id="sat" name="sat" />
                            <label for="sat" className='m-1'> 星期六</label><br />
                            <input type="checkbox" id="sun" name="sun" />
                            <label for="sun" className='m-1'> 星期日</label><br />

                            <div className='d-flex justify-content-between mt-3'><span>時段</span><span className='text-secondary'>清除</span></div>
                            <input type="range" />

                            <div className='d-flex justify-content-between mt-3'><span>價錢</span><span className='text-secondary'>清除</span></div>
                            <input type="radio" name='price'/> $ 0 ~ $ 500 <br />
                            <input type="radio" name='price'/> $ 501 ~ $ 1,000 <br />
                            <input type="radio" name='price'/> $ 1,001 ~ $ 2,000 <br />
                            <input type="radio" name='price'/> $ 2,001 ~ $ 3,000 <br />
                            <input type="radio" name='price'/> $ 3000 ~ 以上

                            <div className='d-flex justify-content-between mt-3'><span>類別</span><span className='text-secondary'>清除</span></div>
                            <input type="checkbox" id="sun" name="sun" />
                            <label for="sun" className='m-1'> 星期日</label><br />

                            <div className='d-flex justify-content-between mt-3'><span>人數</span><span className='text-secondary'>清除</span></div>
                            <input type="radio" name='people'/> 一對一 <br />
                            <input type="radio" name='people'/> 一對多

                            <input className='mt-3' type="submit" value={'顯示結果'}/>

                        </form>
                    </div>
                    <div className='col-9 border'>
                        <div className='row text-center'>
                            <div className='col-6 shadow btn'>找課程</div>
                            <div className='col-6 shadow btn'>找場地</div>
                        </div>
                        <div className='row text-center mt-5'>
                            <div className='col-4'>123</div>
                            <div className='col-4'>123</div>
                            <div className='col-4'>123</div>
                            <div className='col-4 mt-2'>123</div>
                            <div className='col-4 mt-2'>123</div>
                            <div className='col-4 mt-2'>123</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

}

export default SearchPage;