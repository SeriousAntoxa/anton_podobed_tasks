import {config} from "../configModel/configData.js"
import {nowYear, nowMonth, calNumber, weekDayArr} from "./calendarData.js"
import {configOurWeek} from "../configModel/configData.js"

export let addNumbersOtherMonth = () => {
  if (config.visibleDaysOtherMonth) {
    let startWeek = new Date(nowYear['Year'], nowMonth['Month'], 0).getDay();
    let ourStartWeek = configOurWeek.findIndex(
      (ourWeekDay) =>
        ourWeekDay ===
        weekDayArr.find((weekDay, weekDayIndex) => weekDayIndex === startWeek)
    );
    let nowOurDate = new Date(nowYear['Year'], nowMonth['Month'] + 1, 0);
    nowOurDate.setDate(nowOurDate.getDate());
    let NumbInCalPrev = ourStartWeek - 1;
    let prevDate = new Date(nowYear['Year'], nowMonth['Month'], 0);
    prevDate.setDate(prevDate.getDate());

    for (let n = prevDate.getDate(); n > 0; n--) {
      if (NumbInCalPrev >= 0) {
        calNumber[NumbInCalPrev].innerHTML = n;
        calNumber[NumbInCalPrev].classList.add("calendar__number_inactive");
      }

      NumbInCalPrev--;
    }

    let NumbInCalNext = ourStartWeek + nowOurDate.getDate();
    let nextDate = new Date(nowYear['Year'], nowMonth['Month'] + 2, 0);
    nextDate.setDate(nextDate.getDate());

    for (let n = 1; n < nowOurDate.getDate(); n++) {
      if (NumbInCalNext <= calNumber.length - 1) {
        calNumber[NumbInCalNext].innerHTML = n;
        calNumber[NumbInCalNext].classList.add("calendar__number_inactive");
      }

      NumbInCalNext++;
    }
  }
}