import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import SignupPage from './pages/SignupPage/SignupPage';
import Parse from 'parse';
import UserModel from './model/UserModel';


function App() {
  const [activeUser, setActiveUser] = useState(
    Parse.User.current() ? new UserModel(Parse.User.current()) : null);   // During development it's conveient to be logged in by default  

  function handleLogout() {
    setActiveUser(null);
    Parse.User.logOut();
  }

  function handleLogin(loggedinUser) {
    setActiveUser(loggedinUser);
  }

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/"><HomePage activeUser={activeUser} onLogout={handleLogout}/></Route>
        <Route exact path="/login"><LoginPage activeUser={activeUser} onLogin={handleLogin}/></Route>
        <Route exact path="/signup"><SignupPage activeUser={activeUser}/></Route>
        <Route exact path="/recipes"><RecipesPage activeUser={activeUser} onLogout={handleLogout}/></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
