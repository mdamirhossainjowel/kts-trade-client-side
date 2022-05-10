import React from "react";
import { useNavigate } from "react-router-dom";

const Items = (props) => {
  const { _id, ItemName, Image, quantity, description, price, seller } =
    props.product;

  const navigate = useNavigate();
  const handleManage = () => {
    navigate("/items/" + _id);
  };
  return (
    <div className="border-2 border-cyan-700 rounded-2xl p-3">
      <img className="rounded-xl" src={Image} alt="" />
      <h1 className="text-xl my-2">Product: {ItemName}</h1>
      <h1 className="text-sm my-2">Description: {description}</h1>
      <h1 className=" my-2">Seller: {seller}</h1>
      <h1 className=" my-2">Price: {price}</h1>
      <h1 className=" my-2">Quantity{quantity}</h1>
      <div className="text-center">
        <button onClick={handleManage} className="bg-cyan-300 p-3 rounded mb-2">
          Details
        </button>
      </div>
    </div>
  );
};

export default Items;
