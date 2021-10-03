import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            profilePic: user.photoURL,
          })
        );
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
        <Login></Login>
      ) : (
        <div className="app-body">
          <Sidebar></Sidebar>
          <Chat></Chat>
        </div>
      )}
    </div>
  );
}

export default App;
