import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, useLocation, useContext } from 'react-router-dom';
import LandingPage from './pages/LandingPage/Landingpage';
import ProfilePage from './pages/ProfilePage/Profilepage';
import Community from './pages/Community/Community';
import NavBar from './components/NavBar/Navbar';

function App() {


  return (
    <div className="App">
        <NavBar/>
        
        <Switch>
          <Route exact path="/"><LandingPage/></Route>
          <Route path="/profile"><ProfilePage /></Route>
          <Route path="/community"><Community /></Route>
        </Switch>
    </div >
  );
}

export default App;
