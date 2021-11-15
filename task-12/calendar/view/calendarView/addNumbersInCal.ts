import { configVisibleDaysOtherMonth, configOurWeek } from "../../model/configModel/configModel"
import { nowYear, nowMonth, calNumber, weekDayArr } from "../../model/calendarModel/calendarModel"
import { colorHolidays } from "./colorHolidays"
import { colorNowDate } from "./colorNowDate"

export let addNumbersInCal = (): void => {
  let startWeek: number = new Date(nowYear["Year"], nowMonth["Month"], 0).getDay();
  let ourStartWeek: number = configOurWeek.findIndex(
    (ourWeekDay) =>
      ourWeekDay ===
      weekDayArr.find((weekDay, weekDayIndex) => weekDayIndex === startWeek)
  );
  let nowOurDate: Date = new Date(nowYear["Year"], nowMonth["Month"] + 1, 0);
  nowOurDate.setDate(nowOurDate.getDate());

  ourMonth(ourStartWeek, nowOurDate)

  if (configVisibleDaysOtherMonth) {
    prevMonth(ourStartWeek);
    nextMouth(ourStartWeek, nowOurDate);
  }
};

let prevMonth = (ourStartWeek: number): void => {
  let NumbInCalPrev: number = ourStartWeek - 1;
  let prevDate: Date = new Date(nowYear["Year"], nowMonth["Month"], 0);
  prevDate.setDate(prevDate.getDate());

  for (let n: number = prevDate.getDate(); n > 0; n--) {
    if (NumbInCalPrev >= 0) {
      calNumber[NumbInCalPrev].innerHTML = String(n);
      calNumber[NumbInCalPrev].classList.add("calendar__number_inactive");
    }

    NumbInCalPrev--;
  }
};

let nextMouth = (ourStartWeek: number, nowOurDate: Date): void => {
  let NumbInCalNext: number = ourStartWeek + nowOurDate.getDate();
  let nextDate: Date = new Date(nowYear["Year"], nowMonth["Month"] + 2, 0);
  nextDate.setDate(nextDate.getDate());

  for (let n: number = 1; n < nowOurDate.getDate(); n++) {
    if (NumbInCalNext <= calNumber.length - 1) {
      calNumber[NumbInCalNext].innerHTML = String(n);
      calNumber[NumbInCalNext].classList.add("calendar__number_inactive");
    }

    NumbInCalNext++;
  }
};

let ourMonth = (ourStartWeek: number, nowOurDate: Date) => {
  let numbInCal: number = ourStartWeek;
  for (let n: number = 1; n < nowOurDate.getDate() + 1; n++) {
    calNumber[numbInCal].innerHTML = String(n);
    calNumber[numbInCal].classList.add("calendar__number_nowMonth");
    colorHolidays(numbInCal, nowOurDate);
    colorNowDate(numbInCal);
    numbInCal++;
  }
}