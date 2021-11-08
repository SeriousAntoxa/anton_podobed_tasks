import {cleanerCalendar} from "../../model/calendarModel/cleanerCalendar.js"
import {infoDate} from "../../model/calendarModel/infoDate.js"
import {addDaysInWeek} from "../../model/calendarModel/addDaysInWeek.js"
import {addNumbersOurMonth} from "../../model/calendarModel/addNumbersOurMonth.js"
import {addNumbersOtherMonth} from "../../model/calendarModel/addNumbersOtherMonth.js"
import {colorWeekends} from "../../model/calendarModel/colorWeekends.js"
import {colorDayIfTodoTask} from "../../model/calendarModel/colorDayIfTodoTask.js"

export function calendarRender() {
  cleanerCalendar();
  infoDate();
  addDaysInWeek();
  addNumbersOurMonth();
  addNumbersOtherMonth();
  colorWeekends();
  colorDayIfTodoTask();
}

