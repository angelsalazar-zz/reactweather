var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState : function () {
    return  {
      isLoading : false,
      errorMessage : null
    }
  },
  handleSearch : function (location) {
    // var self = this;
    this.setState({ isLoading : true });
    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location : location,
        temp : temp,
        isLoading : false
      })
    }, (err) => {
      console.log(err);
      this.setState({
        isLoading : false,
        errorMessage : err.message
      });
    });
  },
  render : function () {
    var {location, temp, isLoading, errorMessage} = this.state
    function renderMessage() {
      if (isLoading) {
        return <h3 className='text-center'>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    function renderError () {
      if (errorMessage && typeof errorMessage === 'string') {
        return (
            <ErrorModal message={errorMessage}/>
        )
      }
    }
    return (
      <div>
        <h1 className='text-center page-title'>Get weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
})

module.exports = Weather;
