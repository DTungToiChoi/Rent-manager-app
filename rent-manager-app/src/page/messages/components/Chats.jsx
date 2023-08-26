import React, { useContext, useEffect, useState } from "react";
import '../style.css'

const Chats = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        // Lấy access token từ local storage
        const accessToken = localStorage.getItem("accessToken");
        
        if (!accessToken) {
          console.log("Access token not found.");
          return;
        }

        const response = await fetch("http://localhost:8080/user/message", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          //console.log(data);
          setChats(data);
        } else {
          console.log("Error fetching chats:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  const handleSelect = (userInfo) => {
    //dispatch({ type: "CHANGE_USER", payload: userInfo });
  };

  return (
    <div className="chats">
      {chats.map((chat, index) => (
        <div className="userChat" key={index} onClick={() => handleSelect(chat)}>
          <img src={chat.imageUrl} alt="" />
          <div className="userChatInfo">
            <span>{chat.userName}</span>
            <p>{chat.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
