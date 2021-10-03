import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";
import { setRoomInfo } from "./features/appSlice";

export default function SidebarChat({ id, room }) {
  const [seed, setSeed] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000));
  }, []);

  return (
    <div
      className="sidebarChat"
      id={id}
      onClick={() => dispatch(setRoomInfo({ roomId: id, roomName: room }))}
    >
      <Avatar
        src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
      ></Avatar>
      <div className="sidebarChat-info">
        <h2>{room}</h2>
        <p>Last seen...</p>
      </div>
    </div>
  );
}
