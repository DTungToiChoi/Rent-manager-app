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
      <div className="chat-messages p-4">
        {message &&
          message.content &&
          message.content.map((contentItem) => {
            const isSentByCurrentUser = userId == message.sender.id ? (contentItem.sendBy ? false : true) : (contentItem.sendBy ? true : false);
            return (
              <p
                key={contentItem.id}
                className={`${isSentByCurrentUser ? "chat-message-right pb-4" : "pb-4"}`}
              >
                {isSentByCurrentUser ?
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 me-3" style={{backgroundColor : "black"}}>
                    <div className="font-weight-bold mb-1">B</div>
                    {contentItem.content}
                  </div>
                  :
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 me-3">
                    <div className="font-weight-bold mb-1">A</div>
                    {contentItem.content}
                  </div>
                }
              </p>
            );
          })}
        <div ref={ref} />
      </div>
    </div>
  );
};

export default Message;