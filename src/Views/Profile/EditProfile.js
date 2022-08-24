import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { FaTimes } from "react-icons/fa";
import Input from '../../Components/Input';
import GoBack from '../../Components/GoBack';
import CustomModal from '../../Components/CustomModal';
import Title from '../../hook/Title';
const MyProfile = () => {
  Title('Edit Profile')
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <>
      <div className="d-flex align-items-center my-3 mb-5">
        <GoBack />
        <h4 className="section-heading mb-0">Edit Profile</h4>
      </div>
      <form action='#'>
        <Row>
          <Col xl={8} lg={10}>
            <div className="avatarWrap">
              <img src={require('../../assets/images/avatar.png')} alt="avatar" className="profileAvatar img-fluid" />
            </div>
            <Row className='my-4'>
              <Col md={6}>
                <div className="label-wrap mb-4">
                  <label htmlFor='firstName' className="d-block">First Name</label>
                  <Input
                    id='firstName'
                    inputCss="primary-inputs"
                    inputType="text"
                    inputPlaceholder="First Name"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="label-wrap mb-4">
                  <label htmlFor='lastName' className="d-block">Last Name</label>
                  <Input
                    id='lastName'
                    inputCss="primary-inputs"
                    inputType="text"
                    inputPlaceholder="Last Name"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="label-wrap mb-4">
                  <label htmlFor='emailAddress' className="d-block">Email Address</label>
                  <Input
                    id='emailAddress'
                    inputCss="primary-inputs"
                    inputType="text"
                    inputPlaceholder="Email Address"
                  />
                </div>
              </Col>
            </Row>
            <button type="button" onClick={() => setModalShow(true)} className='main-btn'>Update</button>
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
                <h3 className="modalPrimHeading my-4">Profile Updated Successfully!</h3>
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

export default MyProfile;