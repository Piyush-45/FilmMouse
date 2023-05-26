import React from "react";
import { useState } from "react";
import { UserAuth } from "../../Context/Authcontext";
import { useNavigate } from "react-router-dom";
import "./authentication.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // const notify = ()=> toast.success("wowo so easy")
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, user } = UserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
      // toast.success("logged in successfully"),
      // {
      //   className: "toast-message",
      // };
    } catch (err) {
      alert(err);
      // toast.warn("Wrong Crededntials");
    }
  };

  return (
    <div className="loginContainer">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="">Sign Up</h2>
          <br />
          <br />
          <span className="subtitle">Email:</span>
          <br />
          <input
          className="login-input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <span className="subtitle">PASSWORD:</span>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit" className="authentication-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
