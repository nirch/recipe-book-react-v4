import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/"><HomePage/></Route>
        <Route exact path="/login"><LoginPage/></Route>
        <Route exact path="/signup"><SignupPage/></Route>
        <Route exact path="/recipes"><RecipesPage/></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
