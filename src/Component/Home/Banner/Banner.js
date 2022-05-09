import React from "react";
import banner from "../../../Utilities/Images/Common/bannar.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className=" flex lg:flex-row flex-col ">
        <div className="w-1/2 h-96 border-2 mr-2 p-5 ">
          <h1 className="text-3xl mt-24">KTS Trade</h1>
          <p>
            Authentic Products are availabale here. 100% Guranted product. for
            more visit our facebook page.
          </p>
          <button className="bg-red-500 p-3 rounded mb-2">Facebook</button>
        </div>
        <div className="w-1/2 border-2">
          <img src={banner} alt="" />
        </div>
      </div>

      <h1 className="text-center text-xl mt-10 mb-5">Stored Products</h1>
    </div>
  );
};

export default Banner;
