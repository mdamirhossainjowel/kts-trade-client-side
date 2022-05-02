import React from "react";

const Login = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl mb-10">Login</h1>
      <form>
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

        <br />
        <input
          className="bg-red-500 p-3 mb-3 rounded"
          type="Submit"
          value="Login"
        />
        <br />
      </form>
    </div>
  );
};

export default Login;
