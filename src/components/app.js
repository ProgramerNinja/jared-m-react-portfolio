import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import axios from 'axios';

import PortfolioContainer from "./portfolio/portfolio-container"
import NavigationContainer from "./navigation/navigation-container.js"
import Home from "./pages/home.js"
import About from "./pages/about.js"
import Contact from "./pages/contact.js"
import Blog from "./pages/blog.js"
import PortfolioDetail from "./portfolio/portfolio-detail.js"
import NoMatch from "./pages/no-match.js"


export default class App extends Component {
  constructor() {
    super();

    this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }
  getPortfolioItems() {
    axios
  .get('https://avenuej.devcamp.space/portfolio/portfolio_items')
  .then(response => {
    console.log("response data", response);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(function () {
  });
  }
  render() {
    this.getPortfolioItems();
    return (
      <div className='app'>
        <Router>
          <div>
            <h1></h1>
            <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about-me" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/blog" component={Blog}></Route>
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>


        


      </div>
    );
  }
}
