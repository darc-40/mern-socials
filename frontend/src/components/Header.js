import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

function Header() {

  
  // const navigate = Navigate()
  // const logoutUser = async() => {
  //   await axios.post('/api/users/logout');
  //   navigate('login')
  //  }
     

  return (
    <div className="z-0 sticky p-4 bg-slate-100 flex justify-between items-center">
      <h1 className="text-2xl font-semibold tracking-wider ">
        {" "}
        <span className="text-4xl text-slate-700 p-1">H</span>ome
      </h1>
      <div className=" flex items-center space-x-4">
        
        <img
          className="h-12 w-12 object-cover rounded-full border border-spacing-2  border-slate-700 p-2"
          src="/images/SHAY.jpg"
          alt="img"
        />
        <button 
        
        className="rounded-md m-2 p-1 bg-slate-400 text-white uppercase tracking-tighter border border-spacing-2 border-slate-700">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
