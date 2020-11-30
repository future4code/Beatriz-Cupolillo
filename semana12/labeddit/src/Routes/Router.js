import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NavBar from '../Components/NavBar/navbar'
import Login from '../Screens/Login/index'
import Feed from '../Screens/Feed/index'
import NewPost from '../Screens/NewPost/index'

function Router() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
  
        <Route exact path="/feed">
          <Feed/>
        </Route>
  
        <Route  exact path="/login">
         <Login/>
        </Route>
  
        <Route exact path="/newpost">
          <NewPost/>
        </Route>
  
        <Route exact path="/">
          </>
        </Route>

        <Route exact path="/">
          </>
        </Route>
  
      </Switch >
    </BrowserRouter>
  
  
    );
  }
  
  export default Router;