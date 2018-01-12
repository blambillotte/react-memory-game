import React from 'react';
import './GuessCard.css';

const assignRandom = () => Math.floor(Math.random() * 3);


class GuessCard extends React.Component {

  state = {
    isClicked: false
  }

  handleClick() {
    this.setState({isClicked: true})

    if (this.state.isClicked) {
      this.props.updateScore('loss');
    } else {
      this.props.updateScore('win');
    }
  }

  render() {
    return (

      <div onClick={this.handleClick.bind(this)} className='card' data-random={assignRandom()}>
        <div className='img-container'>
          <img alt={this.props.name} src={this.props.image} />
        </div>

        </div>
    )
 }
}

export default GuessCard;
