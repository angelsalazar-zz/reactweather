var React = require('react');

var WeatherForm = React.createClass({
  submitHandler : function (e) {
    e.preventDefault();
    var locationRef = this.refs.location;
    var location  = locationRef.value;
    if (location.length) {
      locationRef.value = '';
      this.props.onSearch(location);
    }
  },
  render : function () {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="search"
                  ref="location"
                  placeholder="Search weather by city" />
          <button className="button hollow expanded">Get weather</button>
        </form>
      </div>
    );
  }
});


module.exports = WeatherForm;
