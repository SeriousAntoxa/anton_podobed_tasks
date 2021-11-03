const key = "f1ddfa583287f2bbec33f2c5761eec8a";
const requestURL = `https://api.openweathermap.org/data/2.5/onecall?lat=53.913891&lon=30.33639&units=metric&appid=${key}`;

async function getWeather() {
  let weatherData;
  try {
    let res = await fetch(requestURL);
    if (res.ok) {
      weatherData = await res.json();
    }
    await colorWeather(weatherData);
  } catch (err) {
    weatherWeekDays.innerHTML = `<p>Error - ${err.message}</p>`;
  }
}