import React from 'react';
import { Link } from "react-router-dom"
import './index.less'

class Home extends React.Component {
    render() {
        return (
            <div className="home-title">
                <Link to="/Chat"><button>进入聊天系统</button></Link>
            </div>
        )
    }
}

export default Home