import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../useHooks/useProducts/useProducts";
import Items from "../../Items/Items";

const Inventoryitems = () => {
  const [products] = useProducts();
  const newpro = products?.slice(0, 6);
  return (
    <div className="container mx-auto mt-5 mb-10">
      <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
        {newpro?.map((product) => (
          <Items key={product._id} product={product}></Items>
        ))}
      </div>

      {newpro?.length === 6 ? (
        <div className="text-center mt-5">
          <Link className="bg-red-500 p-3 rounded" to="/inventory">
            Manage Inventory
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Inventoryitems;
