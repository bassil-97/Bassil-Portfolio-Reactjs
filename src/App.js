import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Starter from './components/starter/starter';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Starter} />
      </Switch>
    </div>
  );
}

export default App;
