import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import '../style.css'
import { UserProvider } from "../context/UserContext";

const Home = (props) => {
  const [messages, setMessages] = React.useState([]);
  return (
    <UserProvider>
    <div className='home'>
      <div className="container" >
        <Sidebar {...props}/>
        <Chat messages={messages} setMessages={setMessages} {...props}/>
      </div>
    </div>
    </UserProvider>
  )
}

export default Home