import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News key="Home" pageSize={6} category="Home" />}
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  key="General"
                  country="in"
                  pageSize={6}
                  category="General"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="Business"
                  country="in"
                  pageSize={6}
                  category="Business"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="Science"
                  country="in"
                  pageSize={6}
                  category="Science"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="Technology"
                  country="in"
                  pageSize={6}
                  category="Technology"
                />
              }
            />
            <Route
              exact
              path="/Sport"
              element={<News pageSize={6} country="in" category="Sport"></News>}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
