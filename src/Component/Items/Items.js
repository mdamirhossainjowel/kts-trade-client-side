import React from "react";
import { useNavigate } from "react-router-dom";

const Items = (props) => {
  const { id, Name, Qty, Descriptio, Price, Supplier } = props.product;

  const navigate = useNavigate();
  const handleManage = () => {
    navigate("/items/" + id);
  };
  return (
    <div className="border-2 border-cyan-700 rounded-2xl">
      <h1>{Name}</h1>
      <h1>{Descriptio}</h1>
      <h1>{Supplier}</h1>
      <h1>{Price}</h1>
      <h1>{Qty}</h1>
      <button onClick={handleManage} className="border-2 border-black">
        Details
      </button>
    </div>
  );
};

export default Items;
