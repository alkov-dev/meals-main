import React from "react";
import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import MealList from "../pages/MealList";
import ResipeInfo from "../pages/ResipesInfo";
import Search from "../pages/Search";


const AppRouter = () => {

  return (

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path='/category/:name'>
          <MealList />
        </Route>
      <Route path='/meal/:id'>
        <ResipeInfo/>
      </Route>
      </Switch>

  )
}

export default AppRouter;