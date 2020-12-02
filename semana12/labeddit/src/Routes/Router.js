import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from '../Screens/Login/index'
import Feed from '../Screens/Feed/index'
import NewPost from '../Screens/NewPost/index'
import Register from '../Screens/Register/index'
import ErrorPage from '../Screens/ErrorPage/index'

function Router() {
    return (
      <BrowserRouter>
      <Switch>
  
        <Route exact path="/feed">
          <Feed/>
        </Route>
  
        <Route  exact path="/login">
         <Login/>
        </Route>
  
        <Route exact path="/newpost">
          <NewPost/>
        </Route>
  
        <Route exact path="/register">
          <Register/>
        </Route>

        <Route exact path="/errorpage">
          <ErrorPage/>
        </Route>

      </Switch >
    </BrowserRouter>
  
  
    );
  }
  
  export default Router;