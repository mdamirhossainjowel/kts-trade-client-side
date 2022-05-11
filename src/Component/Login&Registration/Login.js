import React, { useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../_firebase.init";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [user, loading] = useAuthState(auth);
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  // const [updatePassword] = useUpdatePassword(auth);
  // // const handleNameBlur = (e) => {
  // //   setName(e.target.value);
  // // };
  // const [massage, setMassage] = useState("");
  if (loading) {
    return <h1 className="text-2xl text-center mb-10"> Loading....... </h1>;
  }
  const handleEmailBlur = (e) => {
    setemail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setpassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  // const resetPassword = () => {
  //   const result = updatePassword(email);
  //   setMassage(result);
  // };

  return (
    <div className="lg:w-1/2 mx-auto text-center mb-5 bg-slate-100 border-2 p-5">
      <form onSubmit={handleSubmit}>
        <input
          className="p-2 mb-3 border-2 rounded lg:w-1/2"
          type="text"
          name="email"
          onBlur={handleEmailBlur}
          placeholder="Enter Your Email"
        />
        <br />

        <br />
        <input
          className="p-2 mb-3 border-2 rounded lg:w-1/2"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          placeholder="Password"
        />
        <br />
        <input
          className="p-2 mb-3 bg-cyan-300 rounded "
          type="submit"
          value="Login"
        />
        <br />
        <Link to="/register" className="underline ">
          create new account?
        </Link>
      </form>
      <div className="lg:w-1/2 mx-auto text-center my-3">
        <p>---------------------or---------------------</p>
      </div>
      <div className="lg:w-1/2 mx-auto text-center">
        <button
          className="bg-cyan-300 p-3 rounded mb-2"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
