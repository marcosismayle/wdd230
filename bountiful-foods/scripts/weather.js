document.addEventListener('DOMContentLoaded', function() {
  const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&cnt=6&units=imperial&appid=bf5292bf7f04806d4f8e644e2e480fbf';

  // select HTML elements in the document
  const currentTemp = document.querySelector('#current-temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');
  const region = document.querySelector('#region');
  const humidity = document.querySelector('#humidity');
  const forecastTemp1 = document.querySelector('#forecast-temp1');
  const weatherIcon1 = document.querySelector('#weather-icon1');
  const forecastTemp2 = document.querySelector('#forecast-temp2');
  const weatherIcon2 = document.querySelector('#weather-icon2');
  const forecastTemp3 = document.querySelector('#forecast-temp3');
  const weatherIcon3 = document.querySelector('#weather-icon3');

  async function apiFetch() {
    try {
      const response = await fetch(url);
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

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
    region.innerHTML = `${weatherData.city.name}, ${weatherData.city.country}`;
    humidity.innerHTML = `<strong>${weatherData.list[0].main.humidity}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    //Forecast temperature
    
    forecastTemp1.innerHTML = `<strong>${weatherData.list[1].main.temp.toFixed(0)}</strong>`;
    forecastTemp2.innerHTML = `<strong>${weatherData.list[2].main.temp.toFixed(0)}</strong>`;
    forecastTemp3.innerHTML = `<strong>${weatherData.list[3].main.temp.toFixed(0)}</strong>`;

    const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.list[1].weather[0].icon}.png`;
    const desc1 = weatherData.list[1].weather[0].description;
    const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.list[2].weather[0].icon}.png`;
    const desc2 = weatherData.list[2].weather[0].description;
    const iconsrc3 = `https://openweathermap.org/img/w/${weatherData.list[3].weather[0].icon}.png`;
    const desc3 = weatherData.list[3].weather[0].description;

    weatherIcon1.setAttribute('src', iconsrc1);
    weatherIcon1.setAttribute('alt', desc1);
    weatherIcon2.setAttribute('src', iconsrc2);
    weatherIcon2.setAttribute('alt', desc2);
    weatherIcon3.setAttribute('src', iconsrc3);
    weatherIcon3.setAttribute('alt', desc3);
  }

  apiFetch();
});
