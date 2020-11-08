//React Core
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import Parcel from "../shared/Parcel";


// Styling
import "../../styles/results.css";



export default function Results({ match, information }) {


  

  const [parcels, setParcels] = useState([]);

  
    useEffect(() => {
      fetchItems();
    }, []);

  

  const fetchItems = async () => {
    const data = await fetch( 'https://my.api.mockaroo.com/orders.json?key=e49e6840' );

    const items = await data.json();
    setParcels (items.items);
  };

  return ( 
    <div className= "result-page">
        
          {parcels}
         
        </div>
   
  )
 
  


}

// const query = new RegExp(match.params.query, "i");
  //  const results = data.filter((item) => item.title.match(query));
  // // const results = data.filter((item) => item.user_phone.match());
  // // const multipleParcels = results.map((item) => (<Parcel key={item.user_phone} data={item} />));
  


  // const [status, setStatus] = useState(0);

  // const [information, setInformation] = useState([]);
  // 

  



  // //const [parcel, setParcels] = useState();


  // return (

  //   <div>

  //     <div>
  //       {status === 0 ? <p>Loading...</p> : null}
  //       {status === 1 ? <Parcel  data={information[0]} /> : null}
  //       {status === 2 ? <p>Sorry we cannot find data</p> : null}
  //     </div>

  //   </div>
  // )


  // const query = new RegExp(match.params.query, "i");
  // const results = information.filter((item) => item.title.match(query));

  
  // const query = new RegExp(match.params.query, "i");
  // const results = information.filter((item) => item.user_phone.match(query));


  // //Hooks
  // const [parcels, setParcels] = useState(displayParcels("user_phone", results))

  // function displayParcels(key, data) {
  
  //    return   data.map((item) => (<Parcel key={item.id} data={item} />));
    
  // }







  // useEffect(() => {
  //   fetchItems();
  // }, []);

  // const [parcels, setParcels] = useState({});

  // const fetchItems = async () => {
  //   const data = await fetch (
  //     'https://my.api.mockaroo.com/orders.json?key=e49e6840'

  //   );
  //   const parcels = await fetchItems.json();
    
  //   setItems(parcels)
  // }
  


  // return (
  //   <div className= "result-page">
      
  //     {parcels}

     
  //   </div>
  // )
  




   // const results = information.filter((item) => item.title.match(query));

  
  // const query = new RegExp(match.params.query, "i");
  // const results = information.filter((item) => item.user_phone.match());


  //Hooks
  // const [parcels, setParcels] = useState(displayParcels("user_phone", results))

  // function displayParcels(key, data) {
  
  //   return   data.map((item) => (<Parcel key={item.id} data={item} />));
    
  // }
  

  // return (
  //     <div className= "result-page">
        
  //       {parcels}
       
  //    </div>
  //   )