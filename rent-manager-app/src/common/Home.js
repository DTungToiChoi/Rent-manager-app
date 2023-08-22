import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {

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
            const response = await axios.get(`http://localhost:8080/room/all?pageNo=${pageNo}`);
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

    render() {
        const { rooms, currentPage, totalPages } = this.state;

        return (
            <main id="main">
                <section className="section-services section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Dịch vụ của chúng tôi</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-cart"></span>
                                        </div>
                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c">Lifestyle</h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                                            convallis a pellentesque
                                            nec, egestas non nisi.
                                        </p>
                                    </div>
                                    <div className="card-footer-c">
                                        <a href="#" className="link-c link-icon">Read more
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-calendar4-week"></span>
                                        </div>
                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c">Loans</h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Mauris blandit
                                            aliquet elit, eget tincidunt
                                            nibh pulvinar a.
                                        </p>
                                    </div>
                                    <div className="card-footer-c">
                                        <a href="#" className="link-c link-icon">Read more
                                            <span className="bi bi-calendar4-week"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-card-checklist"></span>
                                        </div>
                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c">Sell</h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                                            convallis a pellentesque
                                            nec, egestas non nisi.
                                        </p>
                                    </div>
                                    <div className="card-footer-c">
                                        <a href="#" className="link-c link-icon">Read more
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-property section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Bài đăng mới nhất</h2>
                                    </div>
                                    <div className="title-link">
                                        <a href="/rental-home">Tất cả bài đăng
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="property-grid grid">
                            <div className="d-flex flex-wrap">
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
                        </section>
                    </div>
                </section>
                <section className="section-agents section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Chủ trọ thân thiện</h2>
                                    </div>
                                    <div className="title-link">
                                        <a href="agents-grid.html">Tất cả người cho thuê trọ
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/img/agent-4.jpg" alt="" className="img-d img-fluid" />
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Margaret Sotillo
                                                        <br /> Escala</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +54 356 945234
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> agents@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-d">
                                            <div className="socials-footer d-flex justify-content-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-facebook" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-twitter" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-instagram" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/img/agent-1.jpg" alt="" className="img-d img-fluid" />
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Stiven Spilver
                                                        <br /> Darw</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +54 356 945234
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> agents@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-d">
                                            <div className="socials-footer d-flex justify-content-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-facebook" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-twitter" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-instagram" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/img/agent-5.jpg" alt="" className="img-d img-fluid" />
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Emma Toledo
                                                        <br /> Cascada</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +54 356 945234
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> agents@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-d">
                                            <div className="socials-footer d-flex justify-content-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-facebook" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-twitter" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-instagram" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-testimonials section-t8 nav-arrow-a">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Một vài đánh giá về chúng tôi</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="testimonial-carousel" className="swiper">
                            <div className="swiper-wrapper">

                                <div className="carousel-item-a swiper-slide">
                                    <div className="testimonials-box">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonial-img">
                                                    <img src="assets/img/testimonial-1.jpg" alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonial-ico">
                                                    <i className="bi bi-chat-quote-fill"></i>
                                                </div>
                                                <div className="testimonials-content">
                                                    <p className="testimonial-text">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                                                        debitis hic ber quibusdam
                                                        voluptatibus officia expedita corpori.
                                                    </p>
                                                </div>
                                                <div className="testimonial-author-box">
                                                    <img src="assets/img/mini-testimonial-1.jpg" alt="" className="testimonial-avatar" />
                                                    <h5 className="testimonial-author">Albert & Erika</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item-a swiper-slide">
                                    <div className="testimonials-box">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonial-img">
                                                    <img src="assets/img/testimonial-2.jpg" alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonial-ico">
                                                    <i className="bi bi-chat-quote-fill"></i>
                                                </div>
                                                <div className="testimonials-content">
                                                    <p className="testimonial-text">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                                                        debitis hic ber quibusdam
                                                        voluptatibus officia expedita corpori.
                                                    </p>
                                                </div>
                                                <div className="testimonial-author-box">
                                                    <img src="assets/img/mini-testimonial-2.jpg" alt="" className="testimonial-avatar" />
                                                    <h5 className="testimonial-author">Pablo & Emma</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="testimonial-carousel-pagination carousel-pagination"></div>

                    </div>
                </section>
            </main>
        )
    }
}

export default Home;