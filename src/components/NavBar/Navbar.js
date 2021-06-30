import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function NavBar() {
      const location = useLocation();

    return (
        <div class="nav-bar">
          <Link class={`link ${location.pathname === "/" ? "active" : ''}`}  to="/">Home</Link>
          <Link class={`link ${location.pathname === "/profile" ? "active" : ''}`} to="/profile">My Profile</Link>
          <Link class={`link ${location.pathname === "/community" ? "active" : ''}`} to="/community">Community</Link>
        </div>
    )
}