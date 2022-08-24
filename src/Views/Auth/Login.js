import { React, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Components/Input";
import InputContext from "../../Components/Input";
import { Row, Col } from "react-bootstrap";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import axios from 'axios';

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  // Functions to Get input values
  const handleEmailValue = (value) => {
    console.log("handleEmailValue value", value)
  };
  const handlePassValue = (value) => {
    console.log("handlePassValue value", value)
  };
  // Functions to navigate to dashboard after form submition 
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard");
  }

  return (
    <>
      <section className="authWrapper">
        <Row>
          <Col lg={6}>
            <div className="left-side">
              <div className="logo-wrapper">
                <img src={logo} alt="logo" className="img-fluid" />
              </div>
              <h2 className="primary-heading"> ADMIN LOGIN</h2>
              <h3 className="secondary-heading">Login your cadential to continue</h3>
              <form action="" >
                <div className="registration-inp-box mt-5 mb-2">
                  <label className="d-block" htmlFor="userName">USERNAME</label>
                  <Input
                    id='userName'
                    inputCss="primary-inputs"
                    inputType="text"
                    inputPlaceholder="Admin"
                    onChangeValue={handleEmailValue}
                  />
                </div>
                <div className="registration-inp-box mb-2">
                  <label className="d-block" htmlFor="password">PASSWORD</label>
                  <div className="position-relative">
                    <Input
                      id='password'
                      inputCss="primary-inputs"
                      inputType={passwordShown ? 'text' : 'password'}
                      inputPlaceholder=" ******** "
                      onChangeValue={handlePassValue}
                    />
                    <button className="position-absolute show-password" type="button" onClick={togglePassword}>
                      {passwordShown ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <Link className="primiry-link" to="/ForgotPassword"><u>FORGET PASSWORD?</u></Link>
                </div>
                <div className="text-center mt-3">
                  <button className="main-btn" onClick={handleClick} >LOGIN</button>
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

export default Login;
