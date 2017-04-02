var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');


var Weather = React.createClass({
  getInitialState : function () {
    return  {
      isLoading : false
    }
  },
  handleSearch : function (location) {
    var self = this;
    debugger;
    self.setState({ isLoading : true });
    openWeatherMap.getTemp(location).then((temp) => {
      self.setState({
        location : location,
        temp : temp
      })
      self.setState({ isLoading : false });
    }, (err) => {
      console.log(err);
      self.setState({ isLoading : false });
    });
  },
  render : function () {
    var {location, temp, isLoading} = this.state
    function renderMessage() {
      if (isLoading) {
        return <h3 className='text-center'>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    return (
      <div>
        <h1 className='text-center'>Get weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
})

module.exports = Weather;
