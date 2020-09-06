import React from 'react';
import Player from './Player';

const PlayerList = ({players, getHighScore, changeScore, removePlayer}) => {
  return (
    <React.Fragment>
      {players.map((player, index) =>
        <Player
          index={index}
          key={player.id.toString()}
          id={player.id}
          name={player.name}
          score={player.score}
          changeScore={changeScore}
          removePlayer={removePlayer}
          isHighScore={getHighScore() === player.score}
        />
      )}
    </React.Fragment>
  );
};

export default PlayerList;