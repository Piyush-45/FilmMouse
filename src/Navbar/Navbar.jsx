import React, { useContext } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import searh from "../images/search1.svg";
import { UserAuth } from "../../Context/Authcontext";
// import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate()
  const { user,logOut } = UserAuth()
  
  return (
    // Wrap the entire navbar in a container div
    <div className="navbar__container">
      <nav>
        <div className="navbar">
          <div className="navbar__logo">
            <p>
              Film<span>M</span>ouse
            </p>
          </div>
          <div className="nav__right">
            <div className="nav__list">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="inhall">Movies</Link>
                </li>
                <li>
                  <Link to="/emotionelixir">Emotion Elixir</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  {user?(
                    <Link to="/account" className="btn btn--signup">
                    Saved Shows
                  </Link>
                  ):
                  (<Link to='./signUp' className="btn btn--signup">
                  Sign Up
                </Link>)}
                  {/* <Link to="/signUp">Sign Up</Link> */}
                </li>

                <li>
                  {user ? (
                    <Link
                      className="btn btn--login"
                      onClick={logOut}

                    >
                      Log Out
                    </Link>
                  ) : (
                    <Link to={'/login'}
                      className="btn btn--login"

                    >
                      Log In
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="search_container">
          <form className="input input--search">
            <img src={searh} alt="" className="search__icon" />
            <input
              type="text"
              className="nav__input"
              placeholder="Search Your Favourite movies or shows here..."
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
