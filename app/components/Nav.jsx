var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch : function (e) {
    e.preventDefault();
    console.log("coming soon");
  },
  render :  function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React-weather</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink></li>
            <li><IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</IndexLink></li>
            <li><IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</IndexLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" ref="location" placeholder="Search weather by city"/></li>
              <li><input type="submit" className="button" value="Get search"/></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
