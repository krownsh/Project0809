import React, { Component } from 'react';
import NavBarOK from './components/navBarOK.jsx';
// import NavBarContent from './components/navBarContent.jsx';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
    state = { 
  
     } 
    render() { 
      return (
        <HashRouter>
          <NavBarOK/>
        </HashRouter>
      );
    }
  }
   
  export default App;