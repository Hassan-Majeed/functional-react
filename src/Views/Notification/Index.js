import React from "react";
import { FaBell } from "react-icons/fa";
import Title from '../../hook/Title';
import GoBack from "../../Components/GoBack";
const notificationData = [
  {
    id: 1,
    content: "  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    date: "03/02/2020",
    time: "14:18:23",
  },
  {
    id: 2,
    content: "  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    date: "03/02/2020",
    time: "14:18:23",
  },
  {
    id: 3,
    content: "  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    date: "03/02/2020",
    time: "14:18:23",
  },
  {
    id: 4,
    content: "  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    date: "03/02/2020",
    time: "14:18:23",
  },
  {
    id: 5,
    content: "  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    date: "03/02/2020",
    time: "14:18:23",
  },
];
const Notification = () => {
  Title('Notification')
  return (
    <>
      <div className="d-md-flex align-items-center justify-content-between mt-5">
        <div className="d-flex align-items-center mb-5">
          <GoBack />
          <h4 className="section-heading mb-0">Notification</h4>
        </div>
        <div>
          <label htmlFor="Showing" className="me-2">Showing:</label>
          <select id="Showing" className="dashboard-inputs mb-2 " >
            <option >Monthly</option>
            <option >2020</option>
            <option >2021</option>
            <option >2022</option>
          </select>
        </div>
      </div>
      {
        notificationData.map((item, index) => {
          return (
            <div key={item.id} className="d-md-flex  align-items-center mb-4">
              <span className="notification-bell d-flex justify-content-center align-items-center me-3">
                <FaBell className="rotate" />
              </span>
              <div className="notification-text">
                <p>
                  {item.content}
                </p>
                <div className="text-right">
                  <time className="date">{item.date}</time>|<time className="date">{item.time}</time>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  );
}
export default Notification;