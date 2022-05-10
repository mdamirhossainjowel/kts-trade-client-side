import React from "react";
import banner from "../../../Utilities/Images/air pod/airpod1.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className=" flex lg:flex-row flex-col ">
        <div className="mr-2 p-5 order-2 lg:order-1 ">
          <h1 className="text-3xl mt-24 mb-3">KTS Trade</h1>
          <p className="mb-3">
            Authentic Products are availabale here. 100% Guranted product. We
            give our clients full gurantee or warenty <br /> for more visit our
            facebook page.
          </p>
          <button className="bg-cyan-300 p-3 rounded mb-2">Facebook</button>
        </div>
        <div className="order-1 lg:order-2">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
