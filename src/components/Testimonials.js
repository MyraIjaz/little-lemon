import React from 'react';
import './Testimonial.css'; // Import the CSS file for styling
import test1 from "../icons_assets/test1.jpg"
import test2 from "../icons_assets/test2.jpg"
import test3 from "../icons_assets/test3.jpg"
import test4 from "../icons_assets/test4.jpg"

const testimonials = [
  { rating: "★★★★★", name: "John Doe", review: "This app is fantastic! The user interface is incredibly intuitive. ",photo: <img src={test1} className="test-photo"/> },
  { rating: "★★★★☆", name: "Jane Smith", review: "Great app with a lot of useful features. Overall, a solid choice!",photo: <img src={test2} className="test-photo"/>},
  { rating: "★★★★★", name: "Alex Johnson", review: "I’m amazed at how efficient this app is. Worth every penny!", photo: <img src={test3} className="test-photo"/> },
  { rating: "★★★☆☆", name: "Emily Davis", review: "The app has a lot of potential. The features are great, stability could be improved.",photo: <img src={test4} className="test-photo"/> },

];

const TestimonialList = ({ rating, name, review,photo }) => (
  <div className="testimonial">
    <div className="rating">{rating}</div>
    <div className="name">{name}</div>
    <div className="name">{photo}</div>
    <div className="review">{review}</div>
  </div>
);

const Testimonial = () => (
  <>
  <h1 className="test_heading">Testimonials</h1>
   <div className="testimonial-list">
    {testimonials.map((testimonial, index) => (
      <TestimonialList
        key={index}
        rating={testimonial.rating}
        name={testimonial.name}
        photo={testimonial.photo}
        review={testimonial.review}
      />
    ))}
  </div>
  </>
 
);

export default Testimonial;
