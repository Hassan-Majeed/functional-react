import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Input from '../../Components/Input';
import Title from '../../hook/Title';
import { FaEdit } from "react-icons/fa";
const MyProfile = () => {
  Title('My Profile');
  return (
    <>
      <div className='d-flex align-items-center justify-content-between flex-wrap'>
        <h4 className="section-heading mb-4">Profile</h4>
        <Link to='/ChangePassword' className='text-danger mb-4'> <FaEdit /> Change Password</Link>
      </div>
      <Row>
        <Col xl={8} lg={10}>
          <div className="avatarWrap">
            <img src={require('../../assets/images/avatar.png')} alt="avatar" className="profileAvatar img-fluid" />
          </div>
          <Row className='mt-5'>
            <Col md={6}>
              <div className="label-wrap mb-4">
                <label htmlFor='firstName' className="d-block">First Name</label>
                <Input
                  id='firstName'
                  inputCss="primary-inputs disableInputs"
                  inputType="text"
                  inputPlaceholder="First Name"
                  value='Andrew'
                  disable={true} 
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="label-wrap mb-4">
                <label htmlFor='lastName' className="d-block">Last Name</label>
                <Input
                  id='lastName'
                  inputCss="primary-inputs disableInputs"
                  inputType="text"
                  inputPlaceholder="Last Name"
                  value='Simmons'
                  disable={true}
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="label-wrap mb-4">
                <label htmlFor='emailAddress' className="d-block">Email Address</label>
                <Input
                  id='emailAddress'
                  inputCss="primary-inputs disableInputs"
                  inputType="text"
                  inputPlaceholder="Email Address"
                  value='testing@test.com'
                  disable={true}
                />
              </div>
            </Col>
          </Row>
          <Link to='/EditProfile' className='main-btn'>Edit</Link>
        </Col>
      </Row>
    </>
  )
}
export default MyProfile;