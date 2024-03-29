import {calNumber} from "./calendarData.js"

export let cleanerCalendar = () => {
  for (let dayElem of calNumber) {
    dayElem.innerHTML = "";
    dayElem.classList.remove("calendar__number_now");
    dayElem.classList.remove("calendar__number_nowMonth");
    dayElem.classList.remove("calendar__number_inactive");
    dayElem.classList.remove("calendar__number_weekend");
    dayElem.classList.remove("calendar__number_select");
    dayElem.classList.remove("calendar__number_holiday");
    dayElem.classList.remove("calendar__number_ifTodoList");
  }
}