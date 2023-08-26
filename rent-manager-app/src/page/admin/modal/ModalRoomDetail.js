
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getRoom } from '../../../services/fetch/ApiUtils';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ModalRoomDetails = ({ roomId }) => {



    const [roomData, setRoomData] = useState({
        title: '',
        description: '',
        price: 0,
        latitude: 0.0,
        longitude: 0.0,
        address: '',
        locationId: 0,
        category: [{
            id: '', name: ''
        }],
        assets: [
            { name: '', number: '' }
        ],
        files: []
    });

    useEffect(() => {
        getRoom(roomId)
            .then(response => {
                const room = response;
                setRoomData(prevState => ({
                    ...prevState,
                    ...room
                }));
            })
            .catch(error => {
                toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
            });
    }, [roomId]);

    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Chi tiết bài đăng tin</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">




                            <section>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-8">
                                            <div class="title-single-box">
                                                <h1 class="title-single">{roomData?.title}</h1>
                                                <span class="color-text-a">{roomData?.address}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="property-single nav-arrow-b">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            <div id="property-single-carousel" class="swiper">
                                                <Swiper autoHeight={true} navigation={true} modules={[Navigation]} className="swiper-wrapper">

                                                    <SwiperSlide className="carousel-item-b swiper-slide" >                                                   
                                                        <img src="../../assets/img/slide-2.jpg" alt="" style={{ width: "100%" }} />
                                                    </SwiperSlide>
                                                    <SwiperSlide className="carousel-item-b swiper-slide" >                                                   
                                                        <img src="../../assets/img/slide-1.jpg" alt="" style={{ width: "100%" }} />
                                                    </SwiperSlide>
                                                </Swiper>
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
                                                                <h5 class="title-c">{roomData?.price.toLocaleString('vi-VN', {
                                                                    style: 'currency',
                                                                    currency: 'VND',
                                                                })}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="property-summary">
                                                        <div class="row">
                                                            <div class="col-sm-12">
                                                                <div class="title-box-d section-t4">
                                                                    <h3 class="title-d">Tóm tắt nhanh</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="summary-list">
                                                            <ul class="list">
                                                                <li class="d-flex justify-content-between">
                                                                    <strong>Mã ID:</strong>
                                                                    <span>{roomId}</span>
                                                                </li>
                                                                <li class="d-flex justify-content-between">
                                                                    <strong>Địa chỉ:</strong>
                                                                    <span>{roomData?.address}</span>
                                                                </li>
                                                                <li class="d-flex justify-content-between">
                                                                    <strong>Thể loại:</strong>
                                                                    <span>Phòng trọ</span>
                                                                </li>
                                                                <li class="d-flex justify-content-between">
                                                                    <strong>Trạng thái:</strong>
                                                                    <span>Chưa thuê</span>
                                                                </li>
                                                                {roomData.assets.map((asset, index) => (
                                                                <li class="d-flex justify-content-between">
                                                                
                                                                    <strong>{asset.name}:</strong>
                                                                    <span>
                                                                        <sup>{asset.number}</sup>
                                                                    </span>
                                                                
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
                                                                <h3 class="title-d">Kê khai tài sản</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="property-description">
                                                        <p class="description color-text-a">
                                                                {roomData.description}
                                                        </p>
                                                    </div>
                                                    <div class="row section-t3">
                                                        <div class="col-sm-12">
                                                            <div class="title-box-d">
                                                                <h3 class="title-d">Tiện ích</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="amenities-list color-text-a">
                                                        <ul class="list-a no-margin">
                                                            <li>Ban công</li>
                                                            <li>Bể bơi</li>
                                                            <li>Trần phơi</li>
                                                            <li>Khu vui chơi</li>
                                                            <li>Phòng tenis</li>
                                                            <li>Khu vệ sinh</li>
                                                        </ul>
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
                                                    <a class="nav-link" id="pills-plans-tab" data-bs-toggle="pill" href="#pills-plans" role="tab" aria-controls="pills-plans" aria-selected="false">Sơ đồ tầng</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="pills-map-tab" data-bs-toggle="pill" href="#pills-map" role="tab" aria-controls="pills-map" aria-selected="false">Địa chỉ</a>
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
                                                        <h3 class="title-d">Liên hệ</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 col-lg-4">
                                                    <img src="../../assets/img/agent-4.jpg" alt="" class="img-fluid" />
                                                </div>
                                                <div class="col-md-6 col-lg-4">
                                                    <div class="property-agent">
                                                        <h4 class="title-agent">Anabella Geller</h4>
                                                        <p class="color-text-a">
                                                            Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                                            dui. Quisque velit nisi,
                                                            pretium ut lacinia in, elementum id enim.
                                                        </p>
                                                        <ul class="list-unstyled">
                                                            <li class="d-flex justify-content-between">
                                                                <strong>Phone:</strong>
                                                                <span class="color-text-a">(222) 4568932</span>
                                                            </li>
                                                            <li class="d-flex justify-content-between">
                                                                <strong>Mobile:</strong>
                                                                <span class="color-text-a">777 287 378 737</span>
                                                            </li>
                                                            <li class="d-flex justify-content-between">
                                                                <strong>Email:</strong>
                                                                <span class="color-text-a">annabella@example.com</span>
                                                            </li>
                                                            <li class="d-flex justify-content-between">
                                                                <strong>Skype:</strong>
                                                                <span class="color-text-a">Annabela.ge</span>
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
                                                                        <input type="text" class="form-control form-control-lg form-control-a" id="inputName" placeholder="Name *" required />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 mb-1">
                                                                    <div class="form-group">
                                                                        <input type="email" class="form-control form-control-lg form-control-a" id="inputEmail1" placeholder="Email *" required />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 mb-1">
                                                                    <div class="form-group">
                                                                        <textarea id="textMessage" class="form-control" placeholder="Comment *" name="message" cols="45" rows="8" required></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 mt-3">
                                                                    <button type="submit" class="btn btn-a">Send Message</button>
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


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalRoomDetails;