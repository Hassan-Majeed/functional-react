import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import logo from "../../assets/images/logo.png"
const Verify = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/SetPassword");
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
              <h2 className="primary-heading"> VERIFICATION CODE</h2>
              <h3 className="secondary-heading">An email has been sent to you with a verification code.</h3>
              <h3 className="secondary-heading"> Please enter it here.</h3>
              <form action="" className=" mt-5">
                <div className="registration-inp-box mt-5 mb-2">
                  <label className="d-block" htmlFor="code">VERIFICATION CODE <span className="text-danger">*</span> </label>
                  <div className="d-flex">
                    <input type="number" placeholder="0" className="input-type-code" />
                    <input type="number" placeholder="0" className="input-type-code" />
                    <input type="number" placeholder="0" className="input-type-code" />
                    <input type="number" placeholder="0" className="input-type-code" />
                  </div>
                  <div className="text-right mt-4">
                    <a className="primiry-link" href="/"><u>Resend Code</u></a>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button className="main-btn" onClick={handleClick}>CONTINUE</button>
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

export default Verify;
