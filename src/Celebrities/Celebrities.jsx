// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const apiKey = "ejwmMEte/kPxhiIT4UqlDQ==OJXafmdvmD9MO4ig";

// const Celebrities = [
//   "Tom Cruise",
//   "Jennifer Lawrence",
//   "Beyonce",
//   "LeBron James",
//   "Taylor Swift",
// ];

// const Celebrities = () => {
//   const [celebrityData, setCelebrityData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const requests = celebrities.map((name) =>
//         axios.get(
//           `https://api.celebritybucks.com/v1/celebrity/name/${encodeURIComponent(
//             name
//           )}?apikey=${apiKey}`
//         )
//       );
//       const responses = await Promise.all(requests);
//       const data = responses.map((response) => response.data.result[0]);
//       setCelebrityData(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {celebrityData.map((celebrity) => (
//         <div key={celebrity.id}>
//           <h2>{celebrity.name}</h2>
//           <img src={celebrity.photo_url} alt={celebrity.name} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Celebrities;

import React from 'react'
import '../../src/index.css'
const Celebrities = () => {
  return (
    <div>
     <h1>heya</h1>
    </div>
  )
}

export default Celebrities

