import { useEffect, useState } from "react";


const Favourites = () => {
    const [favourites, setFavourites] = useState([]);
  
    useEffect(() => {
      const savedFavourites = localStorage.getItem("favourites");
      if (savedFavourites) {
        setFavourites(JSON.parse(savedFavourites));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);
  
    return (
      <div className="favourites">
        <h2>Favourites</h2>
        <ul>
          {favourites.map((favourite) => (
            <li key={favourite.id}>{favourite.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Favourites;