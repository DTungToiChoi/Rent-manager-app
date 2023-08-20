import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";

const Messages = ({ selectedUser }) => {
  //const { data } = useContext(ChatContext);
  const realMessages = selectedUser ? selectedUser : null;
  //console.log("Real messages: ")


  return (
    <div className="messages">
      <Message message={realMessages} />
    </div>
  );
};

export default Messages;
