import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap';
import HomeHead from './contentComponents/HomeHead.jsx'
class Content extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <HomeHead/>
            </>
        );
    }
}
 
export default Content;