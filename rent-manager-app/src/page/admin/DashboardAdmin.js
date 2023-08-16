import React from 'react';
import { Link, Navigate } from 'react-router-dom'
import Nav from './Nav';
import SidebarNav from './SidebarNav';
import '../../assets/css/app.css';

const DashboardAdmin = (props) => {
  const { authenticated, roleName, location, currentUser, onLogout } = props;

  if (!authenticated) {
    return <Navigate
      to={{
        pathname: "/login-admin",
        state: { from: location }
      }} />;
  }

  return (
    <div className="wrapper">
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <a className="sidebar-brand" href="index.html">
            <span className="align-middle">ADMIN PRO</span>
          </a>
          <SidebarNav />
        </div>
      </nav>

      <div className="main">
        <Nav onLogout={onLogout} currentUser={currentUser}/>

        <main className="content">
          <div className="container-fluid p-0">
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardAdmin;