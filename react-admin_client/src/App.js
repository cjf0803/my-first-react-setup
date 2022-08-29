
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import login from './pages/login/login';
import admin from './pages/admin/admin';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        {/* Switch只匹配其中一个 */}
          <Switch>
            <Route path='/login' component={login}></Route>
            <Route path='/' component={admin}></Route>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;