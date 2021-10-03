import React, { useState, useEffect } from "react";
import "./Chat.css";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";
import Messages from "./Messages";
import { db } from "./firebase";
import { selectRoomName, selectRoomId } from "./features/appSlice";
import firebase from "firebase";
import { selectUser } from "./features/userSlice";

export default function CheatHeader() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const roomId = useSelector(selectRoomId);
  const roomName = useSelector(selectRoomName);
  const [messages, setMessages] = useState([]);
  const [random, setRandom] = useState("");

  useEffect(() => {
    if (roomId)
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((item) => ({
              id: item.id,
              data: item.data(),
            }))
          )
        );
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      email: user.email,
    });

    setInput("");
  };

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 1000));
  }, []);

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${random}.svg`}
        ></Avatar>
        <div className="chat-info">
          <h3>{roomName}</h3>
          <p>{messages?.timestamp || "Last seen"}</p>
        </div>
        <div className="chat-icons">
          <IconButton>
            <SearchOutlinedIcon></SearchOutlinedIcon>
          </IconButton>
          <IconButton>
            <AttachFileIcon></AttachFileIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <Messages></Messages>
        {messages.map(({ id, data: { message, timestamp, email } }) => {
          return (
            <Messages
              id={id}
              key={id}
              message={message}
              email={email}
              timestamp={timestamp}
            ></Messages>
          );
        })}
      </div>
      <div className="chat-footer">
        <EmojiEmotionsIcon></EmojiEmotionsIcon>
        <form>
          <input
            type="text"
            placeholder={`Send message ${user.name}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="btn-footer"
            onClick={sendMessage}
            disabled={!input}
          >
            Send Message
          </button>
        </form>
        <MicIcon></MicIcon>
      </div>
    </div>
  );
}
