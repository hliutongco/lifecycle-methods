import React, { Component } from 'react';
import DogContainer from './DogContainer'

class App extends Component {
  state = {
    showDogs: true
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {showDogs: !prevState.showDogs}
    })
  }

  render() {
    // <Clicker/>
    return (
      <div className="App">
        <button onClick={this.handleClick}>Delete All</button>
        {this.state.showDogs ? <DogContainer /> : null}
      </div>
    );
  }
}

export default App;
