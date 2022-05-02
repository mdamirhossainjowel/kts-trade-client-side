import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl mb-10">Registration</h1>
      <form>
        <input
          className="w-60 p-3 mb-3"
          type="text"
          name="item"
          placeholder="Enter Your Full Name"
        />
        <br />
        <input
          className="w-60 p-3 mb-3"
          type="text"
          name="item"
          placeholder="Phone Number"
        />
        <br />
        <input
          className="w-60 p-3 mb-3"
          type="text"
          name="item"
          placeholder="Email Address"
        />
        <br />
        <input
          className="w-60 p-3 mb-3"
          type="text"
          name="item"
          placeholder="Password"
        />
        <br />
        <input
          className="w-60 p-3 mb-3"
          type="text"
          name="item"
          placeholder="Confirm Password"
        />
        <br />

        <br />
        <input
          className="bg-red-500 p-3 mb-3 rounded"
          type="Submit"
          value="Register"
        />
        <br />
      </form>
      <div className="text-center mb-5">
        <Link className="underline text-xl text-blue-700" to="/login">
          Have already account?
        </Link>
      </div>
    </div>
  );
};

export default Registration;
