import React from "react";

const Dealer = () => {
  return (
    <div className="w-1/3 mx-auto text-center my-12">
      <h1 className="text-4xl mb-5">Our Dealer</h1>
      <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
        <h1 className="text-2xl rounded-full border-2 bg-blue-300 p-5">
          Lenevo
        </h1>
        <h1 className="text-2xl rounded-full border-2 bg-blue-300 p-5">QKZ</h1>
        <h1 className="text-2xl rounded-full border-2 bg-blue-300 p-5">TWS</h1>
      </div>
    </div>
  );
};

export default Dealer;
