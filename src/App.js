import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./files/home";
import Navigation from "./files/navbar";
import Footer from "./files/footer";
import React, { useRef, useEffect } from "react";

function App() {
  const myInput = useRef();
  return (
    <Router>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
