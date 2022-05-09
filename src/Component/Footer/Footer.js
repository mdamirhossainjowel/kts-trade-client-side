import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <div className="p-5 text-center">
        <h1 className="text-3xl text-white">Our Warehouses</h1>
        <div className=" w-1/2 mx-auto p-5 text-center grid lg:grid-cols-3 gap-4 grid-cols-1 ">
          <div className=" text-white">
            <h1 className="text-xl">Gulshan,Dhaka</h1>
            <h1>014568787</h1>
            <button className="bg-red-500 p-3 rounded mb-2">Location</button>
          </div>
          <div className="text-white">
            <h1 className="text-xl">Banani,Dhaka</h1>
            <h1>014568787</h1>
            <button className="bg-red-500 p-3 rounded mb-2">Location</button>
          </div>
          <div className="text-white">
            <h1 className="text-xl">Agrabad,Chittagong</h1>
            <h1>014568787</h1>
            <button className="bg-red-500 p-3 rounded mb-2">Location</button>
          </div>
        </div>
        <div>copyright@2022</div>
      </div>
    </div>
  );
};

export default Footer;
