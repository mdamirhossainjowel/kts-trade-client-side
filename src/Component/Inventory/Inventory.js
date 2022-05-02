import React from "react";
import { Link } from "react-router-dom";
import Inventoryitems from "../Home/InventoryItems/Inventoryitems";

const Inventory = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Stocked Items</h1>
      <Inventoryitems></Inventoryitems>
      <Link to="/additems">Add New Items</Link>
    </div>
  );
};

export default Inventory;
