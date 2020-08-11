const title = <h1>My First React Element!</h1>;
const desc = <p>I just learned how to create a react node and render it to the DOM!</p>;

const header = React.createElement(
    'header',
    null,
    title,
    desc
);

ReactDOM.render(
    header,
    document.getElementById('root')
);