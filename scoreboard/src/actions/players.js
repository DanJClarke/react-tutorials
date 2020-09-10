import * as PlayerActionTypes from '../actiontypes/player';

export const addplayer = name => {
    return {
        type: PlayerActionTypes.ADD_PLAYER,
        name
    };
}

export const removeplayer = index => {
    return {
        type: PlayerActionTypes.REMOVE_PLAYER,
        index
    };
}

export const updatePlayerScore = (index, score) => {
    return {
        type: PlayerActionTypes.UPATE_PLAYER_SCORE,
        index,
        score
    };
}