import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./files/home";
import Services from "./files/services";
import Navigation from "./files/navbar";
import Footer from "./files/footer";
import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
  const myInput = useRef();
  return (
    <Router>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/services" component={Services}></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

AOS.init();

export default App;
