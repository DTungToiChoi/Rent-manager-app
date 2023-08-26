import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { useUserContext } from "../context/UserContext";
import '../style.css'

const Chat = (props) => {
  //const { data } = props.currentUser;
  const {selectedUser} = useUserContext();

  //console.log("Chat selected User: " + selectedUser.message)

  return (
    <div className="chat">
      <div className="chatInfo">
        {<span></span>}
        <div className="chatIcons">
          {/* <img src={Cam} alt="" />
          <img src={Add} alt="" /> */}
          <img src={More} alt="" />
        </div>
      </div>
      <Messages selectedUser={selectedUser} />
      <Input selectedUser={selectedUser}/>
    </div>
  );
};

export default Chat;
