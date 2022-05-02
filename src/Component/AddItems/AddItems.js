import React from "react";

const AddItems = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl mb-10">Add Item</h1>
      <form>
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
          name="item"
          placeholder="Image"
        />
        <br />
        <input
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
        <input className="bg-red-500 p-3 mb-3 rounded" type="Submit" />
        <br />
      </form>
    </div>
  );
};

export default AddItems;
