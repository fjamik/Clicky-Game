import React, { Component } from 'react';
import Card from "./components/Card";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";


class App extends Component {

  state = {
    cards,
    score: 0,
    win: 0
  };

  handleFinishGame = () => {
    if (this.state.score > this.state.win) {
      this.setState({win: this.state.score}, function () {

      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert (`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  handleClick = id => {
    this.state.cards.find((i, j) => {
      if (i.id === id) {
        if(cards[j].count === 0){
          cards[j].count =+ 1;
          this.setState({score : this.state.score + 1}, function(){

          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.handleFinishGame();
        }
      }
    });
  }

  render () {
    return (
      <Wrapper>
        <Header score={this.state.score} win={this.state.win} > Clicky Game </Header>
        {this.state.cards.map(card => (
          <Card 
          handleClick={this.handleClick}
          id={card.id}
          key={card.id}
          image = {card.image} />
        ))}
      </Wrapper>
    );
  }

}

export default App;
