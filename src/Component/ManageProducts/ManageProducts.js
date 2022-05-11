import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ManageProducts = () => {
  const { item_id } = useParams();
  const [product, setProduct] = useState([]);
  const [qty, setQty] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`https://vast-plateau-80261.herokuapp.com/product/${item_id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleDeliver = () => {
    if (product.quantity > 1) {
      const quantity = parseInt(product.quantity) - 1;
      const updatedQty = { quantity };
      fetch(`https://vast-plateau-80261.herokuapp.com/product/${item_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedQty),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      window.location.reload(true);
    }
  };
  const handleQty = (e) => {
    setQty(e.target.value);
  };
  const handleRestock = (e) => {
    let quantity = product.quantity;

    let addQty = parseInt(qty);

    if (addQty >= 1) {
      quantity = quantity + addQty;
      const updatedQty = { quantity };
      fetch(`https://vast-plateau-80261.herokuapp.com/product/${item_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedQty),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      window.location.reload(true);
    }
  };
  const handleDelete = (e) => {
    const proceed = window.confirm("Wants To Delete");
    if (proceed) {
      fetch(`https://vast-plateau-80261.herokuapp.com/product/${item_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      navigate("/inventory");
    }
  };
  return (
    <div className="container mx-auto my-10">
      <div className=" flex lg:flex-row flex-col ">
        <div className="lg:w-1/2 mx-auto lg:ml-20">
          <img src={product.Image} alt="" />
        </div>
        <div className="p-5 lg:w-1/2">
          <h1 className="text-2xl my-2">Product: {product.ItemName}</h1>
          <h1 className="text-xl my-2">Description: {product.description}</h1>
          <h1 className="text-xl my-2">Seller: {product.seller}</h1>
          <h1 className="text-xl my-2">Price: {product.price}</h1>
          <h1 className="text-xl my-2">Quantity: {product.quantity}</h1>
        </div>
      </div>
      <div className="lg:w-1/2 mx-auto mt-5 flex flex-col">
        <button
          onClick={() => {
            handleDeliver();
          }}
          className="btn bg-cyan-300 p-3 rounded mb-5"
        >
          Delivered
        </button>
        <input
          type="text"
          className="p-2 mb-5"
          name="restock"
          placeholder="Restock Item"
          onChange={handleQty}
        />
        <button
          onClick={() => {
            handleRestock();
          }}
          className="btn bg-cyan-300 p-3 rounded mb-5"
        >
          Restock
        </button>
        <button
          onClick={() => {
            handleDelete();
          }}
          className="btn bg-cyan-300 p-3 rounded"
        >
          Delete This Item
        </button>
      </div>
    </div>
  );
};

export default ManageProducts;
