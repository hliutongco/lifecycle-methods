// https://dog.ceo/api/breeds/image/random

import React, {Component} from 'react';
import DogCard from './DogCard'

export default class DogContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      dogs: [],
      showDogs: true
    }

    console.log("in the constructor", this.state);
  }

  renderDogs = () => {
    return this.state.dogs.map((dog, index) => <DogCard key={index} dog={dog}/>)
  }

  render(){
    console.log("in the render", this.state);

    return (
      <div id="pics">
        {this.renderDogs()}
      </div>
    )
  }

  componentDidMount() {
    console.log("in componentDidMount", this.state);
  }

  componentWillUnmount() {
    console.log("in componentWillUnmount");
  }
}
