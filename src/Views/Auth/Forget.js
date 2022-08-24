import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png"
const Forget = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Verification");
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
              <h2 className="primary-heading"> FORGET PASSWORD </h2>
              <h3 className="secondary-heading">Enter your email address to receive a verification code</h3>
              <form action="">
                <div className="registration-inp-box mt-5 mb-2">
                  <label className="d-block" htmlFor="email">EMAIL ADDRESS <span className="text-danger">*</span> </label>
                  <input id="email" className="primary-inputs w-100" type="email" placeholder="admin@gmail.com" />
                </div>
                <div className="text-center mt-4">
                  <button className="main-btn" onClick={handleClick} >CONTINUE</button>
                </div>
                <div className="text-left mt-4">
                  <Link className="primiry-link" to="/"><u>BACK TO LOGIN</u></Link>
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

export default Forget;
