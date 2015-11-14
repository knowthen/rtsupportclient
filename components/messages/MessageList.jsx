import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component{
  render(){
    return (
      <ul>{
        this.props.messages.map( message =>{
          return (
            <Message key={message.id} message={message} />
          )
        })
      }</ul>
    )
  }
}
MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired
}
export default MessageList