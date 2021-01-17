import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import SignupPage from './pages/SignupPage/SignupPage';
import jsonUsers from './data/users.json';
import jsonRecipes from './data/recipes.json';
import ActiveUserContext from './shared/ActiveUserContext';
import emailjs from 'emailjs-com';


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

  function addRecipe(name, desc, img) {
    const newRecipe = {
      id: recipes[recipes.length - 1].id + 1,
      name,
      desc,
      img,
      difficulty: 1,
      userId: activeUser.id
    }

    setRecipes(recipes.concat(newRecipe));

    // sending an email about the new recipe
    emailjs.send("gmail","template_rcwhngk",{
      recipe_name: name,
      user_name: activeUser.fname + " " + activeUser.lname,
      recipe_desc: desc,
      user_email: activeUser.email,
      });
  }

  const activeUserReciepes = activeUser ? recipes.filter(recipe => recipe.userId === activeUser.id) : [];

  return (
    <ActiveUserContext.Provider value={activeUser}>
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage onLogout={handleLogout}/></Route>
          <Route exact path="/login"><LoginPage users={users} onLogin={handleLogin}/></Route>
          <Route exact path="/signup"><SignupPage/></Route>
          <Route exact path="/recipes"><RecipesPage onLogout={handleLogout} 
            recipes={activeUserReciepes} addRecipe={addRecipe}/></Route>
        </Switch>
      </HashRouter>
    </ActiveUserContext.Provider>
  );
}

export default App;
