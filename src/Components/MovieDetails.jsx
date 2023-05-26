import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import classNames from "classnames";
import fvrt from "../images/fvrt.png";
import play from "../images/play.png";
import { Link } from "react-router-dom";
import ReviewsCard from "./ReviewsCard";


const MovieDetails = () => {
  // const{user} = UserAuth()
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState("");
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null);



  const [favorites, setFavorites] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=48b7fd8eddafbd865f8799c3047acbc2&language=en-US`
        );
        setMovie(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchTrailerKey = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=48b7fd8eddafbd865f8799c3047acbc2&language=en-US`
        );
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

    const fetchMovieReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=48b7fd8eddafbd865f8799c3047acbc2&language=en-US&page=1`
        );
        setReviews(response.data.results);
        // console.log(response.data.results)
      } catch (err) {
        console.log(err);
      }
    };

    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=48b7fd8eddafbd865f8799c3047acbc2`
        );
        setCast(response.data.cast);
        // console.log(response.data.cast);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovieDetails();
    fetchTrailerKey();
    fetchCast();
    fetchMovieReviews();
  }, [id]);

  // const movieId = doc(db, "users", `${user?.email}`)

  // const saveMovie = async () => {
  //   if (user?.email) {
  //     setIsFavourite(!like);
  //     setFavorites(true);
  //     await updateDoc(movieId, {
  //       savedMovies: arrayUnion({
  //         id: id,
  //         title: title,
  //         img: image,
  //       }),
  //     });
  //   } else {
  //     alert("please login to save your recipe");
  //   }
  // };

  const backgroundStyles = {
    position: "relative",

    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.75)), url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",

    // opacity:"0.7",
  };
  return (
    <>
      <div className="movieDetails_container" style={backgroundStyles}>
        <div className="topDetails first-container">
          {movie && (
            <div className="movieDetail">
              <div className="image_container">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
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
                  <p>No trailer Found</p>
                )}
              </div>

              <div className="details_container">
                <div className="heading_container">
                  <h1>
                    {movie.title} <span>{movie.release_date}</span>
                  </h1>
                </div>
                <div className="rating_container">
                  <div className="top_container">
                    <p>Runtime : {movie.runtime} mins</p>
                    <p className="genre">
                      {movie.genres.map((genre) => (
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

                  {movie.vote_average && (
                    <p className="movie-rating">
                      Rating: ⭐ {movie.vote_average} /10{" "}
                      <span className="movie-ratingSpan">
                        ({movie.vote_count})
                      </span>
                    </p>
                  )}

                  <div className="add_to_favourites_btn">
                    <img src={fvrt} alt="" />
                      
                      <a >
                        Add to favorites
                      </a>
                      
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
              <div className="overView">{movie?.overview}</div>
              <div className="review-container">
                <h1 className="overview-heading reviews">Reviews</h1>
                <div className="review-card-container">
                  {reviews?.map((item) => {
                    return (
                      <ReviewsCard
                        key={item.id}
                        name={item.author}
                        content={item.content}
                        rating={item.author_details.rating}
                        avatar={item.author_details.avatar_path}
                        creationDate={item.content.created_at}
                      />
                    );
                  })}
                </div>
              </div>
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

export default MovieDetails;
