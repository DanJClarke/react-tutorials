const players = [
    {
        name: "Daniel",
        score: 50
      },
      {
        name: "John",
        score: 85
      },
      {
        name: "Fred",
        score: 95
      },
      {
        name: "Joe",
        score: 80
      }
]

const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stat">Player: { props.totalPlayers }</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                { props.name }
            </span>
            <Counter score={ props.score } />
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{ props.score }</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header
                title="My Scoreboard"
                totalPlayers={ 1 }
            />
            { props.initialPlayers.map(player =>
                <Player
                    name={ player.name }
                    score={ player.score }
                />
            ) }
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={ players }/>,
    document.getElementById('root')
);
