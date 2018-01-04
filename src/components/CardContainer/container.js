import React from "react";
import GuessCard from '../GuessCard/GuessCard';

const Container = props => {
  console.log(props);

  return (
    <div className="container">
      {props.data.map(friend => (
        <GuessCard
          removeFriend={this.removeFriend}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
        />
      ))}
    </div>
  )
}

export default Container;
