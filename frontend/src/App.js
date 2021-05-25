// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignUpFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import ListingsPage from "./components/ListingsPage";
import ListingPage from "./components/ListingPage";
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

          <Route path="/listings" exact>
            <ListingsPage />
          </Route>

          <Route path="/listings/:id" exact>
            <ListingPage />
          </Route>

          <Route path="/users/:id" exact>
            <UserPage />
          </Route>

        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
