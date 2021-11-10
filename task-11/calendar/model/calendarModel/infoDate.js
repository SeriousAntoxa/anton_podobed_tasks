import {monthArr, calnowYear, calnowMonth, calnowDay, nowYear, nowDay, nowMonth} from "./calendarData.js"

export let infoDate = () => {
  let nowMonthString = monthArr.find(
    (month, monthIndex) => monthIndex === nowMonth['Month']
  );
  calnowYear.innerHTML = `${nowYear['Year']}`;
  calnowMonth.innerHTML = `${nowMonthString}`;
  calnowDay.innerHTML = `${nowDay['Day']}`;
}