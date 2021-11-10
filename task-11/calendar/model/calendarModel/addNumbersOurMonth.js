import {colorHolidays} from "./colorHolidays.js"
import {colorNowDate} from "./colorNowDate.js"
import {nowYear, nowMonth, calNumber, weekDayArr} from "./calendarData.js"
import {configOurWeek} from "../configModel/configData.js"

export let addNumbersOurMonth = () => {
  let startWeekDay = new Date(nowYear['Year'], nowMonth['Month'], 0).getDay();
  let ourStartWeek = configOurWeek.findIndex(
    (ourWeekDayItem) =>
      ourWeekDayItem ===
      weekDayArr.find((weekDay, weekDayIndex) => weekDayIndex === startWeekDay)
  );
  let numbInCal = ourStartWeek;
  let nowOurDate = new Date(nowYear['Year'], nowMonth['Month'] + 1, 0);
  nowOurDate.setDate(nowOurDate.getDate());

  for (let n = 1; n < nowOurDate.getDate() + 1; n++) {
    calNumber[numbInCal].innerHTML = n;
    calNumber[numbInCal].classList.add("calendar__number_nowMonth");
    colorHolidays(numbInCal, nowOurDate);
    colorNowDate(numbInCal);
    numbInCal++;
  }
}