import * as PlayerActionTypes from '../actiontypes/player';

const initialState = [
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
];

export default function Player( state=initialState, action ) {
    let prevPlayerId = 4
    switch(action.type) {
        case PlayerActionTypes.ADD_PLAYER:
        return [
            ...state,
            {
                name: action.name,
                score: 0,
                id: prevPlayerId += 1
            }

        ];

        case PlayerActionTypes.REMOVE_PLAYER:
        return [
            ...state.slice(0, action.index),
            ...state.slice(action.index + 1)
        ];

        case PlayerActionTypes.UPDATE_PLAYER_SCORE:
        return state.map((player, index) => {
            if(index === action.index){
                return {
                    ...player,
                    score: player.score + action.score
                };
            }
            return player;
        });

        default: return state;
    }
}