import { calWeekDay } from "../../model/calendarModel/calendarModel"
import { configOurWeek } from "../../model/configModel/configModel"

export let addDaysInWeek = (): void => {
  calWeekDay.forEach(
    (calWeekDayItem, calWeekDayIndex) =>
      (calWeekDayItem.innerHTML = configOurWeek[calWeekDayIndex])
  );
}