import React from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaBell } from "react-icons/fa";
const NotificationDropdown = (props) => {
  const data = props.notifificationData
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className='customDropDown'>
          <FaBell />
        </Dropdown.Toggle>
        <Dropdown.Menu className='notifBox w_md_100'>
          <div className="notifBox_wrap">
            {
              data.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <Dropdown.Item className='drop_icon'
                      key={item.id}
                      as={Link}
                      to="/notification">
                      <div className="d-flex">
                        <div className="mediaLeft"><FaBell /></div>
                        <div className="mediaRight">
                          <p className="notificationText mb-2"> {item.content}  </p>
                          <div className="d-md-flex align-items-baseline justify-content-between">
                            <p className="primaryColor mb-2"> {item.date} </p>
                            <p className="primaryColor mb-2"> {item.time} </p>
                          </div>
                        </div>
                      </div>
                    </Dropdown.Item>
                  </React.Fragment> 
                )
              })
            }
          </div>
          <Dropdown.Item className='drop_icon drop_bottom'
            as={Link}
            to="/notification"> View All
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </>
  )
}

export default NotificationDropdown;