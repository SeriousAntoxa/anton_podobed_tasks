import {configOurWeek} from "../configModel/configData.js"
import {configWeekends} from "../configModel/configData.js"
import {calWeeks} from "./calendarData.js"

export let colorWeekends = () => {
  configWeekends.forEach((weekend) => {
    let indexWeekendItem = configOurWeek.indexOf(weekend);
    calWeeks.forEach((week) => {
      week.children[indexWeekendItem].classList.add("calendar__number_weekend");
    });
  });
}