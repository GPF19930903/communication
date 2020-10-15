import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/chat">
            <button>进入聊天系统</button>
          </Link>
          <span>时间:{this.state.date.toLocaleTimeString()}</span>
        </header>
      </div>
    );
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
}

export default Home;
