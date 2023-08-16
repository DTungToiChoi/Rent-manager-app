import React, { useState, useEffect } from "react";
import Footer from "../../common/Footer";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
const UserProfile = () => {
    const allowedImageFormats = ["image/jpeg", "image/png", "image/gif"]; 
    const [selectedImage, setSelectedImage] = useState(null);
    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        createdAt: "",
        address: "",
        role: "",
    });

    const buttonStyle = {
        flex: 1,
        minWidth: "100px",
        height: "90px",
        marginRight: "3px",
    };
    const buttonContainerStyle = {
        //display: "flex",
        justifyContent: "center",
        margin: "20px", // Điều chỉnh khoảng cách giữa các button
    };
    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
      
        if (imageFile) {
          if (allowedImageFormats.includes(imageFile.type)) {
            setSelectedImage(imageFile);
          } else {
            toast.error("Định dạng ảnh không hợp lệ. Vui lòng chọn ảnh có định dạng JPEG, PNG hoặc GIF.", { autoClose: 1500 });
            setTimeout(() => {
                window.location.reload();
            }, 2400);
        }
        }
    };

    const handleImageUpload = () => {
        const token = localStorage.getItem("accessToken");

        if (selectedImage) {
            const formData = new FormData();
            formData.append("image", selectedImage);

            fetch("http://localhost:8080/update-image", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            })
                .then(response => {
                    if (response.ok) {
                        console.log("Image uploaded successfully");
                        // Reset selectedImage after successful upload
                        setSelectedImage(null);
                        toast.success("Cập nhật ảnh đại diện thành công", { autoClose: 750 });
                        // Làm mới trang
                        setTimeout(() => {
                            window.location.reload();
                        }, 1500);
                    } else {
                        toast.error("Cập nhật ảnh đại diện thất bại", { autoClose: 750 });
                    }
                })
                .catch(error => {
                    toast.error("Cập nhật ảnh đại diện thất bại", { autoClose: 750 });
                });
        } else {
            toast.error("Vui lòng chọn ảnh đại diện để cập nhật", { autoClose: 1000 });
        }
    };

    useEffect(() => {
        // Lấy token từ local storage
        const token = localStorage.getItem("accessToken");

        // Gọi API để lấy thông tin người dùng
        fetch("http://localhost:8080/user/me/", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setUserData(data); // Cập nhật dữ liệu người dùng
                console.log("User Data:", data);
            })
            .catch(error => {
                console.error("Error fetching user profile:", error);
            });

    }, []);

    return (
        <>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                                    <li className="breadcrumb-item"><a href="/profile">Người dùng</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Thông tin người dùng</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4" style={buttonContainerStyle}>
                                <div className="card-body text-center" >
                                    <img src={userData.imageUrl} alt="avatar" className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                    <hr />
                                    <input type="file" accept="image/*" onChange={handleImageChange} />
                                    <h5 className="my-3">{userData.fullName}</h5>
                                    <p className="text-muted mb-1"></p>
                                    <p className="text-muted mb-4"></p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <a href="/update-profile">
                                            <button type="button" className="btn btn-primary" style={buttonStyle}>
                                                Chỉnh sửa thông tin
                                            </button>
                                        </a>
                                        <button type="button" className="btn btn-outline-primary" style={buttonStyle} onClick={handleImageUpload}>
                                            Đổi ảnh đại diện
                                        </button>
                                        <a href="/forgot-password">
                                            <button type="button" className="btn btn-primary" style={buttonStyle} onClick={handleImageUpload}>
                                                Đổi mật khẩu
                                            </button>
                                        </a>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4 mb-lg-0">
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush rounded-3">
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fas fa-globe fa-lg text-warning"></i>
                                        <p className="mb-0"> </p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i class="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
                                        <p class="mb-0"> </p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i class="fab fa-twitter fa-lg" style={{ color: "#55acee" }}></i>
                                        <p class="mb-0"></p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i class="fab fa-instagram fa-lg" style={{ color: "#ac2bac" }}></i>
                                        <p class="mb-0"></p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i class="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }}></i>
                                        <p class="mb-0"> </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Họ và tên</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{userData.name}</p>
                                    </div>
                                </div>
                                <hr />
                                <hr />
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{userData.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <hr />
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Số điện thoại</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{userData.phone}</p>
                                    </div>
                                </div>
                                <hr />
                                <hr />
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Địa chỉ</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{userData.address}</p>
                                    </div>
                                </div>
                                <hr />
                                <hr />
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Ngày tạo tài khoản</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{userData.createdAt}</p>
                                    </div>
                                </div>
                                <hr />
                                <hr />
                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Đánh giá của người dùng khác</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{userData.createdAt}</p>
                                    </div>
                                </div>
                                <hr />
                                <hr />
                                <hr />
                                <hr />
                                <hr />
                                <hr />
                                <hr />
                                <hr />
                                <hr />

                                {/* ... (các phần khác trong card body) */}
                            </div>

                        </div>
                        {/* ... (các phần khác trong col-lg-8) */}
                    </div>
                </div>
            </div>
        </section >
            <Footer />
        </>
    );
};

export default UserProfile;
