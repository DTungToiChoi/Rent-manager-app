import React, { Component } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

class About extends Component {
    render() {
        return (
            <>
                <Header authenticated={this.props.authenticated} currentUser={this.props.currentUser} onLogout={this.props.onLogout} />
                <main id="main">

               
                    <section class="intro-single">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-lg-8">
                                    <div class="title-single-box">
                                        <h1 class="title-single">Chúng tôi mang đến những căn trọ chất lượng nhất</h1>
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-4">
                                    <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item">
                                                <a href="/">Trang chủ</a>
                                            </li>
                                            <li class="breadcrumb-item active" aria-current="page">
                                                About
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="section-about">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 position-relative">
                                    <div class="about-img-box">
                                        <img src="assets/img/slide-about-1.jpg" alt="" class="img-fluid"/>
                                    </div>
                                    <div class="sinse-box">
                                        <h3 class="sinse-title">PhongTroSinhVien
                                            <span></span>
                                            <br/> Giá rẻ bất ngờ
                                        </h3>
                                        <p>Ưu đãi hấp dẫn</p>
                                    </div>
                                </div>
                                <div class="col-md-12 section-t8 position-relative">
                                    <div class="row">
                                        <div class="col-md-6 col-lg-5">
                                            <img src="assets/img/about-2.jpg" alt="" class="img-fluid"/>
                                        </div>
                                        <div class="col-lg-2  d-none d-lg-block position-relative">
                                            <div class="title-vertical d-flex justify-content-start">
                                                <span>Phòng trọ sinh viên</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-5 section-md-t3">
                                            <div class="title-box-d">
                                                <h3 class="title-d">Chất lượng đi đầu
                                                    <span class="color-d">Uy tín số một</span>
                                                    <br/>
                                                </h3>
                                            </div>
                                            <p class="color-text-a">
                                                Chúng tôi luôn luôn đem đến những căn trọ có giá thành tốt, chất lượng cao 
                                            </p>
                                            <p class="color-text-a">
                                                
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

               
                    <section class="section-agents section-t8">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="title-wrap d-flex justify-content-between">
                                        <div class="title-box">
                                            <h2 class="title-a">Về chúng tôi</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card-box-d">
                                        <div class="card-img-d">
                                            <img src="assets/img/agent-7.jpg" alt="" class="img-d img-fluid"/>
                                        </div>
                                        <div class="card-overlay card-overlay-hover">
                                            <div class="card-header-d">
                                                <div class="card-title-d align-self-center">
                                                    <h3 class="title-d">
                                                        <a href="agent-single.html" class="link-two">Nguyễn Văn A
                                                            <br/> Admin</a>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div class="card-body-d">
                                                <p class="content-d color-text-a">
                                                    Nhiệt tình, năng nổ, thân thiện với mọi người
                                                </p>
                                                <div class="info-agents color-a">
                                                    <p>
                                                        <strong>Số điện thoại: </strong> +54 356 945234
                                                    </p>
                                                    <p>
                                                        <strong>Email: </strong> agents@example.com
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="card-footer-d">
                                                <div class="socials-footer d-flex justify-content-center">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <a href="#" class="link-one">
                                                                <i class="bi bi-facebook" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#" class="link-one">
                                                                <i class="bi bi-twitter" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#" class="link-one">
                                                                <i class="bi bi-instagram" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#" class="link-one">
                                                                <i class="bi bi-linkedin" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card-box-d">
                                        <div class="card-img-d">
                                            <img src="assets/img/agent-6.jpg" alt="" class="img-d img-fluid"/>
                                        </div>
                                        <div class="card-overlay card-overlay-hover">
                                            <div class="card-header-d">
                                                <div class="card-title-d align-self-center">
                                                    <h3 class="title-d">
                                                        <a href="agent-single.html" class="link-two">Nguyễn Văn A
                                                            <br/> Quản lý phòng trọ</a>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div class="card-body-d">
                                                <p class="content-d color-text-a">
                                                    Nhiệt tình, năng nổ, thân thiện với mọi người.
                                                </p>
                                                <div class="info-agents color-a">
                                                    <p>
                                                        <strong>Số điện thoại: </strong> +54 356 945234
                                                    </p>
                                                    <p>
                                                        <strong>Email: </strong> agents@example.com
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="card-footer-d">
                                                <div class="socials-footer d-flex justify-content-center">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <a href="#" class="link-one">
                                                                <i class="bi bi-facebook" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#" class="link-one">
                                                                <i class="bi bi-twitter" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#" class="link-one">
                                                                <i class="bi bi-instagram" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#" class="link-one">
                                                                <i class="bi bi-linkedin" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#" class="link-one">
                                                                <i class="bi bi-dribbble" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card-box-d">
                                        <div class="card-img-d">
                                            <img src="assets/img/agent-5.jpg" alt="" class="img-d img-fluid"/>
                                        </div>
                                        <div class="card-overlay card-overlay-hover">
                                            <div class="card-header-d">
                                                <div class="card-title-d align-self-center">
                                                    <h3 class="title-d">
                                                        <a href="agent-single.html" class="link-two">Nguyễn Văn A
                                                            <br/> Phát triển trang web</a>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div class="card-body-d">
                                                <p class="content-d color-text-a">
                                                    Nhiệt tình, năng nổ, thân thiện với mọi người.
                                                </p>
                                                <div class="info-agents color-a">
                                                    <p>
                                                        <strong>Số điện thoại: </strong> +54 356 945234
                                                    </p>
                                                    <p>
                                                        <strong>Email: </strong> agents@example.com
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="card-footer-d">
                                                <div class="socials-footer d-flex justify-content-center">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <a href="#" class="link-one">
                                                                <i class="bi bi-facebook" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#" class="link-one">
                                                                <i class="bi bi-twitter" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#" class="link-one">
                                                                <i class="bi bi-instagram" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#" class="link-one">
                                                                <i class="bi bi-linkedin" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#" class="link-one">
                                                                <i class="bi bi-dribbble" aria-hidden="true"></i>
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

                </main>
                <Footer />
            </>
        )
    }
}

export default About;