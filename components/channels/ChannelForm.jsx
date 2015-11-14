import React, {Component} from 'react';

class ChannelForm extends Component{
  onSubmit(e){
    e.preventDefault();
    const node = this.refs.channel;
    const channelName = node.value;
    this.props.addChannel(channelName);
    node.value = '';
  }
  render(){
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className='form-group'>
          <input 
            className='form-control'
            placeholder='Add Channel'
            type='text'
            ref='channel'
          />
        </div>
        
      </form>
    )
  }
}

ChannelForm.propTypes = {
  addChannel: React.PropTypes.func.isRequired
}


export default ChannelForm