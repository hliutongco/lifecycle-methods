import React, {Component} from 'react';
import mp3 from './calm.mp3'

export default class Audio extends Component {

  playMusic = () => {
    this.musicPlayer.currentTime = 0;
    this.musicPlayer.play()
  }

  stopMusic = () => {
    this.musicPlayer.pause();
  }

  render(){
    console.log("inside the Audio component", this.props);
    return (
      <audio id="music-player" src={mp3} ref={(musicPlayer) => this.musicPlayer = musicPlayer} loop />
    )
  }

  componentDidUpdate(prevProps){
    // console.log("these are the previous props", prevProps);
    // console.log("these are the current props", this.props);
  }
}
