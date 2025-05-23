import React from "react";
import Slider from "react-slick";
import { IoIosArrowDropleft,IoIosArrowDropright,IoIosCheckmarkCircle } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrustedBrokerSupport.css";
import { reviews } from '../../utils/Constants'


const ArrowLeft = (props) => (
  <div {...props} className="arrow arrow-left">
    <IoIosArrowDropleft size={24} color="var(--grey-border)" />
  </div>
);

const ArrowRight = (props) => (
  <div {...props} className="arrow arrow-right">
    <IoIosArrowDropright size={24} color="var(--grey-border)" />
  </div>
);

const ReviewSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <Slider {...settings}>
      {reviews.map((rev, idx) => (
        <div key={idx} className="review-card">
          <div className="d-flex align-center gap-2">
            <div className="review-stars">★★★★★</div>
            <div><IoIosCheckmarkCircle size={18} color="var(--grey-border)" />
              <span className="review-verified">Verified</span>
            </div>
          </div>

          <h4 className="mt-2">{rev.title}</h4>
          <p className="review-description">{rev.description}</p>
          <p className="review-author">{rev.author}, {rev.time}</p>
        </div>
      ))}
    </Slider>
  );
};

const TrustedBrokerSection = () => (
  <div className="trusted-broker-section">
    <div className="trusted-broker-content">
      <div className="trustpilot-info">
        <h4>Excellent</h4>
        <div className="review-stars">★★★★★</div>
        <p>Based on <u>30,790 reviews</u></p>
        <div className="d-flex justify-content-center">
          <div className="review-stars">★</div><b>Trustpilot</b></div>
      </div>
      <div className="review-slider-container">
        <ReviewSlider />
      </div>
    </div>
  </div>
);




export default TrustedBrokerSection;
