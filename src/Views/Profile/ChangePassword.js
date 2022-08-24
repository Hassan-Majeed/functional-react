import { React, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { FaTimes } from "react-icons/fa";
import Input from '../../Components/Input';
import GoBack from '../../Components/GoBack';
import CustomModal from '../../Components/CustomModal';
import Title from '../../hook/Title';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
  Title('Change Password')
  const [modalShow, setModalShow] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [newpasswordShown, setNewPassword] = useState(false);
  const [confpasswordShown, setConfPassword] = useState(false);

  const togglePassword1 = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePassword2 = () => {
    setNewPassword(!newpasswordShown);
  };
  const togglePassword3 = () => {
    setConfPassword(!confpasswordShown);
  };

  return (
    <>
      <div className="d-flex align-items-center my-3 mb-5">
        <GoBack />
        <h4 className="section-heading mb-0">Change Password</h4>
      </div>
      <form action='#'>
        <Row>
          <Col xl={8} lg={10}>
            <Row>
              <Col md={7}>
                <div className="registration-inp-box mb-4">
                  <label className="d-block mb-2" htmlFor="cPassword">Current Password <span className='text-danger'>*</span> </label>
                  <div className="position-relative">
                    <Input
                      id='cPassword'
                      inputCss="primary-inputs"
                      inputType={passwordShown ? 'text' : 'password'}
                      inputPlaceholder="Enter Current Password"
                    />
                    <button className="position-absolute show-password" type="button" onClick={togglePassword1}>
                      {passwordShown ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>
              </Col>
              <Col md={7}>
                <div className="registration-inp-box mb-4">
                  <label className="d-block mb-2" htmlFor="nPassword">New Password <span className='text-danger'>*</span> </label>
                  <div className="position-relative">
                    <Input
                      id='nPassword'
                      inputCss="primary-inputs"
                      inputType={newpasswordShown ? 'text' : 'password'}
                      inputPlaceholder="Enter New Password"
                    />
                    <button className="position-absolute show-password" type="button" onClick={togglePassword2}>
                      {newpasswordShown ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>
              </Col>
              <Col md={7}>
                <div className="registration-inp-box mb-4">
                  <label className="d-block mb-2" htmlFor="cnPassword">New Password <span className='text-danger'>*</span> </label>
                  <div className="position-relative">
                    <Input
                      id='cnPassword'
                      inputCss="primary-inputs"
                      inputType={confpasswordShown ? 'text' : 'password'}
                      inputPlaceholder="Re-enter Password"
                    />
                    <button className="position-absolute show-password" type="button" onClick={togglePassword3}>
                      {confpasswordShown ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>
              </Col>
              <Col md={7} className='text-center'>
                <button type="button" onClick={() => setModalShow(true)} className='main-btn'>Update</button>
              </Col>
            </Row>
            {/*================================== Modal Start =============================== */}
            <CustomModal
              show={modalShow}
              onHide={() => setModalShow(false)}>
              <button
                onClick={() => setModalShow(false)}
                className="modal-cancel">
                <FaTimes />
              </button>
              <div className="modalContent">
                <img src={require('../../assets/images/true.png')} alt="modal image" />
                {/* modal text */}
                <h3 className="modalPrimHeading my-4">Password Updated Successfully!</h3>
                {/* modal buttons */}
                <button
                  className="main-btn mx-2"
                  type="button"
                  onClick={() => setModalShow(false)}> OK </button>
              </div>
            </CustomModal>
          </Col>
        </Row>
      </form>
    </>
  )
}

export default ChangePassword;