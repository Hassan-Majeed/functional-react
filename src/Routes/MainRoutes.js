import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginScreen from '../Views/Auth/Login';
import ForgotPassword from '../Views/Auth/Forget';
import SetPassword from '../Views/Auth/SetPassword';
import Verification from '../Views/Auth/Verify';
import User from '../Views/User/Index';
import Dashboard from '../Views/Dashboard/Index';
import Notification from '../Views/Notification/Index';
import Layout from '../Layout/Layout';
import ErrorPage from '../Views/ErrorPage/Index';
import MyProfile from '../Views/Profile/MyProfile';
import EditProfile from '../Views/Profile/EditProfile';
import ChangePassword from '../Views/Profile/ChangePassword';
import PaymentLogs from '../Views/PaymentLogs/Index';
const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        <Route exact path="/Verification" element={<Verification />} />
        <Route exact path="/SetPassword" element={<SetPassword />} />
        <Route path="*" element={<ErrorPage />} />
        {/*============================ Dashboard Pages ===============================*/}
        <Route exact path="/dashboard" element={
          <Layout>
            <Dashboard />
          </Layout>}
        />
        <Route exact path="/notification"
          element={
            <Layout>
              <Notification />
            </Layout>
          }
        />
        <Route exact path="/about"
          element={
            <Layout>
              <User />
            </Layout>
          }
        />
        <Route exact path="/paymentLogs"
          element={
            <Layout>
              <PaymentLogs />
            </Layout>
          }
        />
        <Route exact path="/profile"
          element={
            <Layout>
              <MyProfile />
            </Layout>
          }
        />
        <Route exact path="/EditProfile"
          element={
            <Layout>
              <EditProfile />
            </Layout>
          }
        />
        <Route exact path="/changepassword"
          element={
            <Layout>
              <ChangePassword />
            </Layout>
          }
        />
      </Routes>
    </>
  )
}

export default MainRoutes; 