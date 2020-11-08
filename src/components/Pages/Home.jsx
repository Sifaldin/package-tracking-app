//React Core

import React, { useState, useEffect } from "react";


//Styling
import "../../styles/home.css";
// import "../../styles/";
import SearchByID from "../login/SearchByID";
import SearchByPhone from "../login/SearchByPhone";
import Parcel from '../shared/Parcel';

function getParcelById(parcels, id) {
  console.log(parcels, id)
  return parcels.filter(element => element.parcel_id === id);
}

function getParcelByPhone(parcels, num) {
  return parcels.filter(element => element.user_phone.startsWith(num));
}



export default function Home() {

  const [parcels, setParcels] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);



  const fetchItems = async () => {
    const data = await fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840');

    const items = await data.json();
    setParcels(items);
   // setResults(items);
  };

  return (




    <div className="homeContainer">

      <SearchByPhone onSearch={(phoneNumber) => {
        setResults(getParcelByPhone(parcels, phoneNumber));
      }} />


      <SearchByID onSearch={(id) => {
        setResults(getParcelById(parcels, id));
      }} />
      {
        results.map((parcel, index) => <Parcel key={index} parcel={parcel} />)
      }

    </div>


  );
}
