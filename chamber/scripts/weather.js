const WEATHER_URL_CURRENT = "https://api.openweathermap.org/data/2.5/weather?lat=39.1404&lon=-121.6169&appid=3d23aa6c5383ef16e852f3466e80c738&units=imperial";
const WEATHER_URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast?lat=39.1404&lon=-121.6169&appid=3d23aa6c5383ef16e852f3466e80c738&units=imperial";

const currentTemp = document.querySelector('#temperature');
const currentConditions = document.querySelector('#current-conditions');
const windSpeed = document.querySelector('#windspeed');
const windChill = document.querySelector('#windchill');
const forecastDiv = document.getElementById('forecast');

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;F`;
    currentConditions.innerText = data.weather[0].description;
    windSpeed.innerText = `${data.wind.speed.toFixed(1)}`;
    windChill.innerText = calculateWindChill(data.main.temp, data.wind.speed);
}

function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3.0) {
        return `${(
            35.74 +
            0.6215 * temp -
            35.75 * Math.pow(windSpeed, 0.16) +
            0.4275 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(1)}&deg;F`;
    } else {
        return 'N/A';
    }
}

function displayForecast(data) {
    forecastDiv.innerHTML = '';
    const forecastList = data.list.filter((item) => item.dt_txt.includes('12:00:00'));

    forecastList.slice(0, 3).forEach((forecast) => {
        const date = new Date(forecast.dt_txt).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
        });

        const forecastHTML = `
            <div class="forecast-day">
                <h4>${date}</h4>
                <p>Temp: ${forecast.main.temp.toFixed(1)}&deg;F</p>
                <p>${forecast.weather[0].description}</p>
                <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="${forecast.weather[0].description}">
            </div>
        `;
        forecastDiv.innerHTML += forecastHTML;
    });
}

async function fetchWeatherData() {
    try {
        const currentResponse = await fetch(WEATHER_URL_CURRENT);
        if (currentResponse.ok) {
            const currentData = await currentResponse.json();
            displayCurrentWeather(currentData);
        } else {
            throw Error(await currentResponse.text());
        }

        const forecastResponse = await fetch(WEATHER_URL_FORECAST);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            displayForecast(forecastData);
        } else {
            throw Error(await forecastResponse.text());
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchWeatherData);