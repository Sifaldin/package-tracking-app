//React
import React, { useState } from "react";
import { Link } from "react-router-dom";

//Styling
import loginImgC from "../../assets/loginImgC.svg";
import "../../styles/login.css";



export default function SearchByID({ onSearch }) {

  const [query, setQuery] = useState("");

  return (

    <div className="container">

     <h2>View One Package</h2>

      <div className="content">

          <div className="image">
             <img src={loginImgC} alt="truck" />
          </div>

         <div className="form">
          <div className="form-group">
            <label htmlFor="username">Enter Your Parcel ID</label>
            <input placeholder="Enter your parcel ID here" value = {query} onChange={
              (event) => {
                if (event.target.value) {
                  onSearch(event.target.value);
                }
                setQuery(event.target.value)
              }
              }/> 
          </div>
         </div>

      </div>

    </div>
  );
}
