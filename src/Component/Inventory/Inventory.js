import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../useHooks/useProducts/useProducts";
import Items from "../Items/Items";

const Inventory = () => {
  const [products] = useProducts();
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center mb-3">Stocked Items</h1>
      <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
        {products?.map((product) => (
          <Items key={product._id} product={product}></Items>
        ))}
      </div>
      <div className="text-center  my-5">
        <Link className="bg-red-500 p-3 rounded" to="/additems">
          Add New Items
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
