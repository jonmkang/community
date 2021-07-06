import './App.css';
import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage/Landingpage';
import ProfilePage from './pages/ProfilePage/Profilepage';
import CommunityPage from './pages/CommunityPage/Communitypage';
import NavBar from './components/NavBar/Navbar';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const CommunityContext = React.createContext()

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn}/>
        
        <Switch>
          <Route exact path="/"><LandingPage/></Route>
          <Route path="/profile"><ProfilePage /></Route>
        <Route path="/community"><CommunityPage /></Route>
        </Switch>
    </div >
  );
}

export default App;
