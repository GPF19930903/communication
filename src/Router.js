import React from "react";
import Home from './pages/Home';
import Chat from './pages/Chat'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Chat" component={Chat} />
        </Switch>
      </Router>
    );
  }
}

export default Routers;
