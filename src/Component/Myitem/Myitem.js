import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../_firebase.init";
import Items from "../Items/Items";

const Myitem = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const userItem = user.uid;
  console.log(user);
  useEffect(() => {
    fetch("https://vast-plateau-80261.herokuapp.com/users", {
      method: "GET",
      headers: {
        authorization: `${userItem}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto">
      {products.length === 0 ? (
        <h1 className="text-4xl text-center mb-10"> No Item </h1>
      ) : (
        ""
      )}
      <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 mb-20">
        {products?.map((product) => (
          <Items key={product?._id} product={product}></Items>
        ))}
      </div>
    </div>
  );
};

export default Myitem;
