


import React, { useState } from "react";
import "./ReviewCard.css";
import "../index.css";

const ReviewsCard = ({ avatar, name, content, rating, creationDate }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const shortenContent = (text) => {
    const words = text.split(" ");
    if (words.length > 100) {
      return words.slice(0, 100).join(" ") + " ...";
    } else {
      return text;
    }
  };

  return (
    <div className="review-card">
      <div className="top_part">
        <div className="avator">
         <img src={`https://image.tmdb.org/t/p/w500/${avatar}`} alt="" />
        </div>
        <div className="name_container">
          <h2 className="name">{name}</h2>
          <p className="rating">{rating} /10⭐</p>
          <p className="creationdate">{creationDate}</p>
        </div>
      </div>

      <div className="bottom_part">
      <p className="content">
        {showMore ? content : shortenContent(content)}
        {shortenContent(content) !== content && (
          <a onClick={toggleShowMore}>
            {showMore ? "Read less" : "Read more"}
          </a>
        )}
      </p>
      </div>
    </div>
  );
};

export default ReviewsCard;
