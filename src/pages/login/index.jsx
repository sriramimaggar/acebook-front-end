import React from "react";
import "./style.css";

function Login() {
  return (
    <>
      <div className="login_bg">
        <section className="left_container">
          <div className="login_container">
            <span className="login_text top">Start your journey</span>
            <h2 className="login_title">Login Now !</h2>
            <form className="login_form">
              <div className="input_container">
                <label className="login_text">Username</label>
                <input type="text" className="input_field" />
                <span className="err_msg hide">Username invalid</span>
              </div>
              <div className="input_container">
                <label className="login_text">Password</label>
                <input type="password" className="input_field" />
                <span className="err_msg hide">Password invalid</span>
              </div>
              <div className="footer_container">
                <div className="btn_container">
                  <button className="login_btn btn">Login</button>
                  <button className="register_btn btn">Register</button>
                </div>
                <span className="forgot_password">
                  Forgot Password?<b>Click Here!</b>
                </span>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
