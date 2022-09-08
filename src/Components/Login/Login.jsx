import React from 'react'
import '../../Styles/global.css'
import '../Login/login.css'
const Login = () => {
  return (
    <div className="login">
        <h2>Crop management system</h2>

        <h3>Login</h3>
        <div><div className="circle">
                    <h1><i class="fa-solid fa-user"></i></h1>
                </div>
            <form>
                
                <div className="user-box">
                    <input type="text" required/>
                    <label ><i class="fa fab-light fa-signature"></i>UserID</label>
                </div>
                <div className="user-box">
                    <input type="password" required/>
                    <label><i class="fa-solid fa-lock"></i>Password *</label>
                </div>
                    <a href="">
                        forgot Password
                    </a>
                <div className="submit">
                    <button className="register-btn">
                    <h4>Register</h4>
                    </button>
                    <button className="login-btn">
                        <h4>Login</h4>
                    </button>
                </div>
                    
            </form>
        </div>
    </div>
    
  )
}

export default Login
