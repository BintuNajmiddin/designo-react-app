import React from "react";
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";

import About  from './About';
import Contact from './Contact';
import Graphicdesign from './Graphicdesign';
import Appdesign from './Appdesign';
import Webdesign from './Webdesign';
import Locations from './Locations';
import Home from './Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App() {
  return (
    <Router>
      <div className='wrapper'>
     
        
      <Header/>

        <Switch>
        <Route path="/contact">
            <Contact />
        </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/graphicdesign">
            <Graphicdesign />
          </Route>

          <Route path="/locations">
            <Locations />
          </Route>

          <Route path="/appdesign">
            <Appdesign />
          </Route>

          <Route path="/webdesign">
            <Webdesign />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>

      </div>
    </Router>
  );
}

