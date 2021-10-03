import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SidebarChat from "./SidebarChat";
import { auth, db } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "./features/userSlice";

export default function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((item) => ({
          id: item.id,
          data: item.data(),
        }))
      );
    });
  }, []);

  const addRoom = () => {
    const room = prompt("Add new User");
    if (room.length === 0) {
      return alert("Please enter a valid user name");
    }
    db.collection("rooms").add({
      name: room,
    });
  };

  const signOut = () => {
    auth.signOut().then(() => dispatch(logout()));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar
          src={user.profilePic}
          onClick={signOut}
          className="logout"
        ></Avatar>
      </div>
      <div className="sidebar-header-right">
        <IconButton>
          <DonutLargeIcon></DonutLargeIcon>
        </IconButton>
        <IconButton>
          <ChatIcon></ChatIcon>
        </IconButton>
        <IconButton>
          <MoreVertIcon></MoreVertIcon>
        </IconButton>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-search-container">
          <SearchOutlinedIcon></SearchOutlinedIcon>
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar-chats">
        <div className="createChat">
          <h2 onClick={addRoom}>Add new User</h2>
        </div>
        <SidebarChat></SidebarChat>
        {rooms.map(({ id, data: { name } }) => {
          return <SidebarChat key={id} room={name} id={id}></SidebarChat>;
        })}
      </div>
    </div>
  );
}
