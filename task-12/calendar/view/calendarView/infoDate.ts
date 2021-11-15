import {
  monthArr,
  calnowYear,
  calnowMonth,
  calnowDay,
  nowYear,
  nowDay,
  nowMonth,
} from "../../model/calendarModel/calendarModel";

export let infoDate = (): void => {
  let nowMonthString: string = monthArr.find(
    (month, monthIndex) => monthIndex === nowMonth["Month"]
  );
  calnowYear.innerHTML = `${nowYear["Year"]}`;
  calnowMonth.innerHTML = `${nowMonthString}`;
  calnowDay.innerHTML = `${nowDay["Day"]}`;
};
