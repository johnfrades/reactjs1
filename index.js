var Bacon = React.createClass({
  render: function () {
    return (
      <div>
        <h2>A sample component!</h2>
        <p>Hey there</p>
      </div>
    );
  },
});

var Movie = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.genre}</h2>
      </div>
    );
  },
});

ReactDOM.render(
  <div>
    <Movie title="Captain America" genre="Action" />
    <Movie title="Breaking Bad" genre="Thriller" />
    <Movie title="The Notebook" genre="Romance" />
  </div>,
  document.getElementById("example")
);
