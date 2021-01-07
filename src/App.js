import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import SignupPage from './pages/SignupPage/SignupPage';
import jsonUsers from './data/users.json';

function App() {
  const [users, setUsers] = useState(jsonUsers);      // HACK ALERT: holding all users as state only because this is a JSON based application (no server side)
  const [activeUser, setActiveUser] = useState(null);

  function handleLogout() {
    setActiveUser(null);
  }


  return (
    <HashRouter>
      <Switch>
        <Route exact path="/"><HomePage activeUser={activeUser} onLogout={handleLogout}/></Route>
        <Route exact path="/login"><LoginPage activeUser={activeUser} users={users}/></Route>
        <Route exact path="/signup"><SignupPage activeUser={activeUser}/></Route>
        <Route exact path="/recipes"><RecipesPage activeUser={activeUser} onLogout={handleLogout}/></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
