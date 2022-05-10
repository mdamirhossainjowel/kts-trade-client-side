import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../ContactUs/Contact";
import Inventoryitems from "../InventoryItems/Inventoryitems";
import MostSoldProducts from "../MostSoldProducts/MostSoldProducts";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventoryitems></Inventoryitems>
      <MostSoldProducts></MostSoldProducts>
      <Contact></Contact>
    </div>
  );
};

export default Home;
