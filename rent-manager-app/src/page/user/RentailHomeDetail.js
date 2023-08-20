import React, { Component } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { useParams, withRouter } from 'react-router-dom';
import axios from "axios"; // Import axios for making API requests
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";


class RentailHomeDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: null, // State to store fetched rooms data
        };
    }

    componentDidMount() {
        this.fetchRooms(); // Call the fetchRooms function when component mounts
    }

    fetchRooms = async () => {
        try {
            const id = window.location.pathname.split("/").pop();
            const response = await axios.get(`http://localhost:8080/room/${id}`);
            const data = response.data; // Assuming API returns rooms data

            this.setState({
                rooms: data,
            });
        } catch (error) {
            console.error("Error fetching rooms:", error);
        }
    };

    render() {

        const { rooms } = this.state;

        return (
            <>
                <Header authenticated={this.props.authenticated} currentUser={this.props.currentUser} onLogout={this.props.onLogout} />
                <main id="main">
                    <section class="intro-single">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-lg-8">
                                    <div class="title-single-box">
                                        <h1 class="title-single">{rooms ? rooms.title : ""}</h1>
                                        <span class="color-text-a">Khu vực: {rooms ? rooms.location.cityName : ""}</span>
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-4">
                                    <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item">
                                                <a href="/">Trang chủ</a>
                                            </li>
                                            <li class="breadcrumb-item">
                                                {rooms ? rooms.category.name : ""}
                                            </li>
                                            {/* <li class="breadcrumb-item">
                                                <a href="property-grid.html">Properties</a>
                                            </li> */}
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="property-single nav-arrow-b">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <div id="property-single-carousel" class="swiper">
                                        <div>
                                            <AliceCarousel autoPlay autoPlayInterval="1500">
                                                {rooms && rooms.roomMedia.map((media, index) => (
                                                    <div key={index} style={{ width: "100%", height: "1000px", objectFit: "cover" }}>
                                                        <img className="sliderimg" src={media.files} alt={`Slide ${index}`} />
                                                    </div>
                                                ))}
                                            </AliceCarousel>

                                        </div>

                                    </div>
                                    <div class="property-single-carousel-pagination carousel-pagination"></div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12">

                                    <div class="row justify-content-between">
                                        <div class="col-md-5 col-lg-4">
                                            <div class="property-price d-flex justify-content-center foo">
                                                <div class="card-header-c d-flex">
                                                    <div class="card-box-ico">
                                                        <span class="bi bi-cash"></span>
                                                    </div>
                                                    <div class="card-title-c align-self-center">
                                                        <h5 class="title-c">{rooms ? rooms.price : ""} VNĐ</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="property-summary">
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <div class="title-box-d section-t4">
                                                            <h3 class="title-d">Mô tả nhanh</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="summary-list">
                                                    <ul class="list">
                                                        <li class="d-flex justify-content-between">
                                                            <strong>Mô tả</strong>
                                                            <span>{rooms && rooms.description}</span>
                                                        </li>
                                                        <li class="d-flex justify-content-between">
                                                            <strong>Địa chỉ:</strong>
                                                            <span>{rooms && rooms.address}</span>
                                                        </li>
                                                        <li class="d-flex justify-content-between">
                                                            <strong>Loại phòng</strong>
                                                            <span>{rooms && rooms.category.name}</span>
                                                        </li>
                                                        <li class="d-flex justify-content-between">
                                                            <strong>Trạng thái:</strong>
                                                            <span>{rooms && rooms.status ? (rooms.status == "ROOM_RENT" ? "Cho thuê" : "Bán") : ""}</span>
                                                        </li>
                                                        <li class="d-flex justify-content-between">
                                                            <strong>Khu vực</strong>
                                                            <span>
                                                                {rooms && rooms.location.cityName}
                                                            </span>
                                                        </li>
                                                        {rooms && rooms.assets.map((item) => (
                                                            <li class="d-flex justify-content-between">
                                                                <strong>{item.name}:</strong>
                                                                <span>{item.number}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-7 col-lg-7 section-md-t3">
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <div class="title-box-d">
                                                        <h3 class="title-d">Mô tả chi tiết</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="property-description">
                                                <p class="description color-text-a">
                                                    {rooms ? rooms.description : ""}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-10 offset-md-1">
                                    <ul class="nav nav-pills-a nav-pills mb-3 section-t3" id="pills-tab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="pills-video-tab" data-bs-toggle="pill" href="#pills-video" role="tab" aria-controls="pills-video" aria-selected="true">Video</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-plans-tab" data-bs-toggle="pill" href="#pills-plans" role="tab" aria-controls="pills-plans" aria-selected="false">Floor Plans</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-map-tab" data-bs-toggle="pill" href="#pills-map" role="tab" aria-controls="pills-map" aria-selected="false">Ubication</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
                                            <iframe src="https://player.vimeo.com/video/73221098" width="100%" height="460" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                        </div>
                                        <div class="tab-pane fade" id="pills-plans" role="tabpanel" aria-labelledby="pills-plans-tab">
                                            <img src="../../assets/img/plan2.jpg" alt="" class="img-fluid" />
                                        </div>
                                        <div class="tab-pane fade" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834" width="100%" height="460" frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="row section-t3">
                                        <div class="col-sm-12">
                                            <div class="title-box-d">
                                                <h3 class="title-d">Người cho thuê</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-lg-4">
                                            <img src="../../assets/img/agent-4.jpg" alt="" class="img-fluid" />
                                        </div>
                                        <div class="col-md-6 col-lg-4">
                                            <div class="property-agent">
                                                <h4 class="title-agent">{rooms ? rooms.user.name : ""}</h4>
                                                <p class="color-text-a">


                                                </p>
                                                <ul class="list-unstyled">
                                                    <li class="d-flex justify-content-between">
                                                        <strong>Số điện thoại:</strong>
                                                        <span class="color-text-a">{rooms ? rooms.user.phone : ""}</span>
                                                    </li>
                                                    <li class="d-flex justify-content-between">
                                                        <strong>Địa chỉ:</strong>
                                                        <span class="color-text-a">{rooms ? rooms.user.address : ""}</span>
                                                    </li>
                                                    <li class="d-flex justify-content-between">
                                                        <strong>Email: </strong>
                                                        <span class="color-text-a"> {rooms ? rooms.user.email : ""}</span>
                                                    </li>
                                                </ul>
                                                <div class="socials-a">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <a href="#">
                                                                <i class="bi bi-facebook" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">
                                                                <i class="bi bi-twitter" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">
                                                                <i class="bi bi-instagram" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">
                                                                <i class="bi bi-linkedin" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-lg-4">
                                            <div class="property-contact">
                                                <form class="form-a">
                                                    <div class="row">
                                                        <div class="col-md-12 mb-1">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control form-control-lg form-control-a" id="inputName" placeholder="Tên *" required />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 mb-1">
                                                            <div class="form-group">
                                                                <input type="email" class="form-control form-control-lg form-control-a" id="inputEmail1" placeholder="Email *" required />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 mb-1">
                                                            <div class="form-group">
                                                                <textarea id="textMessage" class="form-control" placeholder="Bình luận *" name="message" cols="45" rows="8" required></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 mt-3">
                                                            <button type="submit" class="btn btn-a">Gửi tin nhắn</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        )
    }
}

export default RentailHomeDetail;