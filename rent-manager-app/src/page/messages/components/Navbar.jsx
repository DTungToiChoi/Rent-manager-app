import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const currentUser = props.currentUser || {}; // Mặc định là một đối tượng trống nếu currentUser là null

  return (
    <div className='navbar'>
      <Link to="/profile" style={{ color: 'white' }}>
        <span className="logo">{currentUser.name}</span>
      </Link>
      <div className="user">
        <img src={currentUser.imageUrl} alt="User Avatar" />
        <span></span>
        <Link to="/">
          <button
            style={{
              padding: "3px 5px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Trang chủ
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
