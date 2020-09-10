import React, { Component } from  '../../node_modules/react';
import PropTypes from '../../node_modules/prop-types';
import { bindActionCreators } from  '../../node_modules/redux';
import * as PlayerActionCreators from '../actions/player';
import { connect } from 'react-redux';
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
    const { dispatch, players } = this.props;
    const handlerRemovePlayer = bindActionCreators(PlayerActionCreators.removeplayer, dispatch);
    const handleScoreChange = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
    const handleAddPlayer = bindActionCreators(PlayerActionCreators.addplayer, dispatch);

      return (
          <div className="scoreboard">
              <Header
                  title="My Scoreboard"
                  players={ players }
              />
              { players.map( (player, index) =>
                  <Player
                      name={ player.name }
                      score={ player.score }
                      id={ player.id }
                      index = { index }
                      changeScore={ handleScoreChange }
                      key={ player.id.toString() }
                      removePlayer={ handlerRemovePlayer }
                     // isHighScore={highScore === player.score}
                  />
              ) }
              <AddPlayerForm addPlayer={ handleAddPlayer }/>
          </div>
      );
  }
}

Scoreboard.propTypes = {
    players: PropTypes.array.isRequired
};

const mapsStateToProps = state => (
    {
        players: state
    }
);

export default connect(mapsStateToProps)(Scoreboard);