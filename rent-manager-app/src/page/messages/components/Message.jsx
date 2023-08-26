import React, { useEffect, useRef } from "react";
import jwtDecode from "jwt-decode";
import "../style.css";

const Message = ({ message, scrollToLast }) => {
  const ref = useRef();

  const accessToken = localStorage.getItem("accessToken");
  const decodedToken = jwtDecode(accessToken);
  const userId = decodedToken.sub;

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [message]);

  return (
    <div>
      <div className="messageContainer">
        {message &&
          message.content &&
          message.content.map((contentItem) => {
            const isSentByCurrentUser = userId == message.sender.id ? (contentItem.sendBy ? false : true) : (contentItem.sendBy ? true : false);
            return (
              <p
                key={contentItem.id}
                className={`${isSentByCurrentUser ? "sent" : "received"}`}
              >
                {contentItem.content}
              </p>
            );
          })}
        <div ref={ref} />
      </div>
    </div>
  );
};

export default Message;
