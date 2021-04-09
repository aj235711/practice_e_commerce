import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import Product from './Product.js';
import HelpMe from './HelpMe.js';
import About from './About.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'tachyons';


const App = () => {
  const [id, setId] = useState();
  const changeId = (id1) => {
    setId(id1);
  }
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact render={(props) => (<Home changeId={changeId}/>)} />
          {/* <Route path="/" component={Home} changeID/> */}
          <Route path="/about" component={About} />
          <Route path="/helpme" component={HelpMe} />
          <Route path="/product" render={(props) => (<Product id={id}/>)} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
