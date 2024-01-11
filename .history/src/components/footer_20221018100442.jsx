import React from "react";
import "../css/footer.css";
const Footer = (props) => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-item">
          <div className="footer-title">Về Chúng Tôi</div>
          <div className="line"></div>
          <div className="footer-content">
            <p className="address">
              950 Lạc Long Quân, Phường 8, Quận Tân Bình, TP Hồ Chí Minh
            </p>
            <p className="phone">
              Điện thoại: <span>0987023995</span>
            </p>
            <p className="email">
              Email: <span>Nguyenlien30121987@gmail.com</span>
            </p>
          </div>
          <div className="footer-certificate">
            <img
              src="https://cdn.gokisoft.com/uploads/stores/2/2022/05/logo-da-thong-bao-voi-bo-cong-thuong.png"
              alt=""
              className="certificate-image"
            />
            <img
              src="https://cdn.gokisoft.com/uploads/stores/2/2022/05/ssl-basic.png"
              alt=""
              className="certificate-image"
            />
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-title">Sản Phẩm Bán Chạy Nhất</div>
          <div className="line"></div>
          <div className="footer-content">
            <p className=" footer-text">Bếp từ Hafele HC-I772A</p>
            <p className="mt-3 footer-text">Bếp từ Bosch PPI82560MS</p>
            <p className="mt-3 footer-text">Bếp từ Canzy CZ T 01</p>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-title">Thông Tin Hữu Ích</div>
          <div className="line"></div>
          <div className="footer-content">
            <p className=" footer-text">Giới thiệu</p>
            <p className="mt-3 footer-text">Giấy phép kinh doanh</p>
            <p className="mt-3 footer-text">
              Chính Sách Đổi Trả - Trả Hàng Và Hoàn Lại Tiền
            </p>
            <p className="mt-3 footer-text">Chính Sách Bảo Hành</p>
            <p className="mt-3 footer-text">Chính Sách Bảo Mật</p>
            <p className="mt-3 footer-text">Vận Chuyển Và Lắp Đặt</p>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-title">Thông Tin Hữu Ích</div>
          <div className="line"></div>
          <div className="footer-content">
            <p className=" footer-text">Giới thiệu</p>
            <p className="mt-3 footer-text">Giấy phép kinh doanh</p>
            <p className="mt-3 footer-text">
              Chính Sách Đổi Trả - Trả Hàng Và Hoàn Lại Tiền
            </p>
            <p className="mt-3 footer-text">Chính Sách Bảo Hành</p>
            <p className="mt-3 footer-text">Chính Sách Bảo Mật</p>
            <p className="mt-3 footer-text">Vận Chuyển Và Lắp Đặt</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
