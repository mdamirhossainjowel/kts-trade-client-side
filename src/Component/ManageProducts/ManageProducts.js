import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ManageProducts = () => {
  const { item_id } = useParams();
  const { product, setProduct } = useState([]);

  fetch(`http://localhost:5000/product/${item_id}`)
    .then((res) => res.json())
    .then((data) => setProduct(data));

  return (
    <div className="container mx-auto text-center my-10">
      <div className="w-1/2 mx-auto">
        <h1>{product?.Name}</h1>
        <h1>{product?.Seller}</h1>
      </div>

      <div className="w-1/2 mx-auto">
        <form>
          <input type="text" placeholder="Restock Item" />
          <input className="btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ManageProducts;
