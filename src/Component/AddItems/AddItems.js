import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../_firebase.init";

const AddItems = () => {
  const [user] = useAuthState(auth);
  console.log(user.uid);
  const handleadditem = (e) => {
    e.preventDefault();
    const ItemName = e.target.item.value;
    const Image = e.target.image.value;
    const description = e.target.description.value;
    const seller = e.target.seller.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const userItem = user.uid;
    const product = {
      ItemName,
      Image,
      description,
      seller,
      price,
      quantity,
      userItem,
    };

    fetch("https://vast-plateau-80261.herokuapp.com/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    e.target.reset();
  };
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl mb-10">Add Item</h1>
      <form onSubmit={handleadditem}>
        <input
          className="w-60 p-3 mb-3"
          type="text"
          name="item"
          placeholder="Item Name"
        />
        <br />
        <input
          className="w-60 p-3 mb-3"
          type="text"
          name="image"
          placeholder="Image"
        />
        <br />
        <textarea
          className="w-60 p-3 mb-3"
          type="text"
          name="description"
          placeholder="Description"
        />
        <br />
        <input
          className="w-60 p-3 mb-3"
          type="text"
          name="seller"
          placeholder="Seller"
        />
        <br />
        <input
          className="w-60 p-3 mb-3"
          type="text"
          name="price"
          placeholder="Price"
        />
        <br />
        <input
          className="w-60 p-3 mb-3"
          type="text"
          name="quantity"
          placeholder="Quantity"
        />
        <br />
        <input className="bg-cyan-300 p-3 mb-3 rounded" type="Submit" />
        <br />
      </form>
    </div>
  );
};

export default AddItems;
