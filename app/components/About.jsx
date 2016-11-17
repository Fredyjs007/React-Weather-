  var React = require('react');

  var About = (props) => {
    return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This is a weather application built using JavaScript and React! Made by Fredy Rosales with the help of Andrew Mead!
        </p>
        <p>
          Here are some tools we used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the
              JavaScript framework i used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used
              Open Weather Map to search for weather data by city name.
          </li>
        </ul>
    </div>
    )
  };

  module.exports = About;
