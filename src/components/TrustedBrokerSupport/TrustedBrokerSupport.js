import React from "react";
import Slider from "react-slick";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight, FaCheckCircle } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrustedBrokerSupport.css"; 
import {reviews} from '../../Constants'


const ArrowLeft = (props) => (
  <div {...props} className="arrow arrow-left">
    <FaRegArrowAltCircleLeft size={24} color="#d3d3d3" />
  </div>
);

const ArrowRight = (props) => (
  <div {...props} className="arrow arrow-right">
    <FaRegArrowAltCircleRight size={24} color="#d3d3d3" />
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
            <div><FaCheckCircle size={18} color="#d3d3d3" /><span style={{ fontSize: '12px', fontWeight: "700", color: '#d3d3d3', marginLeft: '2px' }}>Verified</span></div>
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
