import Slider from "react-slick";
import "./Intheator.css";
import "../index.css";
import { useState, useEffect } from "react";
import Moviecard from "../Components/Moviecard";
import axios from "axios";
const Intheator = () => {
  const [nowPlaying, setNowPlaying] = useState([]);


const settings={
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
}
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=48b7fd8eddafbd865f8799c3047acbc2&language=en-US&region=US"
        );

        setNowPlaying(response.data.results);
        // console.log(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchNowPlaying();
  }, []);
  return (
    <div className="inhall " id="inhall">
      <h1 className="section_heading">IN THEATER</h1>
      <Slider {...settings} className="moviecard_slider slider" >
        {nowPlaying.map((movie) => {
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
  );
};

export default Intheator;



