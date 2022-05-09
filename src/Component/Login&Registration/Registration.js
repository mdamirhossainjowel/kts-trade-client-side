import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../_firebase.init";
// import { Link } from "react-router-dom";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import {
//   useAuthState,
//   useCreateUserWithEmailAndPassword,
//   useSendEmailVerification,
//   useSignInWithGoogle,
// } from "react-firebase-hooks/auth";
// import auth from "../../_firebase.init";

const Registration = () => {
  const [Email, setemail] = useState("");
  const [Password, setpassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  // const [user] = useAuthState(auth);
  // let navigate = useNavigate();

  // let location = useLocation();
  // const [signInWithGoogle] = useSignInWithGoogle(auth);
  // const [sendEmailVerification] = useSendEmailVerification(auth);
  // let from = location.state?.from?.pathname || "/";
  // // const handleNameBlur = (e) => {
  // //   setName(e.target.value);
  // // };
  // if (user) {
  //   navigate(from, { replace: true });
  // }
  const handleEmailBlur = (e) => {
    setemail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setpassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(Email, Password);
  };
  return (
    <div className="w-1/2 mx-auto bg-gray-100 text-center">
      <form onSubmit={handleSubmit}>
        <input
          className="p-2 mb-3"
          type="text"
          name="email"
          onBlur={handleEmailBlur}
          placeholder="Enter Your Email"
        />{" "}
        <br />
        <input
          className="p-2 mb-3"
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />
        <br />
        <input
          className="p-2 mb-3"
          type="text"
          name="address"
          placeholder="Enter Your Address"
        />
        <br />
        <input
          className="p-2 mb-3"
          type="text"
          name="cell"
          placeholder="Enter Your Cell No"
        />
        <br />
        <input
          className="p-2 mb-3"
          type="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <input
          className="p-2 mb-3"
          type="password"
          name="confirmpassword"
          onBlur={handlePasswordBlur}
          placeholder="Confirm Password"
        />
        <br />
        <input className="p-2 mb-3" type="submit" value="Register" />
        <br />
      </form>
    </div>
  );
};

export default Registration;
