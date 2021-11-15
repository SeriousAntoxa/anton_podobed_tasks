import {weatherWeekDays} from "../../model/weatherModel/weatherModel"
import {colorWeather} from "../../view/weatherView/colorWeather"

export async function weatherRender() {

  const key: string = "f1ddfa583287f2bbec33f2c5761eec8a";
  const requestURL: string = `https://api.openweathermap.org/data/2.5/onecall?lat=53.913891&lon=30.33639&units=metric&appid=${key}`;

  let weatherData: Object;
  try {
    let res: Response = await fetch(requestURL);
    
    if (res.ok) {
      weatherData = await res.json() as Object;
    }
    console.log(weatherData)
    
    await colorWeather(weatherData);
  } catch (err) {
    weatherWeekDays.innerHTML = `<p>Error - ${err.message}</p>`;
  }
}
