import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap';
import { NavLink } from 'react-router-dom';

class NavBarContent extends Component {
    state = { 
    } 

    render() { 
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <div ><NavLink  to="/" exact><img src="https://dummyimage.com/200x50/000/fff"/></NavLink></div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">    
                            <li class="nav-item">
                            <div id=""><NavLink className="nav-link navBarBox1" to="/coursesAndVenues" exact >課程與場地</NavLink></div>
                            </li>
                            <li class="nav-item">
                            <div id="" ><NavLink className="nav-link " to="/becomeCoach" exact >成為教練</NavLink></div>
                            </li>
                            <li class="nav-item dropdown">
                            <div id="" ><NavLink className="nav-link " to="/rentSpace" exact >租場地</NavLink></div>
                            </li>
                            <li class="nav-item">
                            <div id="" ><NavLink className="nav-link " to="/loginRegister" exact >登入/註冊</NavLink></div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
             </div>
        );
    }
}


export default NavBarContent