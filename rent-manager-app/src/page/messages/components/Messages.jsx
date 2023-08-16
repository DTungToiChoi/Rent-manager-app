import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";

const Messages = () => {
  //const { data } = useContext(ChatContext);

  // Dữ liệu giả mạo cho tin nhắn
  const mockMessages = [
    { id: 1, content: "Xin chào!", sender: "user1" },
    { id: 2, content: "Chào bạn!", sender: "user2" },
    { id: 3, content: "Có gì mới không?", sender: "user1" },
    { id: 4, content: "Không có gì đặc biệt.", sender: "user2" },
  ];

  return (
    <div className="messages">
      {mockMessages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
