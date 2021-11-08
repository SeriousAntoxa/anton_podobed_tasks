import {nowDate} from "../calendarModel/calendarData.js"

export const weatherWeekDay = document.querySelectorAll(".weather__week-day");
export const weatherWeekDays = document.querySelector(".weather__week-days-items");

export const nowWeekDay = nowDate.getDay();
