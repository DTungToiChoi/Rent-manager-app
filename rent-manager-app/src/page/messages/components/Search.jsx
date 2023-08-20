import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userList, setUserList] = useState([]);
  const [err, setErr] = useState(false);
  const { setSelectedUser } = useUserContext();

  const handleSearch = async () => {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(`http://localhost:8080/user/message/${username}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data != null && data.length > 0) {
        setUserList(data);
        setErr(false);
      } else {
        setUserList([]);
        setErr(true);
      }
    } else {
      setUserList([]);
      setErr(true);
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  const handleSelect = async (user) => {
    try {
      const token = localStorage.getItem("accessToken");
      const userId = user.id; // Lấy userId từ thông tin user

      console.log(user.id)
  
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
        //console.log("Message data:", data);
        // Đoạn code hiển thị thông tin data lên giao diện (thay console.log bằng phần hiển thị thực tế)
      } else {
        console.error("Error fetching message data");
        // Xử lý lỗi khi gọi API không thành công
      }
    } catch (error) {
      console.error("Error:", error);
      // Xử lý lỗi nếu có lỗi xảy ra trong quá trình gọi API
    }
  
    setUserList(null);
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
      {userList && userList.length > 0 && (
        <div className="userList">
          {userList.map((user) => (
            <div className="userChat" key={user.name} onClick={() => handleSelect(user)}>
              <img src={user.imageUrl} alt="" />
              <div className="userChatInfo">
                <span>{user.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
