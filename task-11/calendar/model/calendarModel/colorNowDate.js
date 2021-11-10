import {calNumber, nowDay, nowMonth, nowYear, validMonth, validYear} from "./calendarData.js"

export let colorNowDate = (numbInCal) => {
  
  if (
    +calNumber[numbInCal].innerHTML === nowDay['Day'] &&
    validMonth === nowMonth['Month'] &&
    validYear === nowYear['Year']
  ) {
    calNumber[numbInCal].classList.add("calendar__number_now");
  }
}