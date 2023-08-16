import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import Nav from './Nav';
import SidebarNav from './SidebarNav';
import '../../assets/css/app.css';


function Chat(props) {
    console.log("Props:", props)
    const { authenticated, role, currentUser, location, onLogout } = props;

    if (!props.authenticated) {
        return <Navigate
            to={{
                pathname: "/login-rentaler",
                state: { from: location }
            }} />;
    }

    return (
        <div className="wrapper">
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href="index.html">
                        <span className="align-middle">RENTALER PRO</span>
                    </a>
                    <SidebarNav />
                </div>
            </nav>

            <div className="main">
                <Nav onLogout={onLogout} currentUser={currentUser} />

                <main style={{margin : "20px"}}>
                    <div className="container-fluid p-0">

                        <div className="mb-3">
                            <h1 className="h3 d-inline align-middle">Tin nhắn</h1>
                        </div>

                        <div className="card">
                            <div className="row g-0">
                                <div className="col-12 col-lg-5 col-xl-3 border-end list-group">

                                    <div className="px-4 d-none d-md-block">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <input type="text" className="form-control my-3" placeholder="Search..."/>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="#" className="list-group-item list-group-item-action border-0" style={{margin : "10px 10px 10px 15.2px" , paddingLeft: "10px"}}>
                                        <div className="badge bg-success float-end">5</div>
                                        <div className="d-flex align-items-start">
                                            <img src="../../assets/img/author-2.jpg" className="rounded-circle me-1" alt="Vanessa Tucker" width="40" height="40"/>
                                                <div className="flex-grow-1 ms-3">
                                                    Vanessa Tucker
                                                    <div className="small"><span className="fas fa-circle chat-online"></span> Online</div>
                                                </div>
                                        </div>
                                    </a>

                                 
                                </div>
                                <div className="col-12 col-lg-7 col-xl-9">
                                    <div className="py-2 px-4 border-bottom d-none d-lg-block">
                                        <div className="d-flex align-items-center py-1">
                                            <div className="position-relative">
                                                <img src="../../assets/img/author-2.jpg" className="rounded-circle me-1" alt="Sharon Lessman" width="40" height="40"/>
                                            </div>
                                            <div className="flex-grow-1 ps-3">
                                                <strong>Sharon Lessman</strong>
                                                <div className="text-muted small"><em>Typing...</em></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="position-relative">
                                        <div className="chat-messages p-4">

                                            <div className="chat-message-right pb-4">
                                                <div>
                                                    <img src="../../assets/img/author-2.jpg" className="rounded-circle me-1" alt="Chris Wood" width="40" height="40"/>
                                                        <div className="text-muted small text-nowrap mt-2">2:33 am</div>
                                                </div>
                                                <div className="flex-shrink-1 bg-light rounded py-2 px-3 me-3">
                                                    <div className="font-weight-bold mb-1">You</div>
                                                    Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                                </div>
                                            </div>

                                            <div className="pb-4">
                                                <div style={{textAlign: "left", marginLeft: "92%"}}>
                                                    <img src="../../assets/img/author-2.jpg" className="rounded-circle me-1" alt="Sharon Lessman" width="40" height="40"/>
                                                        <div className="text-muted small text-nowrap mt-2">2:34 am</div>
                                                </div>
                                                <div className="flex-shrink-1 bg-light rounded py-2 px-3 ms-3">
                                                    <div className="font-weight-bold mb-1">Sharon Lessman</div>
                                                    Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-grow-0 py-3 px-4 border-top">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Type your message"/>
                                                <button className="btn btn-primary">Send</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Chat;