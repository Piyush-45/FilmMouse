import React, { useState, useEffect } from "react";
import "./emotion.css";
import Slider from "react-slick";
import axios from "axios";
import Moviecard from "../Components/Moviecard";
const EMOTION = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMood, setSelectedMood] = useState("");
  const apiKey = `48b7fd8eddafbd865f8799c3047acbc2`;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  useEffect(() => {
    const fetchMovies = async () => {
      let endpoint = "";
      switch (selectedMood) {
        case "Happy":
          endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35&vote_average.gte=7`;
          break;
        case "Sad":
          endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=18&vote_average.lte=5`;
          break;
        case "Excited":
          endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28&vote_average.gte=7`;
          break;
        case "Scared":
          endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27&vote_average.gte=7`;
          break;
        case "Angry":
          endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=53&vote_average.gte=7`;
          break;
        case "Nostalgic":
          endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10751&vote_average.gte=7`;
          break;
        case "Romantic":
          endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749&vote_average.gte=7`;
          break;
        case "Thoughtful":
          endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99&vote_average.gte=7`;
          break;
        case "Energetic":
          endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16&vote_average.gte=7`;
          break;
        case "Relaxed":
          endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35&vote_average.lte=5`;
          break;
        default:
          endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35&vote_average.gte=7`;
      }

      try {
        const response = await axios.get(endpoint);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [selectedMood]);

  const handleMoodChange = (event) => {
    setSelectedMood(event.target.value);
  };

  return (
    <>
      <div className="inhall emotion-container">
        <h2 className="section_heading">
          Discover Movies and Shows that Match Your <span className="emotion-span">Emotions</span>  with Emotion Elixir
        </h2>
        <div className="mood_dropdown">
          <label htmlFor="mood-select"> Select your mood : </label>
          <select
            name={selectedMood}
            id="mood-select "
            onChange={handleMoodChange}
          >
            <option value="Happy">Happy 😊</option>
            <option value="Sad">Sad 😞</option>
            <option value="Excited">Excited 😃</option>
            <option value="Scared">Scared 😱</option>
            <option value="Angry">Angry 😠</option>
            <option value="Nostalgic">Nostalgic 🥰</option>
            <option value="Romantic">Romantic 😍</option>
            <option value="Thoughtful">Thoughtful 🤔</option>
            <option value="Energetic">Energetic 🔥</option>
            <option value="Relaxed">Relaxed 😌</option>
          </select>
        </div>

        {selectedMood ? (
          <p className="emotion ">
            Get recommendations for your <span>{selectedMood}</span> mood
          </p>
        ) : (
          <p className="emotion">Select your mood above</p>
        )}
        <Slider {...settings} className="moviecard_slider slider">
          {movies.map((movie) => {
            const { id, original_title, overview, vote_average, poster_path } =
              movie;
            return (
              <Moviecard
                key={id}
                title={original_title}
                rating={vote_average}
                image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                movie={movie}
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default EMOTION;
