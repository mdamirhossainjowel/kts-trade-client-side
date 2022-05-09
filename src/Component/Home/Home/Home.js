import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../ContactUs/Contact";
import Dealer from "../Dealer/Dealer";
import Inventoryitems from "../InventoryItems/Inventoryitems";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventoryitems></Inventoryitems>
      <Dealer></Dealer>
      <Contact></Contact>
    </div>
  );
};

export default Home;
