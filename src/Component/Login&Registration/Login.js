import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../_firebase.init";

// import { Link, useLocation, useNavigate } from "react-router-dom";
// import {
//   useAuthState,
//   useSignInWithEmailAndPassword,
//   useSignInWithGoogle,
//   useUpdatePassword,
// } from "react-firebase-hooks/auth";
// import auth from "../../_firebase.init";

const Login = () => {
  // let navigate = useNavigate();
  // let location = useLocation();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  // const [user] = useAuthState(auth);
  // let from = location.state?.from?.pathname || "/";
  // const [signInWithGoogle, error1] = useSignInWithGoogle(auth);
  // const [updatePassword] = useUpdatePassword(auth);
  // // const handleNameBlur = (e) => {
  // //   setName(e.target.value);
  // // };
  // const [massage, setMassage] = useState("");
  const handleEmailBlur = (e) => {
    setemail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setpassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    console.log("succesfull");
  };
  // if (user) {
  //   navigate(from, { replace: true });
  // }
  // const resetPassword = () => {
  //   const result = updatePassword(email);
  //   setMassage(result);
  // };

  return (
    <div className="w-1/2 mx-auto bg-gray-100 text-center">
      <form onSubmit={handleSubmit}>
        <input
          className="p-2 mb-3"
          type="text"
          name="email"
          onBlur={handleEmailBlur}
          placeholder="Enter Your Email"
        />
        <br />

        <br />
        <input
          className="p-2 mb-3"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          placeholder="Password"
        />
        <br />
        <input className="p-2 mb-3" type="submit" value="Register" />
        <br />
      </form>
    </div>
  );
};

export default Login;
