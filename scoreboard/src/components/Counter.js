import React from '../../node_modules/react';
import PropTypes from '../../node_modules/prop-types';

const Counter = ({ index, score, changeScore }) => {

    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={ () => changeScore(index, -1) }> - </button>
            <span className="counter-score">{ score }</span>
            <button className="counter-action increment" onClick={ () => changeScore(index, 1) }> + </button>
        </div>
    );
}

Counter.propTypes = {
    index: PropTypes.number,
    scores: PropTypes.number,
    changeScore: PropTypes.func
}

export default Counter;
