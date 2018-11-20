import React, {Component} from 'react';
import Text from './Text'
import Audio from './Audio'
import {script} from './script'

export default class Clicker extends Component {
  state = {
    musicIndex: 0,
    textIndex: 0
  }

  handleClick = () => {
    if (!script[this.state.musicIndex + 1]) return

    this.setState(prevState => {
      return {
        musicIndex: prevState.musicIndex + 1,
        textIndex: prevState.textIndex + 1
      }
    })
  }

  render(){
    const musicPlaying = script[this.state.musicIndex].musicPlaying
    const text = script[this.state.textIndex].text

    return (
      <div onClick={this.handleClick}>
        <Audio musicPlaying={musicPlaying}/>
        <Text text={text} />
      </div>
    )
  }
}
