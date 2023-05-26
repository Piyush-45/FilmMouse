import axios from "axios";
import { useState, useEffect } from "react";
import './Ontv.css'
import Slider from "react-slick";

import '../InTheater/Intheator.css'
import TvShowDetailCard from "../Components/TvShowDetailCard";
const OnTv = () => {
  const [onTvShows, setOnTvShows] = useState([]);


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

    const fetchTvShows = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/tv/on_the_air?api_key=48b7fd8eddafbd865f8799c3047acbc2&language=en-US&page=1"
        );
        setOnTvShows(response.data.results);
        // console.log(response.data.results);
      } catch (err) {
        console.log(err);
      }

      // console.log(onTvShows)
    };

  

    fetchTvShows();

  },[]);

  const fetchMoreTvShows = async (page) => {
    const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=48b7fd8eddafbd865f8799c3047acbc2&language=en-US&page=${page}&include_adult=false`);
    const data = await response.json();
    setOnTvShows(onTvShows.concat(data.results));
    
  }

  return <div className="inhall">
  <h1 className="section_heading">TV SHOWS</h1>
  <Slider {...settings} className="moviecard_slider">
    {onTvShows?.map((show) => {
      const { id, original_name, overview, vote_average, poster_path } =
        show;
      return (
        <TvShowDetailCard
          key={id}
          title={original_name}
          rating={vote_average}
          image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
           show={show}
        />
      );
    })}
  </Slider>
</div>
};

export default OnTv;
