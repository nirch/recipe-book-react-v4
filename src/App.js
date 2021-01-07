import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import SignupPage from './pages/SignupPage/SignupPage';
import jsonUsers from './data/users.json';
import jsonRecipes from './data/recipes.json';


function App() {
  const [users, setUsers] = useState(jsonUsers);        // HACK ALERT: holding all users as state only because this is a JSON based application (no server side)
  const [activeUser, setActiveUser] = useState(jsonUsers[0]);   // During development it's conveient to be logged in by default
  const [recipes, setRecipes] = useState(jsonRecipes);  // HACK ALERT: holding all recipes as state only because this is a JSON based application (no server side)
  

  function handleLogout() {
    setActiveUser(null);
  }

  function handleLogin(loggedinUser) {
    setActiveUser(loggedinUser);
  }

  function addRecipe(name, desc, imgURL) {
    //,,,
    alert(name+desc+imgURL);
  }

  const activeUserReciepes = activeUser ? recipes.filter(recipe => recipe.userId === activeUser.id) : [];

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/"><HomePage activeUser={activeUser} onLogout={handleLogout}/></Route>
        <Route exact path="/login"><LoginPage activeUser={activeUser} users={users} onLogin={handleLogin}/></Route>
        <Route exact path="/signup"><SignupPage activeUser={activeUser}/></Route>
        <Route exact path="/recipes"><RecipesPage activeUser={activeUser} onLogout={handleLogout} 
          recipes={activeUserReciepes} addRecipe={addRecipe}/></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
