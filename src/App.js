import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Navigation from "./files/navbar";
import Home from "./files/home";
import About from "./files/about";
import Services from "./files/services";
import Listings from "./files/listings";
import Contact from "./files/contact";
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
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/listings" component={Listings}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

AOS.init();

export default App;
