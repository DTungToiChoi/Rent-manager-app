import React, { useState } from "react";

const Search = (props) => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  //const { currentUser } = props.currentUser;

  const handleSearch = () => {
    // Simulate searching for a user based on username
    // Replace this with your actual search logic
    if (username === "john") {
      setUser({ displayName: "John Doe", photoURL: "john-avatar.jpg" });
      setErr(false);
    } else {
      setUser(null);
      setErr(true);
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  const handleSelect = () => {
    // Simulate handling user selection
    // Replace this with your actual logic to start a chat
    console.log("Selected user:", user);
    setUser(null);
    setUsername("");
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Tìm kiếm"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>Không tìm thấy người dùng</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
