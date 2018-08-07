import React, { Component } from 'react'
import App from '../components/App';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';

import Header from '../components/header';
import Home from '../components/home';
import FootNav from '../components/footNav';

export default class MainPage extends Component {
  render() {
    return (
    <Router>
      <Provider store={store}>
        <div>
          <Header />
          <Route exact strict path="/"  render={( ) => {
            return (
                <div>
                  <Home />
                  <FootNav />
                </div>
            );
          }} />
          
          <Route exact strict path="/githubfinder" component={ App } />
        </div>
      </Provider>
    </Router>
    )
  }
}
