import React from "react";
import { useParams } from "react-router-dom";

const ManageProducts = () => {
  const { item_id } = useParams();
  return (
    <div className="container mx-auto text-center my-10">
      <h1>Hello {item_id}</h1>
      <button>Deliverd </button>
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
