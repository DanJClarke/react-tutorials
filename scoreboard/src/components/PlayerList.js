import React from 'react';
import Player from './Player';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

const PlayerList = ({ getHighScore }) => {
  return (
    <Consumer>
        {  context => (
          <React.Fragment>
            { context.players.map((player, index) =>
              <Player
                { ...player }
                index={index}
                key={player.id.toString()}
                isHighScore={context.actions.getHighScore() === player.score}
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