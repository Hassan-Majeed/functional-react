import React from "react";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import logo from '../../assets/images/logo.png';
import Input from "../../Components/Input";
const SetPassword = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(0);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePassword2 = () => {
    setPasswordShown2(!passwordShown2);
  };
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <>
      <section className="authentication-wrapper">
        <Row>
          <Col lg={6}>
            <div className="left-side">
              <div className="logo-wrapper">
                <img src={logo} alt="logo" className="img-fluid" />
              </div>
              <h2 className="primary-heading">FORGET PASSWORD</h2>
              <h3 className="secondary-heading"> Type in your new Password</h3>
              <form action="" className=" mt-5">
                <div className="registration-inp-box mb-2">
                  <label className="d-block" htmlFor="password">PASSWORD</label>
                  <div className="position-relative">
                    <Input
                      id='password'
                      inputCss="primary-inputs"
                      inputType={passwordShown ? 'text' : 'password'}
                      inputPlaceholder=" ******** "
                    />
                    <button className="position-absolute show-password" type="button" onClick={togglePassword}>
                      {passwordShown ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>
                <div className="registration-inp-box mb-2">
                  <label className="d-block" htmlFor="cpassword">CONFIRM PASSWORD<span className="text-danger">*</span> </label>
                  <div className="position-relative">
                    <Input
                      id='cpassword'
                      inputCss="primary-inputs"
                      inputType={passwordShown2 ? 'text' : 'password'}
                      inputPlaceholder=" ******** "
                    />
                    <button className="position-absolute show-password" type="button" onClick={togglePassword2}>
                      {passwordShown2 ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button className="main-btn" onClick={handleClick} >CONTINUE</button>
                </div>
                <div className="text-left mt-4">
                  <a className="primiry-link" href="/"><u>BACK TO LOGIN</u></a>
                </div>
              </form>
            </div>
          </Col>
          <Col className="d-lg-block d-none" lg={6}>
            <div className="right-side"></div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SetPassword;
