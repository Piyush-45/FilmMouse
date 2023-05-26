import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Components/MovieDetails.css";
import classNames from "classnames";
import fvrt from "../src/images/fvrt.png";
import play from "../src/images/play.png";
import axios from "axios";
import ReviewsCard from "./Components/ReviewsCard";
const TvShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [reviews, setReviews] = useState([]);
  // const[]

  const [cast, setCast] = useState(null);
  const [tvSHowDetails, setTVSHowDetails] = useState(null);
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    const fetchTvShowDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=48b7fd8eddafbd865f8799c3047acbc2&language=en-U`
        );
        setShow(response.data);
        // console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchTrailerKey = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}/videos?api_key=48b7fd8eddafbd865f8799c3047acbc2&language=en-US`
        );
        //   console.log(response)
        const trailer = response.data.results.find(
          (result) => result.type === "Trailer"
        );
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}/credits?api_key=48b7fd8eddafbd865f8799c3047acbc2`
        );
        setCast(response.data.cast);
        //   console.log(response.data.cast);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchReviews = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=48b7fd8eddafbd865f8799c3047acbc2`);
      setReviews(response.data.results);
      console.log(response.data)
    };

    fetchTvShowDetails();
    fetchTrailerKey();
    fetchCast();
    fetchReviews();
  }, [id]);

  const backgroundStyles = {
    position: "relative",
    backgroundImage: show
      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.75)), url(https://image.tmdb.org/t/p/original${show?.backdrop_path})`
      : "",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <>
      <div className="movieDetails_container" style={backgroundStyles}>
        <div className="topDetails first-container">
          {show && (
            <div className="movieDetail">
              <div className="image_container">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${show?.poster_path}`}
                  alt=""
                />
                {trailerKey ? (
                  <a
                    href={`https://www.youtube.com/watch?v=${trailerKey}`}
                    className="trailer-btn"
                    target="/"
                  >
                    <img src={play} alt="" /> Watch Trailer
                  </a>
                ) : (
                  <p className="trailer-btn">No trailer Found</p>
                )}
              </div>

              <div className="details_container">
                <div className="heading_container">
                  <h1>
                    {show.original_name} <span>{show.release_date}</span>
                  </h1>
                </div>
                <div className="rating_container">
                  <div className="top_container">
                    <p>Runtime: {show.first_air_date.slice(0, 4)} </p>

                    <p className="genre">
                      {show.genres.map((genre) => (
                        <span
                          key={genre.id}
                          className={classNames({
                            "genre-action": genre.name === "Action",
                            "genre-comedy": genre.name === "Comedy",
                            "genre-drama": genre.name === "Drama",
                            "genre-sci-fi": genre.name === "Sci-fi",
                            "genre-crime": genre.name === "Crime",
                            "genre-romance": genre.name === "Romance",
                            "genre-thriller": genre.name === "Thriller",
                            "genre-animation": genre.name === "Animation",
                            "genre-family": genre.name === "Family",
                            "genre-fantasy": genre.name === "Fantasy",

                            // Add more classes for each genre
                          })}
                        >
                          {genre.name}
                        </span>
                      ))}
                    </p>
                  </div>

                  {show.vote_average && (
                    <p className="show-rating movie-rating">
                      Rating: ⭐ {show.vote_average} /10
                      <span className="show-ratingSpan">
                        ({show.vote_count})
                      </span>
                    </p>
                  )}

                  <div className="add_to_favourites_btn">
                    <img src={fvrt} alt="" />
                    <a href="">Add To Favourites</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="second_container">
        <div className="overview-container">
          <div className="overview-cast">
            <div className="overviewheading-para">
              <h1 className="overview-heading overview">OVERVIEW</h1>
              <div className="overView">{show?.overview}</div>

              {
                <div>
                <h2>Reviews</h2>
                {reviews?.map((item) => (
                  <div key={item.id}>
                    <ReviewsCard
                     key={item.id}
                     name={item.author}
                     content={item.content}
                     rating={item.author_details.rating}
                     avatar={item.author_details.avatar_path}
                     creationDate={item.content.created_at}/>
                  </div>
                ))}
              </div>
              }
            </div>
            <div className="cast-container">
              <h1 className="overview-heading cast">CAST</h1>
              {cast?.map((person) => {
                return (
                  <div key={person.id} className="cast_list">
                    <div className="person_image">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        alt=""
                      />
                    </div>
                    <div className="person_list">
                      <h2>{person.original_name}</h2>
                      <p className="character">{person.character}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TvShowDetails;
