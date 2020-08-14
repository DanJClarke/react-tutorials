const desc = 'just learned how to create a react node and render it to the DOM!';
const myTitleID = 'main-title';
const name = 'Dan';

const header = (
    <header id={ myTitleID }>
        <h1>{ name }'s first React Element</h1>
        <p className="main-desc">{ desc }</p>
    </header>
);


ReactDOM.render(
    header,
    document.getElementById('root')
);