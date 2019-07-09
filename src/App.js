import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Index from './components/layout/Index';
import FullRecipe from './components/recipes/fullRecipe';
import { RecipeContext } from './context';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState({
    recipes: [],
    heading: 'Featured Recipes',
  });
  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      <Router>
        <Fragment>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/recipe/:id" component={FullRecipe} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </RecipeContext.Provider>
  );
};

export default App;
