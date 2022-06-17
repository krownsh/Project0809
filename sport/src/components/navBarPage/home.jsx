import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../../scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap';
import Content from '../content.jsx';
class home extends Component {
    state = {  }    
    render() { 
        return (
            <div>
                <Content/>
            </div>
        );
    }
}
 
export default home;