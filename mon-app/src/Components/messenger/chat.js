import io from 'socket.io-client';
import React, {Component, Fragment} from "react";

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ""}
        this.handleChangeMessage = this.handleChangeMessage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.socket = io('http://localhost:4242/')
    }

    handleSubmit(e) {
        e.preventDefault();
        this.socket.emit('new-message', {
            message: this.state.message
        })
    }

    handleChangeMessage(e){
        this.setState({message: e.target.value})
    }

    render() {
        return(
            <Fragment>
                <input type="text" onChange={this.handleChangeMessage}/>
                <button onClick={this.handleSubmit}>send</button>
            </Fragment>
        )
    }
}

export default Chat;