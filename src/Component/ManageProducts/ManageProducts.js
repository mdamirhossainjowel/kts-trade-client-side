import React from "react";
import { useParams } from "react-router-dom";

const ManageProducts = () => {
  const { item_id } = useParams();
  return (
    <div>
      <h1>Hello {item_id}</h1>
      <button>Deliverd </button>

      <form>
        <input type="text" placeholder="Restock Item" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ManageProducts;
