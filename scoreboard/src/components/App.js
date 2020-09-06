import React, { Component } from 'react';
import { Provider } from './Context';
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
        this.setState(preveState => {
            return {
                players: [
                    ...preveState.players,
                    {
                        name,
                        score: 0,
                        id: this.prevPlayerId += 1
                    }
                ]
            };
        });
    }

    getHighScore = () => {
        const scores = this.state.players.map( p => p.score );
        const highScore = Math.max(...scores);
        if (highScore) {
          return highScore;
        }

        return null;
    }

  render() {
    const highScore = this.getHighScore();

      return (
        <Provider value={ this.state }>
            <div className="scoreboard">
                <Header
                    title="My Scoreboard"
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
                        isHighScore={highScore === player.score}
                    />
                ) }
                <AddPlayerForm addPlayer={ this.handleAddPlayer}/>
            </div>
        </Provider>
      );
  }
}

export default App;
