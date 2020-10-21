import React from 'react';
import './index.less'

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sendContent: '',
            list: []
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            sendContent:event.target.value
        })
    }

    send(content) {
        this.state.list.push(content)
        this.state.sendContent = ''
    }

    render() {
        const {sendContent, list} = this.state;
        return (
            <div>
                <div className="title">
                    <p>欢迎来到即时聊天系统</p>
                </div>
                {list.map((item,index)=>{
                    return (
                        <p key={index}>{ item }</p>
                    )
                })}
                <div className="sendDv">
                    <input type="text" placeholder="请输入内容" value={ sendContent } onChange={(event) => this.handleChange(event)} />
                    <div className="send" onClick={() => this.send(sendContent)}>发送</div>
                </div>
            </div>
        )
    }
}

export default Chat
