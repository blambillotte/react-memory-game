import React, { Component } from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import Title from './components/Title/Title';
import Header from './components/Header/header';
import CardContainer from './components/CardContainer/container';
import data from './data.json';
import './App.css';

class App extends Component {
  state = {
    data,
    score: 0
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score}/>
        <Title>Guessing Game</Title>
        <CardContainer data={this.state.data}/>
      </Wrapper>
    );
  }
}

export default App;
