import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import SignupPage from './pages/SignupPage/SignupPage';
import jsonRecipes from './data/recipes.json';
import Parse from 'parse';


function App() {
  const [activeUser, setActiveUser] = useState(null);   // During development it's conveient to be logged in by default
  const [recipes, setRecipes] = useState(jsonRecipes);  // HACK ALERT: holding all recipes as state only because this is a JSON based application (no server side)
  

  function handleLogout() {
    setActiveUser(null);
    Parse.User.logOut();
  }

  function handleLogin(loggedinUser) {
    setActiveUser(loggedinUser);
  }

  function addRecipe(name, desc, img) {
    const newRecipe = {
      id: recipes[recipes.length - 1].id + 1,
      name,
      desc,
      img,
      userId: activeUser.id
    }

    setRecipes(recipes.concat(newRecipe));
  }

  const activeUserReciepes = activeUser ? recipes.filter(recipe => recipe.userId === activeUser.id) : [];

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/"><HomePage activeUser={activeUser} onLogout={handleLogout}/></Route>
        <Route exact path="/login"><LoginPage activeUser={activeUser} onLogin={handleLogin}/></Route>
        <Route exact path="/signup"><SignupPage activeUser={activeUser}/></Route>
        <Route exact path="/recipes"><RecipesPage activeUser={activeUser} onLogout={handleLogout} 
          recipes={activeUserReciepes} addRecipe={addRecipe}/></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
