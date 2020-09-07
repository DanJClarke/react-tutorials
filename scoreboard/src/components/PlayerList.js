import React from 'react';
import Player from './Player';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

const PlayerList = ({ getHighScore }) => {
  return (
    <Consumer>
        {  ({ players, actions }) => (
          <React.Fragment>
            { players.map((player, index) =>
              <Player
                index={index}
                key={player.id.toString()}
                isHighScore={ actions.getHighScore() === player.score }
              />
            )}
          </React.Fragment>
         ) }
        </Consumer>
    );
};

PlayerList.propTypes = {
  getHighScore: PropTypes.number,
}

export default PlayerList;