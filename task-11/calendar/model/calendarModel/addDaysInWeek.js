import {calWeekDay} from "./calendarData.js"
import {configOurWeek} from "../configModel/configData.js"

export let addDaysInWeek = () => {
  calWeekDay.forEach(
    (calWeekDayItem, calWeekDayIndex) =>
      (calWeekDayItem.innerHTML = configOurWeek[calWeekDayIndex])
  );
}