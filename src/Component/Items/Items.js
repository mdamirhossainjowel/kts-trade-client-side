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
    <div className="border-2 border-cyan-700 rounded-2xl">
      <img src={Image} alt="" />
      <h1>{ItemName}</h1>
      <h1>{description}</h1>
      <h1>{seller}</h1>
      <h1>{price}</h1>
      <h1>{quantity}</h1>
      <button onClick={handleManage} className="bg-red-500 p-3 rounded mb-2">
        Details
      </button>
    </div>
  );
};

export default Items;
