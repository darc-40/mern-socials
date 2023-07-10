
import { Navigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Header from "../components/Header";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Homepage() {

  
  return (
    <div>
      <Header  />
      <ToastContainer />
      
    </div>
  );
}

export default Homepage;
