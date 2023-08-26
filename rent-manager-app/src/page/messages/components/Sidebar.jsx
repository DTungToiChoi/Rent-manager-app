import React from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"
import '../style.css'

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
