import React, { useState, useEffect } from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useUserContext } from "../context/UserContext";

const Input = ({ selectedUser }) => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const accessToken = localStorage.getItem("accessToken");
  const decodedToken = jwtDecode(accessToken);
  const userId = decodedToken.sub;
  const { setSelectedUser } = useUserContext();

  const [messages, setMessages] = useState([]);
  
  let id = null;

  if (selectedUser) {
    const selectedUserId = selectedUser.sender.id;
    if (userId == selectedUser.sender.id) {
      id = selectedUser.receiver.id;
    } else {
      id = selectedUser.sender.id;
    }
  }
  
  useEffect(() => {
    // Gọi API để lấy thông tin tin nhắn với userId khi messages thay đổi
    const fetchMessageData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/user/message-chat/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        if (response.ok) {
          const data = await response.json();
  
          setSelectedUser(data);  
        } else {
          console.error("Error fetching message data");
        }
      } catch (error) {
        console.error("Error fetching message data:", error);
      }
    };

    fetchMessageData();
  }, [messages, id, accessToken, setSelectedUser]);
  
  const handleSend = async () => {
    const sendMessageData = {
      id: 1,
      content: text,
      sentAt: new Date(),
      read: false,
      sendBy: false,
    };

    try {
      await axios.post(`http://localhost:8080/user/message-chat/${id}`, sendMessageData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const newMessage = {
        id: sendMessageData.id,
        text: sendMessageData.content,
        senderId: 1,
        date: sendMessageData.sentAt,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      setText("");
      setImg(null);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
