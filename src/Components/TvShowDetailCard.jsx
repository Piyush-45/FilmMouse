import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../Components/moviecard.css";

const TvShowDetailCard = ({ key, title,  rating, image, show }) => {
  const { id } = useParams();

  return (
    <div className="movie-card">
      <div className="movie-card-overlay">
        <Link to={`/tvshow/${show.id}`}>
          <button className="read-more-button">Read More</button>
        </Link>
      </div>
      <img src={image} alt="" />
      <div className="movie_details">
        <p className="movieCard_title">{title}</p>
        <p className="movieCard_rating">⭐{rating}/10</p>
      </div>
    </div>
  );
};

export default TvShowDetailCard;
