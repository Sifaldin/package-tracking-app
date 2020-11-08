//React Core
import React from "react";

//Styling
import "../../styles/login.css";
import pkgImgC from "../../assets/pkgImgC.svg";

export default function Parcel({ parcel }) {

  const { id,
    status,
    eta,
    parcel_id,
    sender,
    verification_required,
    location_id,
    location_name,
    location_coordinate_latitude,
    location_coordinate_longitude,
    location_status_ok,
    user_phone,
    user_name,
    notes,
    last_updated } = parcel;

  return (

    <div className= "container">
          
            <h1>
              <span>#{id} </span>
              {user_name}
            </h1>

            <div className="image">
              <img src={pkgImgC} alt="truck" />
            </div>

            <p>Status: {status}</p>
            <p>Parcel_id: {parcel_id}</p>
            <p>Sender: {sender}</p>
            <p>ETA: {eta}</p>
            <p>Location: {location_name}</p>
            <p>notes: {notes}</p>
            <p>last updated: {last_updated} </p>
           
    </div>

  )

}