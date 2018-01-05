import React from "react";
import GuessCard from '../GuessCard/GuessCard';

const Container = props => {
  console.log(props);

  return (
    <div className="container">
      {props.data.map(card => (
        <GuessCard
          removeFriend={this.removeFriend}
          id={card.id}
          key={card.id}
          name={card.name}
          image={card.image}
          occupation={card.occupation}
          location={card.location}
        />
      ))}
    </div>
  )
}

export default Container;
