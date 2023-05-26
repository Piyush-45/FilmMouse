// import "./moviecard.css";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// const Moviecard = ({ title, image, rating, movie}) => {

//   const {id} = useParams()
//   return (
//     <div className="movie-card">
//          <div className="movie-card-overlay">
//         <Link to={`/movie/${movie.id}`}><button className="read-more-button">Read More</button></Link>
//       </div>
//       <img src={image} alt="" />
//       <div className="movie_details">
//         <p className="movieCard_title">{title}</p>
//         <p className="movieCard_rating">⭐{rating}/ 10</p>
//       </div>
//     </div>
//   );
// };

// export default Moviecard;
import "./moviecard.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Moviecard = ({ title, image, rating, movie }) => {
  const { id } = useParams();

  return (
    <div className="movie-card">
      <div className="movie-card-overlay">
      <Link to={`/movie/${movie && movie.id}`}><button className="read-more-button">Read More</button></Link>
      </div>
      <img src={image} alt="" />
      <div className="movie_details">
        <p className="movieCard_title">{title}</p>
        <p className="movieCard_rating">⭐{rating}/ 10</p>
      </div>
    </div>
  );
};

export default Moviecard;
