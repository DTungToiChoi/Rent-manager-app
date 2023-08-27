import React, { useContext, useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import '../style.css'

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { setSelectedUser } = useUserContext();


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

  const handleSelect = async (user) => {
    try {
      const token = localStorage.getItem("accessToken");
      const userId = user.id; // Lấy userId từ thông tin user
  
      // Gọi API để lấy thông tin tin nhắn với userId
      const response = await fetch(`http://localhost:8080/user/message-chat/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
  
        setSelectedUser(data);  
        // Hiển thị thông tin tin nhắn trên giao diện
        console.log("Message data:", data);
        // Đoạn code hiển thị thông tin data lên giao diện (thay console.log bằng phần hiển thị thực tế)
      } else {
        console.error("Error fetching message data");
        // Xử lý lỗi khi gọi API không thành công
      }
    } catch (error) {
      console.error("Error:", error);
      // Xử lý lỗi nếu có lỗi xảy ra trong quá trình gọi API
    }
  }

  return (
    <div className="chats">
      {chats.map((chat, index) => (
        <div className="userChat" key={index} onClick={() => handleSelect(chat)}>
          <img
          src={chat.imageUrl}
          alt="User Avatar"
          style={{ maxWidth: '50px', maxHeight: '75px' }}
        />
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
