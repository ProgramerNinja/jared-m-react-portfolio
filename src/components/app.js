import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import PortfolioContainer from "./portfolio/portfolio-container"
import NavigationContainer from "./navigation/navigation-container.js"
import Home from "./pages/home.js"
import About from "./pages/about.js"
import Contact from "./pages/contact.js"
import Blog from "./pages/blog.js"
import PortfolioDetail from "./portfolio/portfolio-detail.js"
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match.js"


export default class App extends Component {
  

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/auth" component={Auth}></Route>
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
