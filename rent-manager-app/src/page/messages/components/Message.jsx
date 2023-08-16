import React, { useEffect, useRef } from "react";

const Message = ({ message }) => {
  //const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  // Mock data for the current user and chat user
  const mockCurrentUser = {
    uid: "user123",
    photoURL: "https://example.com/avatar.jpg",
  };

  const mockChatUser = {
    photoURL: "https://example.com/jane_avatar.jpg",
  };

  return (
    <div ref={ref} className={`message`}>
      <div className="messageInfo">
        <img
          src={
            message.senderId === mockCurrentUser.uid
              ? mockCurrentUser.photoURL
              : mockChatUser.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
