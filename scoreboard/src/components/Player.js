import React, { PureComponent } from '../../node_modules/react';
import Counter from './Counter';
import Icon from './Icon';
import PropTypes from '../../node_modules/prop-types';

class Player extends PureComponent {
    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        index: PropTypes.number,
        isHighScore: PropTypes.bool
    };

    render(){
        const {
            name,
            score,
            index,
            removePlayer,
            changeScore,
            isHighScore
        } = this.props;

        return (
            <div className="player">
                <span className="player-name">
                <button className="remove-player" onClick={ () => removePlayer(index) }>✖</button>
                    <Icon isHighScore={ isHighScore } />
                    { name }
                </span>
                <Counter
                    score={ score }
                    index = { index }
                    changeScore={ changeScore }
                />
            </div>
        );
    }
}

export default Player;
