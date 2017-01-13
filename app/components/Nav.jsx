var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render :  function () {
    return (
      <div>
        <IndexLink to="/" activeClassName="active">Weather</IndexLink>
        <IndexLink to="/about" activeClassName="active">About</IndexLink>
        <IndexLink to="/examples" activeClassName="active">Examples</IndexLink>
      </div>
    );
  }
});

module.exports = Nav;
