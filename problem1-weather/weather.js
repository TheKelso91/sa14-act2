const apiKey = '73c2345c32ba4bd0b9e170648242703'; 
const cityForm = document.getElementById('cityForm');
const cityInput = document.getElementById('cityInput');
const weatherDisplay = document.getElementById('weatherDisplay');

cityForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const city = cityInput.value;
  fetchWeatherData(city);
});

function fetchWeatherData(city) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => console.error('Error:', error)); 
}

function displayWeather(data) {
  weatherDisplay.innerHTML = ` 
    <h2>${data.location.name}, ${data.location.country}</h2>
    <p>${data.location.localtime}</p>
    <div>
      <img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}">
      <h3>${data.current.temp_f}°F</h3> 
    </div>
    <p>Humidity: ${data.current.humidity}%</p>
    <h3>5-Day Forecast</h3>
    `;
}
