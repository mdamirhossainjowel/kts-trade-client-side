import React from "react";

import useProducts from "../../../useHooks/useProducts/useProducts";

const MostSoldProducts = () => {
  const [products] = useProducts();
  const newpro = products?.slice(0, 1);

  return (
    <div className="container mx-auto mt-5 mb-10">
      <h1 className="text-3xl text-center mb-10 underline">
        Most Sold Products
      </h1>
      {newpro?.map((product) => (
        <div key={product._id} className=" flex lg:flex-row flex-col ">
          <div className="lg:w-1/2 mx-auto lg:ml-20">
            <img src={product.Image} alt="" />
          </div>
          <div className="p-5 lg:w-1/2">
            <h1 className="text-2xl my-2">Product: {product.ItemName}</h1>
            <h1 className="text-xl my-2">
              Description: {product.description.slice(0, 200)}
            </h1>
            <h1 className="text-xl my-2">Seller: {product.seller}</h1>
            <h1 className="text-xl my-2">Price: {product.price}</h1>
            <h1 className="text-xl my-2">Quantity{product.quantity}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostSoldProducts;
