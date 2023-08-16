import React, { Component } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

class Contact extends Component {
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
                                        <h1 class="title-single">Liên hệ với chúng tôi</h1>
                                        <span class="color-text-a"></span>
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-4">
                                    <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item">
                                                <a href="/">Trang chủ</a>
                                            </li>
                                            <li class="breadcrumb-item active" aria-current="page">
                                                Liên hệ
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="contact">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="contact-map box">
                                        <div id="map" class="contact-map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0709101917423!2d106.77992637495906!3d10.882211289273037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d89aad780e49%3A0x54542761d4c22175!2sKTX%20Khu%20B%2C%20%C4%90HQG!5e0!3m2!1svi!2s!4v1691655561764!5m2!1svi!2s" width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 section-t8">
                                    <div class="row">
                                        <div class="col-md-7">
                                            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3">
                                                        <div class="form-group">
                                                            <input type="text" name="name" class="form-control form-control-lg form-control-a" placeholder="Họ và tên" required/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <div class="form-group">
                                                            <input name="email" type="email" class="form-control form-control-lg form-control-a" placeholder="Email" required/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 mb-3">
                                                        <div class="form-group">
                                                            <input type="text" name="subject" class="form-control form-control-lg form-control-a" placeholder="Chủ đề" required/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <textarea name="message" class="form-control" cols="45" rows="8" placeholder="Ý kiến phản hồi của bạn" required></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 my-3">
                                                        <div class="mb-3">
                                                            <div class="loading">Loading</div>
                                                            <div class="error-message"></div>
                                                            <div class="sent-message">Your message has been sent. Thank you!</div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12 text-center">
                                                        <button type="submit" class="btn btn-a">Gửi phản hồi</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="col-md-5 section-md-t3">
                                            <div class="icon-box section-b2">
                                                <div class="icon-box-icon">
                                                    <span class="bi bi-envelope"></span>
                                                </div>
                                                <div class="icon-box-content table-cell">
                                                    <div class="icon-box-title">
                                                        <h4 class="icon-title">Liên hệ với chúng tôi</h4>
                                                    </div>
                                                    <div class="icon-box-content">
                                                        <p class="mb-1">Email.
                                                            <span class="color-a">contact@example.com</span>
                                                        </p>
                                                        <p class="mb-1">Số điện thoại.
                                                            <span class="color-a">+54 356 945234</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="icon-box section-b2">
                                                <div class="icon-box-icon">
                                                    <span class="bi bi-geo-alt"></span>
                                                </div>
                                                <div class="icon-box-content table-cell">
                                                    <div class="icon-box-title">
                                                        <h4 class="icon-title">Địa chỉ của chúng tôi</h4>
                                                    </div>
                                                    <div class="icon-box-content">
                                                        <p class="mb-1">
                                                            Đông Hòa, Dĩ An, Bình Dương, Thành phố Hồ Chí Minh
                                                            <br/> Hoàng Sa, Trường Sa là của Việt Nam 
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="icon-box">
                                                <div class="icon-box-icon">
                                                    <span class="bi bi-share"></span>
                                                </div>
                                                <div class="icon-box-content table-cell">
                                                    <div class="icon-box-title">
                                                        <h4 class="icon-title">Phương tiện truyền thông</h4>
                                                    </div>
                                                    <div class="icon-box-content">
                                                        <div class="socials-footer">
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

export default Contact;