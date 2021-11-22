import {
  calNumber,
  nowDay,
  nowMonth,
  nowYear,
  validMonth,
  validYear,
} from "../../model/calendarModel/calendarModel";

export let colorNowDate = (numbInCal: number): void => {
  if (
    Number(calNumber[numbInCal].innerHTML) === nowDay["Day"] &&
    validMonth === nowMonth["Month"] &&
    validYear === nowYear["Year"]
  ) {
    calNumber[numbInCal].classList.add("calendar__number_now");
  }
};
