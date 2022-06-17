import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

// 導覽列物件
import NavBarContent from './navBarContent';

// 首頁
import home from './navBarPage/home.jsx'; 
   
// 場地與教練
import coursesAndVenues from './navBarPage/coursesAndVenues.jsx';
// 成為教練
import becomeCoach from './navBarPage/becomeCoach.jsx';
// 租場地
import rentSpace from './navBarPage/rentSpace.jsx';
// 會員登入及註冊
import loginRegister from './navBarPage/loginRegister.jsx';
class NavBarOK extends Component {
    state = { 

    } 

    render() { 
        return (
            <HashRouter>
            <div >

            <NavBarContent />
            </div>
                <div style={{margin:'auto'}}>
                <Switch>
                    <Route path="/" component={home} exact/>
                    <Route path="/coursesAndVenues" component={coursesAndVenues} exact/>
                    <Route path="/becomeCoach" component={becomeCoach} exact/>
                    <Route path="/rentSpace" component={rentSpace} exact/>
                    <Route path="/loginRegister" component={loginRegister} exact/>
                 </Switch>

                 
            </div>
            </HashRouter>
        );
    }
}
 
export default NavBarOK;