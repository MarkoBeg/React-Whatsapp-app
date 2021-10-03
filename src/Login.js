import React from "react";
import { auth, google } from "./firebase";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

export default function Login() {
  const dispatch = useDispatch("");

  const Login = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(google)
      .then(({ data }) => {
        dispatch(login({ data }));
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/whatsapp-circle-1868968-1583132.png"
          alt=""
        />
        <button onClick={Login} className="login-btn">
          Login
        </button>
      </div>
    </div>
  );
}
