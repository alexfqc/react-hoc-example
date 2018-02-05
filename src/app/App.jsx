import React from 'react';
import { Route, Switch } from 'react-router';
import ClientForm from '../client/ClientForm';
import Dashboard from '../dashboard/Dashboard';
import Header from '../header/Header';

const mainStyle = {
  float: 'left',
  position: 'relative',
  marginLeft: '50%',
  marginTop: '1em',
  transform: 'translateX(-50%)',
  width: '80%'
};

const App = () => (
  <div>
    <Header />
    <main style={mainStyle}>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/user" component={ClientForm} />
      </Switch>
    </main>
  </div>
);

export default App;