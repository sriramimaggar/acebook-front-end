import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

function Register() {
  const [startDate, setStartDate] = useState();

  return (
    <>
      <div className="login_bg reg">
        <section className="left_container">
          <div className="login_container">
            <h2 className="login_title reg">Resgiter now !</h2>
            <form className="login_form">
              <div className="input_container">
                <label className="login_text">Name</label>
                <input type="text" className="input_field" placeholder="Name" />
                <span className="err_msg hide">Username invalid</span>
              </div>
              <div className="input_container">
                <label className="login_text">Email</label>
                <input
                  type="text"
                  className="input_field"
                  placeholder="Email id"
                />
                <span className="err_msg hide">Username invalid</span>
              </div>
              <div className="input_container">
                <label className="login_text">Date of Birth</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="input_field"
                  placeholderText="DOB"
                />
                <span className="err_msg hide">Password invalid</span>
              </div>
              <div className="footer_container">
                <div className="btn_container">
                  <button className="login_btn btn">Sin Up</button>
                </div>
                <span className="forgot_password">Back to Login</span>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Register;
