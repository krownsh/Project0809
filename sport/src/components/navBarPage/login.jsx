import React, { Component } from 'react';

class Login extends Component {
    state = { 
        boxStyle:{
            // display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }

     } 
    render() { 
        return (
            <div className='col-12' style={this.state.boxStyle}>
            <div>
            <a>會員帳號：</a>
                <input id="inputText" type="text" />
                <label htmlFor="inputText"> </label>
            </div>
            <br />
            <div>
            <a>會員密碼：</a>
                <input id="inputText"type="text" />
                <label htmlFor="inputText"> </label>
            </div>
            <div >
                <button >登入</button>
            </div>
            <div>
                <a>忘記密碼? </a>
                <a>註冊 </a>
            </div>

            </div>
        );
    }
}
 
export default Login;