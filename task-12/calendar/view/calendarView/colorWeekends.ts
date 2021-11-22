import { configOurWeek, configWeekends } from "../../model/configModel/configModel";
import { calWeeks } from "../../model/calendarModel/calendarModel";

export let colorWeekends = (): void => {
  configWeekends.forEach((weekend) => {
    let indexWeekendItem: number = configOurWeek.indexOf(weekend);
    calWeeks.forEach((week) => {
      week.children[indexWeekendItem].classList.add("calendar__number_weekend");
    });
  });
};
