import {configHolidays} from "../configModel/configData.js"
import {calNumber} from "./calendarData.js"

export let colorHolidays = (numbInCal, nowOurDate) => {
  configHolidays.forEach((holiday) => {
    if (
      +calNumber[numbInCal].innerHTML === holiday.day &&
      nowOurDate.getMonth() === holiday.month - 1
    ) {
      calNumber[numbInCal].classList.add("calendar__number_holiday");
    }
  });
}