import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';

class NavBarContent extends Component {
    state = { 
     } 

    render() { 
        return (
            <div>
            <div className='text-center ml-5'>
               <nav  className="navbar navbar-expand-lg navbar-light ml-5 " id="indexNav" >
               <div className="collapse navbar-collapse justify-content-center ml-5 "  id="navbarSupportedContent">
               <ul className="navbar-nav">
                   <li className="nav-item active">
                   <a className="nav-link"  ><NavLink to="/123" exact><div id="text1" >首頁</div></NavLink></a>
                   </li>

                   <li className="nav-item">
                       <a className="nav-link" ><NavLink to="/allCommodity" id="text1" exact >全部商品</NavLink></a>
                   </li>
                   <li className="nav-item dropdown">
                   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                   <NavLink to="/brandSort" exact >品牌分類</NavLink>
                   </a>
                   <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                       <NavLink className="dropdown-item" to="/brandSort" >Wilson</NavLink>
                       <div className=""></div>
                       <NavLink className="dropdown-item" to="/brandSort" >Head</NavLink>
                       <div className=""></div>
                       <NavLink className="dropdown-item" to="/brandSort" >YONEX</NavLink>
                   </div>
                   </li>
                   <li className="nav-item">
                       <NavLink className="nav-link" to="/tennisRacket"  >網球拍</NavLink>
                   </li>
                   <li className="nav-item">
                      <NavLink className="nav-link" to="/accessories" >配件</NavLink>
                   </li>
                   <li className="nav-item">
                   <a className="nav-link" ><NavLink to="/promotions" >優惠活動</NavLink></a>
                   </li>
                   <li className="nav-item">
                      <NavLink  className="nav-link" to="/contactUs" >聯絡我們</NavLink>
                   </li>
               </ul>
           </div>           
           <div>
           <form className="form-inline">
           <p className=" btn btn-outline-success mr-2" ><NavLink to="/login"  >會員登入</NavLink></p>
           <p className=" btn btn-outline-success mr-2" ><NavLink to="/register" >註冊</NavLink></p>
           <p type="button" className="btn btn-outline-success mr-2" >
           <NavLink to="/shoppingCart" >購物車</NavLink>
            <span className="badge badge-warning"></span>
            </p>
           </form>
           </div>
           </nav>

           </div>
      </div>
        );
    }
}


export default NavBarContent