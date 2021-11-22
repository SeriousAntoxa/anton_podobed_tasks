import { configHolidays } from "../../model/configModel/configModel";
import { calNumber } from "../../model/calendarModel/calendarModel"

export let colorHolidays = (numbInCal: number, nowOurDate: Date): void => {
  configHolidays.forEach((holiday) => {
    if (
      Number(calNumber[numbInCal].innerHTML) === holiday.day &&
      nowOurDate.getMonth() === holiday.month - 1
    ) {
      calNumber[numbInCal].classList.add("calendar__number_holiday");
    }
  });
};
