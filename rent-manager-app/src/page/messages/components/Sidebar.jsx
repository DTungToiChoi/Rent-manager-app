import React from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      
      <Navbar {...props}/>
      <Search {...props}/>
      <Chats {...props}/>
    </div>
  );
};

export default Sidebar;
