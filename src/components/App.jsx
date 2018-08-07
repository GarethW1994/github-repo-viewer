import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router-dom';
import store from '../store/store';

import GithubFinder from './githubFinder';

import FootNav from './footNav';

class App extends Component {
  
  render() {
    return (
  
      <Provider store={store}>
        <div>
            <GithubFinder />
            <FootNav />
        </div>
      </Provider>    
   );
  }
}

export default withRouter(App);
