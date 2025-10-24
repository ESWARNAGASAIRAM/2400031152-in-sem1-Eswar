import { fetchWeather } from './weather.js';
const apiKey = '7ee7b3f0493dec0add70f3e31952442a'; // Replace with your 
actual API key
const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityInput = document.getElementById('cityInput');
const weatherDisplay = document.getElementById('weatherDisplay');
getWeatherBtn.addEventListener('click', async () => {
const city = cityInput.value.trim();
if (city) {
weatherDisplay.innerHTML = '<p>Loading...</p>';
const displayText = await fetchWeather(city, apiKey);
weatherDisplay.textContent = displayText;
} else {
weatherDisplay.textContent = "Please enter a city name.";
}
});
