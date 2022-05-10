import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../useHooks/useProducts/useProducts";
import Items from "../../Items/Items";

const Inventoryitems = () => {
  const [products] = useProducts();
  const newpro = products?.slice(0, 6);
  return (
    <div className="container mx-auto mt-5 mb-10">
      <h1 className="text-center text-3xl mt-10 mb-5">Stored Products</h1>
      <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
        {newpro?.map((product) => (
          <Items key={product._id} product={product}></Items>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link className="bg-cyan-300 p-3 rounded" to="/inventory">
          Manage Inventory
        </Link>
      </div>
    </div>
  );
};

export default Inventoryitems;
