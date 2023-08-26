import React, { Component } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

class RentalHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            totalPages: 3,
            rooms: [], // Mảng lưu trữ danh sách phòng trọ từ API
            sortingOption: "Thời gian: Mới đến cũ",
        };
    }

    // Gọi API để lấy danh sách phòng trọ sau khi component được khởi tạo
    componentDidMount() {
        this.fetchRooms(this.state.currentPage);
    }

    // Hàm gọi API lấy danh sách phòng trọ
    fetchRooms = async (pageNo) => {
        try {
            //console.log(pageNo)
            const response = await axios.get(`http://localhost:8080/room/all?pageNo=${pageNo}&pageSize=10`);
            const data = response.data; // Assuming API returns rooms data

            this.setState({
                rooms: data.content,
                currentPage: pageNo,
                totalPages: data.last ? pageNo : pageNo + 1,
            });
        } catch (error) {
            console.error("Error fetching rooms:", error);
        }
    };

    handlePageChange = (pageNo) => {
        console.log(pageNo)
        this.fetchRooms(pageNo);
        this.setState({ currentPage: pageNo });
    };

    render() {
        const { rooms, currentPage, totalPages } = this.state;

        return (
            <>
                <Header authenticated={this.props.authenticated} currentUser={this.props.currentUser} onLogout={this.props.onLogout} />
                <main id="main">
                    <section className="intro-single">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-lg-8">
                                    <div className="title-single-box">
                                        <h1 className="title-single">PHÒNG TRỌ</h1>
                                        <span className="color-text-a">Cho thuê phòng trọ</span>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4">
                                    <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="/">Trang chủ</a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="property-grid grid">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="grid-option">
                                        <form>
                                            <select className="custom-select">
                                                <option selected>Thời gian: Mới đến cũ</option>
                                                <option value="1">Thời gian: Cũ đến mới</option>
                                                <option value="2">Giá: Thấp đến cao</option>
                                                <option value="3">Giá: Cao đến thấp</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                                {rooms.map(room => (
                                    <div className="col-md-4">
                                        <div className="card-box-a card-shadow">
                                            <div className="img-box-a">
                                                <img src="assets/img/property-1.jpg" alt="" className="img-a img-fluid" />
                                            </div>
                                            <div className="card-overlay">
                                                <div className="card-overlay-a-content">
                                                    <div className="card-header-a">
                                                        <h2 className="card-title-a">
                                                            <Link to={`/rental-home/${room.id}`}>
                                                                {room.title}
                                                                <br /> {room.description}
                                                            </Link>

                                                        </h2>
                                                    </div>
                                                    <div className="card-body-a">
                                                        <div className="price-box d-flex">
                                                            <span className="price-a">
                                                                {room.status === "ROOM_RENT" && `Cho thuê | VNĐ ${room.price}`}
                                                                {room.status === "HIRED" && `Đã thuê | VNĐ ${room.price}`}
                                                                {room.status === "CHECKED_OUT" && `Đã trả phòng | VNĐ ${room.price}`}
                                                            </span>
                                                        </div>
                                                        <Link to={`/rental-home/${room.id}`}>Xem chi tiết
                                                            <span className="bi bi-chevron-right"></span>
                                                        </Link>
                                                    </div>
                                                    <div className="card-footer-a">
                                                        <ul className="card-info d-flex justify-content-around">
                                                            <li>
                                                                <h4 className="card-info-title">Vị trí</h4>
                                                                <span>{room.location.cityName}
                                                                    <sup></sup>
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <h4 className="card-info-title">Loại</h4>
                                                                <span>{room.category.name}</span>
                                                            </li>
                                                            <li>
                                                                <h4 className="card-info-title">Người cho thuê</h4>
                                                                <span>{room.user.name}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className="col-sm-12">
                                <nav className="pagination-a">
                                    <ul className="pagination justify-content-end">
                                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>

                                            <a className="page-link" onClick={() => this.handlePageChange(2 - 1)}>
                                                <span className="bi bi-chevron-left"></span>
                                            </a>
                                        </li>
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                                                <a className="page-link" onClick={() => this.handlePageChange(index + 1)}>
                                                    {index + 1}
                                                </a>
                                            </li>
                                        ))}
                                        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                            <a className="page-link" href="#" onClick={() => this.handlePageChange(currentPage + 1)}>
                                                <span className="bi bi-chevron-right"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </section>

                </main>
                <Footer />
            </>
        )
    }
}

export default RentalHome;