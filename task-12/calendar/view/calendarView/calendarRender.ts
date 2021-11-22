import {cleanerCalendar} from "./cleanerCalendar"
import {infoDate} from "./infoDate"
import {addDaysInWeek} from "./addDaysInWeek"
import {addNumbersInCal} from "./addNumbersInCal"
import {colorWeekends} from "./colorWeekends"
import {colorDayIfTodoTask} from "./colorDayIfTodoTask"

export function calendarRender() {
  cleanerCalendar();
  infoDate();
  addDaysInWeek();
  addNumbersInCal();
  colorWeekends();
  colorDayIfTodoTask();
}

