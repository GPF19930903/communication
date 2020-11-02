import React from 'react';
import { Button } from 'antd';
import './index.less'

class Chat extends React.Component {
    render() {
        return (
            <div className="title">
                <h2>欢迎来到即时聊天系统</h2>
                <Button type="primary">发送</Button>
            </div>
        )
    }
}

export default Chat