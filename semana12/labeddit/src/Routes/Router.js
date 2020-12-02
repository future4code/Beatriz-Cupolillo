import React from "react";
import { Route, Switch } from "react-router-dom"
import Login from '../Screens/Login/index'
import Feed from '../Screens/Feed/index'
import NewPost from '../Screens/NewPost/index'
import RegisterPage from '../Screens/Register/index'
import ErrorPage from '../Screens/ErrorPage/index'

const Router = ()  => {
    return (
      <Switch>
  
        <Route  exact path={"/login"}>
         <Login/>
        </Route>
  
        <Route exact path={"/register"}>
          <RegisterPage/>
        </Route>

        <Route exact path={["/feed", "/"]}>
          <Feed/>
        </Route>

        <Route exact path={'/newpost'}>
          <NewPost/>
        </Route>


        <Route exact path={"/errorpage"}>
          <ErrorPage/>
        </Route>

      </Switch>
  
    );
  }
  
  export default Router;