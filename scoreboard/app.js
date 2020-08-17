const players = [
    {
        name: "Daniel",
        score: 50,
        id: 1
      },
      {
        name: "John",
        score: 85,
        id: 2
      },
      {
        name: "Fred",
        score: 95,
        id: 3
      },
      {
        name: "Joe",
        score: 80,
        id: 4
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
            <Counter/>
        </div>
    );
}

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            score: 0
        }
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment"> + </button>
            </div>
        );
    }
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header
                title="My Scoreboard"
                totalPlayers={ props.initialPlayers.length }
            />
            { props.initialPlayers.map(player =>
                <Player
                    name={ player.name }
                    key={ player.id.toString() }
                />
            ) }
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={ players }/>,
    document.getElementById('root')
);
