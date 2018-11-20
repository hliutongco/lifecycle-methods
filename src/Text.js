import React, {Component} from 'react';

export default class Text extends Component {
  render(){
    return (
      <h1>{this.props.text}</h1>
    )
  }
}
