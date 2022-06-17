import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

// 導覽列物件
import navBarContent from './navBarContent.jsx';

// 首頁
import home from './navBarPage/home.jsx'; 
   
// 購物車+商品  
// 關於我

class NavBarOK extends Component {
    state = { 
        navStyle : {
            "display":"flex",
            "justifyContent":"center",
            "margin":"-1% 20% 0px 30%",
        },
        count:0
     } 


    render() { 
        return (
            <HashRouter>
            <div id="topTest" className='sticky-top bg bg-white mt-1' style={this.state.testStyle}>
            <navBarContent/>
            </div>
                <div style={{margin:'auto'}}>
                <Switch>
                    <Route path="/123" component={home} exact/>
                    {/* <Route path="/promotions" component={promotions} exact/>
                    <Route path="/allCommodity" component={allCommodity} exact/>
                    <Route path="/brandSort" component={brandSort} exact/>
                    <Route path="/tennisRacket" component={tennisRacket} exact/>
                    <Route path="/accessories" component={accessories} exact/>
                    <Route path="/contactUs" component={contactUs} exact/>

                    <Route path="/login" component={login} exact/>
                    <Route path="/register" component={register} exact/>
                    <Route path="/shoppingCart" component={shoppingCart} exact/> */}
                 </Switch>

                 
            </div>
            </HashRouter>
        );
    }
}
 
export default NavBarOK;