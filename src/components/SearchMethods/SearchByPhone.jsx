//React Core
import React, { useState } from "react";
import { Link } from "react-router-dom";

//Styling
import loginImgC from "../../assets/loginImgC.svg";


export default function SearchByPhone(props) {

  const [query, setQuery] = useState("");

  return (
    <div className="container" >

     <h2>View All Packages</h2>

        <div className="content">
          <div className="image">
             <img src={loginImgC} alt="truck" />
          </div>

        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Enter Your Phone Number</label>
            <input placeholder="Enter your phone number here" value={query} onChange={
              (event) => {
                if (event.target.value) {
                  props.onSearch(event.target.value);
                }
                setQuery(event.target.value)
              }
              } />
          </div>
        </div>

      </div>
      
    </div>
  );
}


