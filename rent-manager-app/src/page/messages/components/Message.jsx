import React, { useEffect, useRef } from "react";
import jwtDecode from "jwt-decode";


const Message = ({ message }) => {
  const ref = useRef();

  const accessToken = localStorage.getItem("accessToken");
  const decodedToken = jwtDecode(accessToken);
  const userId = decodedToken.sub;

  console.log("Message: " + message)
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const isSentByCurrentUser = false;

  const isSender = message && message.sender.id === userId ? true : false; 

  return (
    <div ref={ref} className={`message ${isSentByCurrentUser ? "sent" : "received"}`}>
      <div className="messageInfo">
        <img
          src={
            isSentByCurrentUser
              ? (message && message.receiver ? message.receiver.imageUrl : "")
              : (message && message.sender ? message.sender.imageUrl : "")
          }
          alt=""
        />
        {/* <span>just now</span> */}
      </div>
      <div className="messageContent">
        {message && message.content && message.content.map((contentItem) => (
          <p key={contentItem.id} className={`content ${contentItem.sendBy ? "sent" : "received"}`}>{contentItem.content}</p>
        ))}
      </div>
    </div>
  );
};

export default Message;
