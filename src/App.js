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


  updateScore(result) {

    if (result === 'win') {
      this.setState(prevState => {
        return {score: prevState.score + 1};
      });
    } else {
      this.setState(prevState => {
        return {score: prevState.score - 1};
      });
    }

  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score}/>
        <Title>Clicking Game</Title>
        <CardContainer data={this.state.data} updateScore={this.updateScore.bind(this)}/>
      </Wrapper>
    );
  }
}

export default App;
