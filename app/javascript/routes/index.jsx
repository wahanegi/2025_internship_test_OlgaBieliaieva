import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "../components/userContext";
import PrivateRoute from "../components/PrivateRoute";
import RestrictedRoute from "../components/RestrictedRoute";
import Home from "../components/pages/Home";
import Posts from "../components/pages/Posts";

export default (
  <UserProvider>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute redirectTo="/posts">
              <Home />
            </RestrictedRoute>
          }
        />
        <Route
          path="/posts"
          element={
            <PrivateRoute redirectTo="/">
              <Posts />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  </UserProvider>
);
