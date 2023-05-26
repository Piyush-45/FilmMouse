//! TOP RATED
import "../index.css";
import "./Hero.css";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieDetails from "../Components/MovieDetails";
const Hero = () => {
  const [topRated, setTopRated] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleMouseEnter = (movie) => {
    setSelectedMovie(movie);
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=48b7fd8eddafbd865f8799c3047acbc2&language=en-US&page=1"
        ); 
        setTopRated(response.data.results);
        // console.log(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTopRated();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className="movies-list">
        <Slider {...settings} className="slider">
          {topRated.map((movie) => (
            <div
              className="movie-card"
              key={movie.id}
              onMouseEnter={() => handleMouseEnter(movie)}
              onMouseLeave={handleMouseLeave}
            >
             
              <div className="image">
               <Link to={`/movie/${movie.id}`}>
               <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
               </Link>
              </div>
              {showDetails && selectedMovie?.id === movie.id && (
                <div className="movie-details">
                  <h3>{movie.title}</h3>
                  <p className="movie-details__ratings">
                    Rating: ⭐ {movie.vote_average} /10
                  </p>
                  {/* {selectedMovie.genres && (
                    <p>
                      Genre:
                      {selectedMovie.genres.map((genre) => (
                        <span key={genre.id}> {genre.name},</span>
                      ))}
                    </p>
                  )} */}
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Hero;
