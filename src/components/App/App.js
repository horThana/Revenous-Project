import React,{useState, useEffect} from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import businesses from './mockData';

// const business = {
//   imageSrc:
//     "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
//   name: "MarginOtto Pizzeria",
//   address: "1010 Paddington Way",
//   city: "Bordertown",
//   state: "NY",
//   zipCode: "10101",
//   category: "Italian",
//   rating: 4.5,
//   reviewCount: 90,
// };

// const businesses = [business, business, business, business, business, business];

const App = () => {
  const [business, setBusinesses] = useState([]);
  
  useEffect(() => {
      fetchBusinesses();
  }) 

  const fetchBusinesses = async () => {
    try{
      const response = await axios.get('API_URL');
      setBusinesses(response.data.businesses);
    }catch(error) {
      console.log(error);
    }
  }


  return (
    <div className={styles.App}>
      <h1>ALL Ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
