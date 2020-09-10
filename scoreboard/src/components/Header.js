import React from '../../node_modules/react';
import PropTypes from '../../node_modules/prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {
    return (
        <header>
            <Stats players={ players } />
            <h1>{ title }</h1>
            <Stopwatch />
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object),
}

Header.defaultProps = {
    title: 'Scoreboard',
}

export default Header;
