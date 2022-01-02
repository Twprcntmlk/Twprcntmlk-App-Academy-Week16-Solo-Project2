// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/LoginSignUpFormModal/SignUpForm";
import LoginForm from "./components/LoginSignUpFormModal/LoginForm";

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

import MainPage from "./components/MainPage";
import ListingsPage from "./components/ListingsPage";
import SingleListingPage from "./components/SingleListingPage";
import UserPage from "./components/UserPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
           <Route path="/" exact>
            <MainPage />
          </Route>

          <Route path="/signup" exact>
            <SignupFormPage />
          </Route>

          <Route path="/login" exact>
            <LoginForm/>
          </Route>

          <Route path="/listings" exact>
            <ListingsPage />
          </Route>

          <Route path="/listings/:id" exact>
            <SingleListingPage />
          </Route>

          <Route path="/users/:id" exact>
            <UserPage />
          </Route>

        </Switch>
      )}

    </>
  );
}

export default App;
