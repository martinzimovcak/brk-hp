import React from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialContent = [
  {
    image: '/content/images/images/our-team/pic12.jpg',
    author: 'Jan Novák',
    designation: 'Architekt',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  },
  {
    image: '/content/images/images/our-team/pic13.jpg',
    author: 'Štěpán Bareš',
    designation: 'Ředitel společnosti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  },
  {
    image: '/content/images/images/our-team/pic14.jpg',
    author: 'Jiří Houska',
    designation: 'Klient',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  },
  {
    image: '/content/images/images/our-team/pic12.jpg',
    author: 'Zdeněk Vomáčka',
    designation: 'Dodavatel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  }
]


const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <>
      <Slider {...settings} className="testimonial-num-count btn-style-1 icon-2">
        {testimonialContent.map((item, id) => (
          <div key={id} className="item">
            <div className="testimonial-12 text-white">
              <div className="testimonial-pic">
                <img src={item.image} alt=""/>
              </div>
              <div className="testimonial-detail">
                <h4 className="testimonial-name m-t0 m-b5">{item.author}</h4>
                <span className="testimonial-position">{item.designation}</span>
                <div className="testimonial-text">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </>
  )
}
export default Testimonial;
