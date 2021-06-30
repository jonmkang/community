import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, useLocation, useContext } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ProfilePage from './pages/ProfilePage/Profilepage';
import Community from './pages/Community/Community';

function App() {
  const location = useLocation();

  return (
    <div className="App">
        <div class="nav-bar">
          <Link class={`link ${location.pathname === "/" ? "active" : ''}`}  to="/">Home</Link>
          <Link class={`link ${location.pathname === "/profile" ? "active" : ''}`} to="/profile">My Profile</Link>
          <Link class={`link ${location.pathname === "/community" ? "active" : ''}`} to="/community">Community</Link>
        </div>
        
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route path="/profile"><ProfilePage /></Route>
          <Route path="/community"><Community /></Route>
        </Switch>
    </div >
  );
}

export default App;
