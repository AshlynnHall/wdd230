const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?lat=43.8870929&lon=-111.6733693&appid=3d23aa6c5383ef16e852f3466e80c738&units=imperial";

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    captionDesc.innerText = data.weather[0].main;
    weatherIcon.setAttribute("src","https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png");
}

async function apiFetch() {
    try {
      const response = await fetch(WEATHER_URL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();