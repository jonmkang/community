import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Login from '../Login/Login';

export default function NavBar({ isLoggedIn }) {
    const location = useLocation();
    console.log(isLoggedIn);

    const [renderLoginForm, toggleLoginForm] = useState(false);

    if(isLoggedIn) {
         return (
        <div class="nav-bar">
          <Link class={`link ${location.pathname === "/" ? "active" : ''}`}  to="/">Home</Link>
          <Link class={`link ${location.pathname === "/profile" ? "active" : ''}`} to="/profile">My Profile</Link>
          <Link class={`link ${location.pathname === "/community" ? "active" : ''}`} to="/community">Community</Link>
        </div>
        )
    }

    return (
        <div class="nav-bar">
            <Link class="link" to="/">Community</Link>
            <Login/>
        </div>
    )
}