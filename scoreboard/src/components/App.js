import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
class App extends Component {
  state = {
      players: [
          {
              name: "Daniel",
              id: 1
          },
          {
              name: "John",
              id: 2
          },
          {
              name: "Fred",
              id: 3
          },
          {
              name: "Joe",
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
