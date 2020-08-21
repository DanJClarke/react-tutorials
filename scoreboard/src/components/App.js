import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
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

  handlerRemovePlayer = (id) => {
      this.setState(prevState => ({
          players: prevState.players.filter(p => p.id !== id)
      }));
  }

  render() {
      return (
          <div className="scoreboard">
              <Header
                  title="My Scoreboard"
                  totalPlayers={ this.state.players.length }
              />
              { this.state.players.map(player =>
                  <Player
                      name={ player.name }
                      score={ player.score }
                      id={ player.id }
                      key={ player.id.toString() }
                      removePlayer={ this.handlerRemovePlayer }
                  />
              ) }
          </div>
      );
  }
}

export default App;
