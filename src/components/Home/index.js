import React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom"
import './index.less'

class Home extends React.Component {
    render() {
        return (
            <div className="home-title">
                <Link to="/Chat"><Button type="primary">进入聊天系统</Button></Link>
            </div>
        )
    }
}

export default Home