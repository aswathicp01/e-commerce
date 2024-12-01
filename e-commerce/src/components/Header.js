import React from 'react';
import { Link } from 'react-router-dom';

function Header({ user, onLogout }) {
  return (
    <header>
      <Link to="/" className="logo">ArtistHub</Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <button className="avatar-button">
              <img src={user.profilePicture ? URL.createObjectURL(user.profilePicture) : '/placeholder.svg'} alt={user.name} className="avatar" />
              {user.name}
            </button>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <a href="#" onClick={onLogout}>Logout</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

