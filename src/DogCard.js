import React from 'react';

const DogCard = (props) => {
  return (
    <img alt="doggo" src={props.dog.message}/>
  )
}

export default DogCard
