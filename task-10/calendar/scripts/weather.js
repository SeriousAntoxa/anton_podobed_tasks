const weatherNowDay = document.querySelector(".weather__now-day");
const weatherNowCity = document.querySelector(".weather__now-city");
const weatherWeekDay = document.querySelectorAll(".weather__week-day");
const weatherWeekDays = document.querySelector(".weather__week-days");

const nowWeekDay = nowDate.getDay();

let colorWeather = (weatherData) => {
  let weatherDataDaily = weatherData.daily;
  let weekDay = nowWeekDay - 1;
  let weatherDay = nowDay;
  for (let day = 0; day <= weekDayArr.length - nowWeekDay; day++) {
    let averageTempInDay = averageTemp(weatherDataDaily[day].temp);
    let weatherIcon = weatherDataDaily[day].weather[0].icon;
    let weatherDesc = weatherDataDaily[day].weather[0].description;
    let newWeatherDiv = document.createElement("div");
    newWeatherDiv.className = "weather__week-day";
    newWeatherDiv.innerHTML = `
    <span>${
      weekDayArr[weekDay++]
    }</span><span>${weatherDay++}.${nowMonth}</span>
    <img src='https://openweathermap.org/img/wn/${weatherIcon}@2x.png' alt='${weatherDesc}' class='weather__week-day-img'>
    <p>${averageTempInDay} &#176C</p>
    `;
    weatherWeekDays.append(newWeatherDiv);
  }
};

let averageTemp = (temp) => {
  let average = (temp.morn + temp.day + temp.eve + temp.night) / 4;
  return average.toFixed();
};
