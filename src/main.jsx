import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import { BrowserRouter } from "react-router-dom";
// import { Auth0Provider } from "@auth0/auth0-react";
// import { AuthContextProvider } from "./Context/Authcontext";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <AuthContextProvider>
    
   
     <BrowserRouter>
      <App />
    </BrowserRouter>
   
);
