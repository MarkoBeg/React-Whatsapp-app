import React from "react";
import Avatar from "@mui/material/Avatar";
import "./Messages.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

export default function Messages({ timestamp, message }) {
  const user = useSelector(selectUser);

  return (
    <div className="messages">
      <Avatar src={user.profilePic}></Avatar>
      <div className="message-info">
        <h4 className="message-name">
          {user.name}
          <span className="message-timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <div
          className={`message-email-section ${user.name && "chat-reciever"}`}
        >
          <span className="message-email">{user.email}</span>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
