import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Chat from './pages/Chat'

export default class Routers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact render={Home} />
          <Route path='/chat' render={Chat} />
        </Switch>
      </Router>
    )
  }
}
