import React, { Component } from "react";
import Slider from 'react-slick';

export default class HomeApp extends Component {
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="introduce">
        <div className="introduce__content container">
          <div className="row">
            <div className="col-12 col-md-6 introduce__left">
              <div className="introduce__text">
                <h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
                <h4>
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </h4>
                <button className="introduce__btn">
                  App miễn phí - Tải về ngay!
                </button>
                <p>
                  TIX có hai phiên bản <a href="#">iOS</a> &amp;{" "}
                  <a href="#">Android</a>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 introduce__right">
              <img src="./img/mobile.png" alt />
              <Slider className="introduce__carouse" {...settings}>
                <img src="./img/slide1.jpg" alt />
                <img src="./img/slide2.jpg" alt />
                <img src="./img/slide3.jpg" alt />
                <img src="./img/slide4.jpg" alt />
                <img src="./img/slide5.jpg" alt />
                <img src="./img/slide6.jpg" alt />
                <img src="./img/slide7.jpg" alt />
                <img src="./img/slide8.jpg" alt />
                <img src="./img/slide9.jpg" alt />
                <img src="./img/slide10.jpg" alt />
                <img src="./img/slide11.jpg" alt />
                <img src="./img/slide12.jpg" alt />
                <img src="./img/slide13.jpg" alt />
                <img src="./img/slide14.jpg" alt />
                <img src="./img/slide15.jpg" alt />
                <img src="./img/slide16.jpg" alt />
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
