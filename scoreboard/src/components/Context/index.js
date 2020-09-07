import React, { Component } from  'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {
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

    handleRemovePlayer = (id) => {
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

    render(){
        return (
            <ScoreboardContext.Provider value={{
                players: this.state.players,
                actions: {
                    changeScore: this.handleScoreChange,
                    removePlayer: this.handleRemovePlayer,
                    addPlayer: this.handleAddPlayer,
                    getHighScore: this.getHighScore
                }
            }}>
                { this.props.children }
            </ScoreboardContext.Provider>
        );
    }
}

export const Consumer = ScoreboardContext.Consumer;