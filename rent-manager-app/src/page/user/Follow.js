import React, { useEffect, useState } from 'react';
import SidebarNav from './SidebarNav';
import { getAllFollow} from '../../services/fetch/ApiUtils';
import Pagination from './Pagnation';
import { toast } from 'react-toastify';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

function Follow(props) {
    const { authenticated, role, currentUser, location, onLogout } = props;
    const history = useNavigate();

    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [totalItems, setTotalItems] = useState(0);

    // Fetch data from the API
    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = () => {
        getAllFollow(currentPage, itemsPerPage).then(response => {
            setTableData(response.content);
            setTotalItems(response.totalElements);
        }).catch(
            error => {
                toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
            }
        )
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    if (!authenticated) {
        return <Navigate
            to={{
                pathname: "/login",
                state: { from: location }
            }} />;
    }

    return (
        <>
            <Header authenticated={authenticated} currentUser={currentUser} onLogout={onLogout} />
            <div style={{ marginTop: "140px" }}>
            </div>
            <main id="main">
                <div className="wrapper">
                    <nav id="sidebar" className="sidebar js-sidebar">
                        <div className="sidebar-content js-simplebar">
                            <a className="sidebar-brand" href="index.html">
                            </a>
                            <SidebarNav />
                        </div>
                    </nav>

                    <div className="main">
                        <br />
                        <div className="container-fluid p-0"></div>
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Theo dôi người cho thuê</h5>
                                <h6 className="card-subtitle text-muted"> Hiển thị những người đang theo dõi.</h6>
                            </div>
                            <div className="card-body">
                            {tableData.map((item) => (
                                        <div className="col-md-4">
                                            <div className="card-box-d">
                                                <div className="card-img-d">
                                                    {item.rentaler?.imageUrl ?
                                                        <img src={item.rentaler?.imageUrl} alt="" className="img-d img-fluid" style={{ height: "392px" }} />
                                                        :
                                                        <img src="assets/img/agent-4.jpg" alt="" className="img-d img-fluid" />
                                                    }

                                                </div>
                                                <div className="card-overlay card-overlay-hover">
                                                    <div className="card-header-d">
                                                        <div className="card-title-d align-self-center">
                                                            <h3 className="title-d">
                                                                <Link to={`/angent-single/`+item.rentaler.id} className="link-two">{item.rentaler.name}</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="card-body-d">
                                                        <p className="content-d color-text-a" style={{color : "white"}}>
                                                            {item.rentaler.address}
                                                        </p>
                                                        <div className="info-agents color-a">
                                                            <p style={{color : "white"}}>
                                                                <strong>Phone: </strong> {item.rentaler.phone}
                                                            </p>
                                                            <p style={{color : "white"}}>
                                                                <strong>Email: </strong> {item.rentaler.email}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer-d">
                                                        <div className="socials-footer d-flex justify-content-center">
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item">
                                                                    <a href={item.rentaler?.facebookUrl} className="link-one" target="_blank">
                                                                        <i className="bi bi-facebook" aria-hidden="true"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href={item.rentaler?.zaloUrl} className="link-one" target="_blank">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="50" viewBox="0 0 50 50">
                                                                            <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 15.576172 6 C 12.118043 9.5981082 10 14.323627 10 19.5 C 10 24.861353 12.268148 29.748596 15.949219 33.388672 C 15.815412 33.261195 15.988635 33.48288 16.005859 33.875 C 16.023639 34.279773 15.962689 34.835916 15.798828 35.386719 C 15.471108 36.488324 14.785653 37.503741 13.683594 37.871094 A 1.0001 1.0001 0 0 0 13.804688 39.800781 C 16.564391 40.352722 18.51646 39.521812 19.955078 38.861328 C 21.393696 38.200845 22.171033 37.756375 23.625 38.34375 A 1.0001 1.0001 0 0 0 23.636719 38.347656 C 26.359037 39.41176 29.356235 40 32.5 40 C 36.69732 40 40.631169 38.95117 44 37.123047 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 18.496094 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 34.804688 C 40.72689 36.812719 36.774644 38 32.5 38 C 29.610147 38 26.863646 37.459407 24.375 36.488281 C 22.261967 35.634656 20.540725 36.391201 19.121094 37.042969 C 18.352251 37.395952 17.593707 37.689389 16.736328 37.851562 C 17.160501 37.246758 17.523335 36.600775 17.714844 35.957031 C 17.941109 35.196459 18.033096 34.45168 18.003906 33.787109 C 17.974816 33.12484 17.916946 32.518297 17.357422 31.96875 L 17.355469 31.966797 C 14.016928 28.665356 12 24.298743 12 19.5 C 12 14.177406 14.48618 9.3876296 18.496094 6 z M 32.984375 14.986328 A 1.0001 1.0001 0 0 0 32 16 L 32 25 A 1.0001 1.0001 0 1 0 34 25 L 34 16 A 1.0001 1.0001 0 0 0 32.984375 14.986328 z M 18 16 A 1.0001 1.0001 0 1 0 18 18 L 21.197266 18 L 17.152344 24.470703 A 1.0001 1.0001 0 0 0 18 26 L 23 26 A 1.0001 1.0001 0 1 0 23 24 L 19.802734 24 L 23.847656 17.529297 A 1.0001 1.0001 0 0 0 23 16 L 18 16 z M 29.984375 18.986328 A 1.0001 1.0001 0 0 0 29.162109 19.443359 C 28.664523 19.170123 28.103459 19 27.5 19 C 25.578848 19 24 20.578848 24 22.5 C 24 24.421152 25.578848 26 27.5 26 C 28.10285 26 28.662926 25.829365 29.160156 25.556641 A 1.0001 1.0001 0 0 0 31 25 L 31 22.5 L 31 20 A 1.0001 1.0001 0 0 0 29.984375 18.986328 z M 38.5 19 C 36.578848 19 35 20.578848 35 22.5 C 35 24.421152 36.578848 26 38.5 26 C 40.421152 26 42 24.421152 42 22.5 C 42 20.578848 40.421152 19 38.5 19 z M 27.5 21 C 28.340272 21 29 21.659728 29 22.5 C 29 23.340272 28.340272 24 27.5 24 C 26.659728 24 26 23.340272 26 22.5 C 26 21.659728 26.659728 21 27.5 21 z M 38.5 21 C 39.340272 21 40 21.659728 40 22.5 C 40 23.340272 39.340272 24 38.5 24 C 37.659728 24 37 23.340272 37 22.5 C 37 21.659728 37.659728 21 38.5 21 z"></path>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            
                            ))}
                            </div>
                            <Pagination
                                        itemsPerPage={itemsPerPage}
                                        totalItems={totalItems}
                                        currentPage={currentPage}
                                        paginate={paginate}
                                    />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Follow;