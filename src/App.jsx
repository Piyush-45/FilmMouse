import "./index.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Intheator from "./InTheater/Intheator";
// import Navbar from './Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import Home from "./Components/Home";
import TvShowDetails from "./TvShowDetails";
import Account from "./Account/Account";
import EMOTION from "./Emotion Elixir/EMOTION";
import News from "./News/News";
import SignUp from "./authentication/SIgnup";
import Login from "./authentication/Login";
import { AuthContextProvider } from "../Context/Authcontext";
import { ToastContainer } from "react-toastify";
import SavedShows from "./authentication/SavedShows";
const App = () => {
  return (
    <main>
      <AuthContextProvider>
      <div className="main__container ">
        {/* {/* <div className="hero_container"> */}
        <Navbar />
        <ToastContainer className='toast-message' autoClose={500} newestOnTop={true} theme="dark"/>

      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/tvshow/:id" element={<TvShowDetails/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/emotionelixir" element={<EMOTION/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/savedshows" element={<SavedShows/>}/>
        </Routes>
      {/* <div className="next_container ">
        <div className="other-section hero_container">
          <Intheator />
        </div>
      </div> */}
      </AuthContextProvider>
    </main>
  );
};

export default App;
