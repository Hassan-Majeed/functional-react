import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import NotificationDropdown from '../Components/NotificationDropdown';
import CustomModal from '../Components/CustomModal';
import { FaBars, FaEllipsisV, FaTimes } from "react-icons/fa";
import Logo from '../assets/images/logo.png';

const Header = (props) => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false)
  const [finalShow, setfinalShow] = useState(false)
  const [bottomMenu, setBottomMenu] = useState(false)
  const finalShowModal = () => {
    setModalShow(false);
    setfinalShow(true);
  }
  function toggleBottom() {
    setBottomMenu(!bottomMenu)
  }
  const notifificationData = [
    {
      id: '01',
      content: 'New user has been registered on the platform ',
      date: 'Dec 19, 2020',
      time: '10:30 AM ',
    },
    {
      id: '02',
      content: 'New user has been registered on the platform ',
      date: 'Dec 19, 2020',
      time: '10:30 AM ',
    },
    {
      id: '03',
      content: 'New user has been registered on the platform ',
      date: 'Dec 19, 2020',
      time: '10:30 AM ',
    },
    {
      id: '04',
      content: 'New user has been registered on the platform ',
      date: 'Dec 19, 2020',
      time: '10:30 AM ',
    },
  ];
  return (
    <>
      <div className='d-none smBlock'>
        <FaEllipsisV className='hamburger' onClick={toggleBottom} />
      </div>
      <div className='LogoWrapper'>
        <Link to='/dashboard' >
          <img src={Logo} alt='Logo' className='headerLogo' />
        </Link>
      </div>
      <div>
        <ul className='sideMenu'>
          <li className='md_none'>
            <NotificationDropdown notifificationData={notifificationData} />
          </li>
          <li className='md_none'>
            <Dropdown>
              <Dropdown.Toggle className='customDropDown'>
                <span> <img src={require('../assets/images/avatar.png')} alt='avatar' className='avatar' /> My Name </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className='drop_icon'
                  as={Link}
                  to="/profile"> Profile  </Dropdown.Item>
                <Dropdown.Item className='drop_icon'
                  onClick={() => setModalShow(true)}
                > Logout  </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <FaBars className='hamburger' onClick={props.toggleSideNav} />
          </li>
        </ul>
      </div>
      {/* for mobile size screen show user icon and notification */}
      <ul className={`mobileMenu ${bottomMenu ? 'd-flex' : 'd-none'}`}>
        <li>
          <NotificationDropdown notifificationData={notifificationData} />
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle className='customDropDown'>
              <span> <img src={require('../assets/images/avatar.png')} alt='avatar' className='avatar' /> My Name </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className='drop_icon'
                as={Link}
                to="/profile"> Profile  </Dropdown.Item>
              <Dropdown.Item className='drop_icon'
                onClick={() => setModalShow(true)}
              > Logout  </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
      {/* modal */}
      <CustomModal
        show={modalShow}
        onHide={() => setModalShow(false)}>
        <button
          onClick={() => setModalShow(false)}
          className="modal-cancel">
          <FaTimes />
        </button>
        <div className="modalContent">
          <img src={require('../assets/images/sure.png')} alt="modal image" />
          {/* modal text */}
          <h3 className="modalPrimHeading my-4">Are You Sure You Want <br />
            to Logout?</h3>
          {/* modal buttons */}
          <button
            className="main-btn m-2"
            type="button"
            onClick={() => { finalShowModal() }}
          > Yes </button>
          <button
            className="main-btn m-2"
            type="button"
            onClick={() => setModalShow(false)}
          > No </button>
        </div>
      </CustomModal>
      {/* Logout Modal confirmed */}
      <CustomModal
        show={finalShow}
        onHide={() => setfinalShow(false)}>
        <button
          onClick={() => setfinalShow(false)}
          className="modal-cancel">
          <FaTimes />
        </button>
        <div className="modalContent">
          <img src={require('../assets/images/true.png')} alt="modal image" />
          {/* modal text */}
          <h3 className="modalPrimHeading my-4">Logout Successfully</h3>
          {/* modal buttons */}
          <button
            className="main-btn mx-2"
            type="button"
            onClick={() => {
              navigate("/");
            }}
          > OK </button>
        </div>
      </CustomModal>
    </>
  )
}

export default Header;
