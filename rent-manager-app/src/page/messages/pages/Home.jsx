import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import '../style.scss'
const Home = (props) => {
  return (
    <div className='home'>
      {/* <Header authenticated={props.authenticated} currentUser={props.currentUser} onLogout={props.onLogout} /> */}
      <div className="container" >
        <Sidebar {...props}/>
        <Chat {...props}/>
      </div>
    </div>
  )
}

export default Home