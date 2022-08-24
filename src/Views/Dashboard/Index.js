import React from 'react'
import { FaUserFriends, FaShopify, FaDollarSign, FaShoppingBag } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import chart from "../../assets/images/chart.png";
import chart2 from "../../assets/images/chart2.png";
import Title from '../../hook/Title'
import GoBack from '../../Components/GoBack';
import SideNav from '../../Layout/SideNav';
const analytics = [
  {
    id: '1',
    title: "USER",
    Icon: <FaUserFriends className="icons" />,
    detail: "22",
  },
  {
    id: '2',
    title: "ORDERS",
    Icon: <FaShopify className="icons" />,
    detail: "313",
  },
  {
    id: '3',
    title: "EARNINGS",
    Icon: <FaDollarSign className="icons" />,
    detail: "$6040",
  },
  {
    id: '4',
    title: "PRODUCTS",
    Icon: <FaShoppingBag className="icons" />,
    detail: "500",
  },
];
const Index = () => {
  Title('Dashboard')
  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <GoBack />
        <h4 className="section-heading mb-0">Dashboard</h4>
      </div>
      <Row>
        {
          analytics.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <Col xl={3} lg={6} md={6} className="mb-2">
                  <div className="dashboard-anatlytics d-flex align-items-center justify-content-between flex-wrap">
                    <h3>{item.title}</h3>
                    <div>
                      <span>
                        {item.Icon}
                      </span>
                      <h4>{item.detail}</h4>
                    </div>
                  </div>
                </Col>
              </React.Fragment> 
            )
          })
        }
      </Row>
      <div className="d-md-flex align-items-center justify-content-between mt-5">
        <h4 className="section-heading mb-2">Earnings</h4>
        <select className="dashboard-inputs mb-2 primSelect">
          <option>Monthly</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
      <div className="charts-wrap mt-5">
        <img src={chart} alt="chart" className="img-fluid" />
      </div>
      <div className="d-md-flex align-items-center justify-content-between mt-5">
        <h4 className="section-heading mb-2">ORDERS</h4>
        <select className=" dashboard-inputs mb-2">
          <option>Monthly</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
      <div className="charts-wrap mt-5">
        <img src={chart2} alt="chart" className="img-fluid" />
      </div>
      <div className="d-md-flex align-items-center justify-content-between mt-5">
        <h4 className="section-heading mb-2">EARNINGS</h4>
        <select className="dashboard-inputs mb-2 primSelect">
          <option>Monthly</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
      <div className="charts-wrap mt-5">
        <img src={chart2} alt="chart" className="img-fluid" />
      </div>
    </>
  )
}

export default Index