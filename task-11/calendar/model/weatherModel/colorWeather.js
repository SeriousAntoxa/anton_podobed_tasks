import {weatherWeekDays, nowWeekDay} from "./weatherData.js"
import {nowDay, nowMonth, weekDayArr} from "../calendarModel/calendarData.js"
import {averageTemp} from "./averageTemp.js"


export let colorWeather = (weatherData) => {
  let weatherDataDaily = weatherData.daily;
  let weekDay = nowWeekDay - 1; 
  let weatherDayNumb = nowDay['Day'];
  for (let day = 0; day <= weekDayArr.length - nowWeekDay; day++) {
    let averageTempInDay = averageTemp(weatherDataDaily[day].temp);
    let weatherIcon = weatherDataDaily[day].weather[0].icon;
    let weatherDesc = weatherDataDaily[day].weather[0].description;
    let newWeatherDiv = document.createElement("div");
    newWeatherDiv.className = "weather__week-day";
    newWeatherDiv.innerHTML = `
    <span>${
      weekDayArr[weekDay++]
    }</span><span>${weatherDayNumb++}.${nowMonth['Month']}</span>
    <img src='https://openweathermap.org/img/wn/${weatherIcon}@2x.png' alt='${weatherDesc}' class='weather__week-day-img'>
    <p>${averageTempInDay} &#176C</p>
    `;
    weatherWeekDays.append(newWeatherDiv);
  }
}