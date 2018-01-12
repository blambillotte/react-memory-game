import React from "react";
import GuessCard from '../GuessCard/GuessCard';

const Container = props => {

  return (
    <div className="container">
      {props.data.map(card => (
        <GuessCard
          id={card.id}
          key={card.id}
          name={card.name}
          image={card.image}
          updateScore={props.updateScore}
        />
      ))}
    </div>
  )
}

export default Container;
