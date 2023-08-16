import React, { useState } from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";

const Input = ({ handleSend }) => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const handleImageChange = (e) => {
    setImg(e.target.files[0]);
  };

  const mockCurrentUser = {
    uid: "user123",
    displayName: "John Doe",
    photoURL: "https://example.com/avatar.jpg",
  };

  const mockChatData = {
    chatId: "chat123",
    user: {
      uid: "user456",
      displayName: "Jane Smith",
      photoURL: "https://example.com/jane_avatar.jpg",
    },
  };

  const handleMockSend = (text, img) => {
    // Mock sending logic
    console.log("Message sent:", text);
    console.log("Image:", img);

    // Reset input fields
    setText("");
    setImg(null);
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
          onChange={handleImageChange}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={() => handleSend(text, img)}>Send</button>
        {/* Uncomment below line to use mock sending */}
        {/* <button onClick={() => handleMockSend(text, img)}>Send (Mock)</button> */}
      </div>
    </div>
  );
};

export default Input;
