import React from "react";
// import banner from "../../../Utilities/Images/Common/bannar.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto flex ">
      <div className="w-1/2 h-96 border-2 mr-2">
        <h1 className="text-3xl text-center">KTS Trade</h1>
      </div>
      <div className="w-1/2 border-2">{/* <img src={banner} alt="" /> */}</div>
    </div>
  );
};

export default Banner;
