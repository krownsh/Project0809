import React, { Component } from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import SearchSitePage from './SearchSitePage';
import SearchCoachPage from './SearchCoachPage';

class MySearchPage extends Component {
    state = {} 
    render() { 
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={SearchCoachPage} exact></Route>
                    <Route path="/site" component={SearchSitePage}></Route>
                </Switch>
            </BrowserRouter>
        )    
    }
}

export default MySearchPage;