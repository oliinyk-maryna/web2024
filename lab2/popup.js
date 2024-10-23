document.addEventListener('DOMContentLoaded', function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const apiKey = 'a71afc61ad4eb51331ded55431d1cccd';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const location = data.name;
          const temperature = Math.round(data.main.temp) + '°C';
          const forecast = data.weather[0].description;
          const humidity = data.main.humidity + '%';
          const windSpeed = data.wind.speed + ' m/s';
          const pressure = data.main.pressure + ' hPa';
          const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
          const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

          document.getElementById('location').textContent = `Location: ${location}`;
          document.getElementById('temperature').textContent = `Temperature: ${temperature}`;
          document.getElementById('forecast').textContent = `Forecast: ${forecast}`;
          document.getElementById('humidity').textContent = `Humidity: ${humidity}`;
          document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed}`;
          document.getElementById('pressure').textContent = `Pressure: ${pressure}`;
          document.getElementById('sunrise').textContent = `Sunrise: ${sunrise}`;
          document.getElementById('sunset').textContent = `Sunset: ${sunset}`;
        })
        .catch(err => {
          console.error(err);
          document.getElementById('weather').textContent = 'Unable to load weather.';
        });
    }, error => {
      document.getElementById('weather').textContent = 'Geolocation not available.';
    });
  } else {
    document.getElementById('weather').textContent = 'Geolocation not supported.';
  }
});
