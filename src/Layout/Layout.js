import React from 'react';
import SideNav from './SideNav';
import Header from './Header'; 
import { Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
const Layout = ({ children }) => {
  const [myClass, setMyClass] = useState(true);
  function toggleSideNav() {
    setMyClass(!myClass);
  }
  return (
    <>
      <div className={`siteWrapper ${myClass ? '' : 'removeSideBar'}`}>
        <Container fluid className='g-0'>
          <Row>
            <Col>
              <div className='topBar'>
                <Header toggleSideNav={toggleSideNav} /> 
              </div>
            </Col>
          </Row>
          <div className='d-flex mainContent'>
            <div className='sideNav'>
              <SideNav />
            </div>
            <div className='configuration'>
              <div className='box'>
                <Container fluid>
                  {children}
                </Container>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Layout;
