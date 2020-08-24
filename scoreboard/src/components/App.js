import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
class App extends Component {
    state = {
        players: [
            {
                name: "Daniel",
                score: 0,
                id: 1
            },
            {
                name: "John",
                score: 0,
                id: 2
            },
            {
                name: "Fred",
                score: 0,
                id: 3
            },
            {
                name: "Joe",
                score: 0,
                id: 4
            }
        ]
    }

    prevPlayerId = 4

    handlerRemovePlayer = (id) => {
        this.setState(prevState => ({
            players: prevState.players.filter(p => p.id !== id)
        }));
    }

    handleScoreChange = (index, delta) => {
        this.setState(prevState => ({
            score: prevState.players[index].score += delta
        }));
    }

    handleAddPlayer = (name) => {
        this.setState({
            players: [
                ...this.state.players,
                {
                    name,
                    score: 0,
                    id: this.prevPlayerId += 1
                }
            ]
        });
    }

  render() {
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
                  />
              ) }
              <AddPlayerForm addPlayer={ this.handleAddPlayer}/>
          </div>
      );
  }
}

export default App;
