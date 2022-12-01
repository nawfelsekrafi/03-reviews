import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text, id } = people[index];

  const checkNumber = (number) => {
    if(number === 4){
      return 0;
    }
    if(number === -1) {
      return 3;
    }
    return number;
  }
  const showNextReview = () => {
    setIndex((index) => {
       let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }
  const showPreviousReview = () => {
    setIndex((index) => {
       let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }


  return (
    <div className="container">
      <div className="review" key={id}>
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
        </div>
        <div className="author">{name}</div>
        <div className="job">{job}</div>
        <div className="info">{text}</div>
        <div>
          <div>
            <FaChevronLeft className="prev-btn" onClick={showPreviousReview}/>
            <FaChevronRight className="next-btn" onClick={showNextReview}/>
          </div>
        </div>
        <button className="random-btn">Surprise Me</button>
      </div>
    </div>
  );
};

export default Review;
