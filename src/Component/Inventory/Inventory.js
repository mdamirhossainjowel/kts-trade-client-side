import React from "react";
import { Link } from "react-router-dom";
import Inventoryitems from "../Home/InventoryItems/Inventoryitems";

const Inventory = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Stocked Items</h1>
      <Inventoryitems></Inventoryitems>
      <div className="text-center mb-5">
        <Link className="bg-red-500 p-3 rounded" to="/additems">
          Add New Items
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
