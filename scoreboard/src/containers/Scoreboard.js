import React, { Component } from  '../../node_modules/react';
import Header from '../components/Header';
import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';
class Scoreboard extends Component {
    // getHighScore = () => {
    //     const scores = this.state.players.map( p => p.score );
    //     const highScore = Math.max(...scores);
    //     if (highScore) {
    //       return highScore;
    //     }

    //     return null;
    // }

  render() {
    //const highScore = this.getHighScore();

      return (
          <div className="scoreboard">
              <Header
                  title="My Scoreboard"
                  players={ this.state.players }
              />
              { this.state.players.map( (player, index) =>
                  <Player
                      name={ player.name }
                      score={ player.score }
                      id={ player.id }
                      index = { index }
                      changeScore={ this.handleScoreChange }
                      key={ player.id.toString() }
                      removePlayer={ this.handlerRemovePlayer }
                     // isHighScore={highScore === player.score}
                  />
              ) }
              <AddPlayerForm addPlayer={ this.handleAddPlayer}/>
          </div>
      );
  }
}

export default Scoreboard;
