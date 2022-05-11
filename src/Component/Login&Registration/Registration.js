import React, { useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const [CPassword, setCpassword] = useState("");
  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [user] = useAuthState(auth);
  let navigate = useNavigate();

  let location = useLocation();
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  let from = location.state?.from?.pathname || "/";
  // // const handleNameBlur = (e) => {
  // //   setName(e.target.value);
  // // };

  if (user) {
    navigate(from, { replace: true });
  }
  const handleEmailBlur = (e) => {
    setemail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setpassword(e.target.value);
  };
  const handleCPasswordBlur = (e) => {
    setCpassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Password === CPassword) {
      createUserWithEmailAndPassword(Email, Password);
    } else {
      alert("Both Password Should Be Same");
    }
  };
  return (
    <div className="lg:w-1/2 mx-auto bg-slate-100 text-center mb-5 border-2 p-5">
      <form onSubmit={handleSubmit}>
        <input
          className="p-2 mb-3 border-2 rounded lg:w-1/2"
          type="text"
          name="email"
          onBlur={handleEmailBlur}
          placeholder="Enter Your Email"
        />
        <br />
        <input
          className="p-2 mb-3 border-2 rounded lg:w-1/2"
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />
        <br />
        <input
          className="p-2 mb-3 border-2 rounded lg:w-1/2"
          type="text"
          name="address"
          placeholder="Enter Your Address"
        />
        <br />
        <input
          className="p-2 mb-3 border-2 rounded lg:w-1/2"
          type="text"
          name="cell"
          placeholder="Enter Your Cell No"
        />
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
          className="p-2 mb-3 border-2 rounded lg:w-1/2"
          type="password"
          name="confirmpassword"
          onBlur={handleCPasswordBlur}
          placeholder="Confirm Password"
        />
        <br />
        <input
          className="p-2 mb-3 bg-cyan-300 rounded"
          type="submit"
          value="Register"
        />
        <br />
        <Link to="/login" className="underline ">
          already have a account?
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
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default Registration;
