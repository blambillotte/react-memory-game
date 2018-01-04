import React from 'react';
import './GuessCard.css';

const assignRandom = () => Math.floor(Math.random() * 3);

const GuessCard = props => (
  <div className='card' data-random={assignRandom()}>
    <div className='img-container'>
      <img alt={props.name} src={props.image} />
    </div>

    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default GuessCard;
