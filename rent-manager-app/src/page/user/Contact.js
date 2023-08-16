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
<<<<<<< HEAD
                                        <h1 class="title-single">Liên hệ với chúng tôi</h1>
                                        <span class="color-text-a"></span>
=======
                                        <h1 class="title-single">Contact US</h1>
                                        <span class="color-text-a">Aut voluptas consequatur unde sed omnis ex placeat quis eos. Aut natus officia corrupti qui autem fugit consectetur quo. Et ipsum eveniet laboriosam voluptas beatae possimus qui ducimus. Et voluptatem deleniti. Voluptatum voluptatibus amet. Et esse sed omnis inventore hic culpa.</span>
>>>>>>> 710218f6c061481477397eb534333dc8e5e7326c
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-4">
                                    <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item">
<<<<<<< HEAD
                                                <a href="/">Trang chủ</a>
                                            </li>
                                            <li class="breadcrumb-item active" aria-current="page">
                                                Liên hệ
=======
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li class="breadcrumb-item active" aria-current="page">
                                                Contact
>>>>>>> 710218f6c061481477397eb534333dc8e5e7326c
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
<<<<<<< HEAD
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0709101917423!2d106.77992637495906!3d10.882211289273037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d89aad780e49%3A0x54542761d4c22175!2sKTX%20Khu%20B%2C%20%C4%90HQG!5e0!3m2!1svi!2s!4v1691655561764!5m2!1svi!2s" width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
=======
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834" width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
>>>>>>> 710218f6c061481477397eb534333dc8e5e7326c
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
<<<<<<< HEAD
                                                            <input type="text" name="name" class="form-control form-control-lg form-control-a" placeholder="Họ và tên" required/>
=======
                                                            <input type="text" name="name" class="form-control form-control-lg form-control-a" placeholder="Your Name" required/>
>>>>>>> 710218f6c061481477397eb534333dc8e5e7326c
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <div class="form-group">
<<<<<<< HEAD
                                                            <input name="email" type="email" class="form-control form-control-lg form-control-a" placeholder="Email" required/>
=======
                                                            <input name="email" type="email" class="form-control form-control-lg form-control-a" placeholder="Your Email" required/>
>>>>>>> 710218f6c061481477397eb534333dc8e5e7326c
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 mb-3">
                                                        <div class="form-group">
<<<<<<< HEAD
                                                            <input type="text" name="subject" class="form-control form-control-lg form-control-a" placeholder="Chủ đề" required/>
=======
                                                            <input type="text" name="subject" class="form-control form-control-lg form-control-a" placeholder="Subject" required/>
>>>>>>> 710218f6c061481477397eb534333dc8e5e7326c
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
<<<<<<< HEAD
                                                            <textarea name="message" class="form-control" cols="45" rows="8" placeholder="Ý kiến phản hồi của bạn" required></textarea>
=======
                                                            <textarea name="message" class="form-control" cols="45" rows="8" placeholder="Message" required></textarea>
>>>>>>> 710218f6c061481477397eb534333dc8e5e7326c
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
<<<<<<< HEAD
                                                        <button type="submit" class="btn btn-a">Gửi phản hồi</button>
=======
                                                        <button type="submit" class="btn btn-a">Send Message</button>
>>>>>>> 710218f6c061481477397eb534333dc8e5e7326c
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
<<<<<<< HEAD
                                                        <h4 class="icon-title">Liên hệ với chúng tôi</h4>
=======
                                                        <h4 class="icon-title">Say Hello</h4>
>>>>>>> 710218f6c061481477397eb534333dc8e5e7326c
                                                    </div>
                                                    <div class="icon-box-content">
                                                        <p class="mb-1">Email.
                                                            <span class="color-a">contact@example.com</span>
                                                        </p>
<<<<<<< HEAD
                                                        <p class="mb-1">Số điện thoại.
=======
                                                        <p class="mb-1">Phone.
>>>>>>> 710218f6c061481477397eb534333dc8e5e7326c
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
<<<<<<< HEAD
                                                        <h4 class="icon-title">Địa chỉ của chúng tôi</h4>
                                                    </div>
                                                    <div class="icon-box-content">
                                                        <p class="mb-1">
                                                            Đông Hòa, Dĩ An, Bình Dương, Thành phố Hồ Chí Minh
                                                            <br/> Hoàng Sa, Trường Sa là của Việt Nam 
=======
                                                        <h4 class="icon-title">Find us in</h4>
                                                    </div>
                                                    <div class="icon-box-content">
                                                        <p class="mb-1">
                                                            Manhattan, Nueva York 10036,
                                                            <br/> EE. UU.
>>>>>>> 710218f6c061481477397eb534333dc8e5e7326c
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
<<<<<<< HEAD
                                                        <h4 class="icon-title">Phương tiện truyền thông</h4>
=======
                                                        <h4 class="icon-title">Social networks</h4>
>>>>>>> 710218f6c061481477397eb534333dc8e5e7326c
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