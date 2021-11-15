import { weatherWeekDays, nowWeekDay } from "../../model/weatherModel/weatherModel"
import { nowDay, nowMonth, weekDayArr } from "../../model/calendarModel/calendarModel"
import { averageTemp } from "../../model/weatherModel/averageTemp"


export let colorWeather = (weatherData: any): void => {
  let weatherDataDaily: Array<any> = weatherData.daily;
  let weekDay: number = nowWeekDay - 1;
  let weatherDayNumb: number = nowDay['Day'];
  for (let day: number = 0; day <= weekDayArr.length - nowWeekDay; day++) {
    let averageTempInDay: string = averageTemp(weatherDataDaily[day].temp);
    let weatherIcon: number = weatherDataDaily[day].weather[0].icon;
    let weatherDesc: string = weatherDataDaily[day].weather[0].description;
    let newWeatherDiv: HTMLElement = document.createElement("div");
    newWeatherDiv.className = "weather__week-day";
    newWeatherDiv.innerHTML = `
    <span>${weekDayArr[weekDay++]
      }</span><span>${weatherDayNumb++}.${nowMonth['Month']}</span>
    <img src='https://openweathermap.org/img/wn/${weatherIcon}@2x.png' alt='${weatherDesc}' class='weather__week-day-img'>
    <p>${averageTempInDay} &#176C</p>
    `;
    weatherWeekDays.append(newWeatherDiv);
  }
}