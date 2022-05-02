import React from "react";
import { Link } from "react-router-dom";
import Items from "../../Items/Items";

const Inventoryitems = () => {
  const products = [
    {
      id: 1,
      Name: "abc",
      Qty: 4,
      Descriptio: "HEhakaskahfdsljfdjfdlfhjsdf",
      Price: 8.5,
      Supplier: "Omuk",
    },
    {
      id: 2,
      Name: "dfbc",
      Qty: 4,
      Descriptio: "HEhakaskahfdsljfdjfdlfhjsdf",
      Price: 8.5,
      Supplier: "Omuk",
    },
    {
      id: 3,
      Name: "adfc",
      Qty: 4,
      Descriptio: "HEhakaskahfdsljfdjfdlfhjsdf",
      Price: 8.5,
      Supplier: "Omuk",
    },
    {
      id: 4,
      Name: "abxv",
      Qty: 4,
      Descriptio: "HEhakaskahfdsljfdjfdlfhjsdf",
      Price: 8.5,
      Supplier: "Omuk",
    },
    {
      id: 5,
      Name: "abxxsc",
      Qty: 4,
      Descriptio: "HEhakaskahfdsljfdjfdlfhjsdf",
      Price: 8.5,
      Supplier: "Omuk",
    },
    {
      id: 6,
      Name: "abxxsc",
      Qty: 4,
      Descriptio: "HEhakaskahfdsljfdjfdlfhjsdf",
      Price: 8.5,
      Supplier: "Omuk",
    },
  ];
  return (
    <div className="container mx-auto mt-5 mb-10">
      <div className="grid lg:grid-cols-3 gap-4 text-center grid-cols-1 ">
        {products.map((product) => (
          <Items key={product.id} product={product}></Items>
        ))}
      </div>

      {products.length === 6 ? (
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
