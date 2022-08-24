import React from "react";
import { FaSearch } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import TableCom from "../../Components/TableCom";
import Title from '../../hook/Title';
import GoBack from "../../Components/GoBack";
const tableHead = ['SNo', 'Customer Name', 'Plan Title', 'Date', 'Cost', 'Plan Type']
const tableBody = [
  {
    id: '01',
    name: 'John',
    planTitle: 'Plan 1',
    date: 'Mm/dd/yyyy',
    Cost: '$20	',
    PlanType: 'Normal	',
  },
  {
    id: '02',
    name: 'John',
    planTitle: 'Plan 1',
    date: 'Mm/dd/yyyy',
    Cost: '$20	',
    PlanType: 'Normal	',
  },
  {
    id: '03',
    name: 'John',
    planTitle: 'Plan 1',
    date: 'Mm/dd/yyyy',
    Cost: '$20	',
    PlanType: 'Normal	',
  },
  {
    id: '04 ',
    name: 'John',
    planTitle: 'Plan 1',
    date: 'Mm/dd/yyyy',
    Cost: '$20	',
    PlanType: 'Normal',
  },
];
const Index = () => {
  Title('Payment Log')
  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <GoBack />
        <h4 className="section-heading mb-0">Payment Logs</h4>
      </div>
      <Row>
        <Col className="mb-5">
          <div className="d-md-flex align-items-center">
            <label className="me-3 mt-4">Sort By</label>
            <div className="me-2">
              <label className="d-block me-2">From</label>
              <input type="date" className="dashboard-inputs mr-md-3" />
            </div>
            <div>
              <label className="d-block">To</label>
              <input type="date" className="dashboard-inputs" />
            </div>
          </div>
        </Col>
      </Row>
      <div className="d-md-flex justify-content-between align-items-center">
        <div>
          <label className="me-3">Show Enteries</label>
          <select className="primSelect dashboard-inputs mb-4">
            <option>Default select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
          </select>
        </div>
        <div className="dashboard-input-box position-relative mb-4">
          <input
            type="search"
            placeholder="Search...."
            className="dashboard-inputs w-100"
          />
          <FaSearch className="primary-input-icon position-absolute" />
        </div>
      </div>
      {/* Table start*/}
      <TableCom thead={tableHead} tableBody={tableBody} />
    </>
  );
}
export default Index;