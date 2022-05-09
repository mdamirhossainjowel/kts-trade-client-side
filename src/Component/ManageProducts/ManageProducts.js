import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ManageProducts = () => {
  const { item_id } = useParams();
  const [product, setProduct] = useState([]);

  fetch(`http://localhost:5000/product/${item_id}`)
    .then((res) => res.json())
    .then((data) => setProduct(data));

  const handleDeliver = (e) => {
    const deliverAmount = e.target.deliver.value;
    const remaing = product.quantity - deliverAmount;

    fetch(`http://localhost:5000/product/${item_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(remaing),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="container mx-auto text-center my-10">
      <div className="w-1/3 mx-auto border-2 border-cyan-700 rounded-2xl">
        <img src={product.Image} alt="" />
        <h1>{product.ItemName}</h1>
        <h1>{product.description}</h1>
        <h1>{product.seller}</h1>
        <h1>{product.price}</h1>
        <h1>{product.quantity}</h1>
      </div>
      <div className="w-1/2 mx-auto mt-5">
        <input
          type="text"
          className="mr-4 p-2"
          name="deliver"
          placeholder="Deliver Item"
        />
        <button
          onClick={() => {
            handleDeliver();
          }}
          className="btn mr-12 bg-red-500 p-3 rounded"
        >
          Deliver
        </button>
        <input
          type="text"
          className="mr-4 p-2"
          name="restock"
          placeholder="Restock Item"
        />
        <button className="btn bg-red-500 p-3 rounded">Restock</button>
      </div>
    </div>
  );
};

export default ManageProducts;
