export const calnowYear = document.getElementById("calendar__now-date-year");
export const calnowMonth = document.getElementById("calendar__now-date-month");
export const calnowDay = document.getElementById("calendar__now-date-day");
export const calWeekDay = document.querySelectorAll(".calendar__week-day");
export const calWeeks = document.querySelectorAll(".calendar__week");
export const calNumbers = document.querySelector(".calendar__numbers");
export const calNumber = calNumbers.getElementsByTagName("span");
export const prevYear = document.getElementById("prev-year");
export const nextYear = document.getElementById("next-year");
export const prevMonth = document.getElementById("prev-month");
export const nextMonth = document.getElementById("next-month");

export const monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const weekDayArr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export let nowDate = new Date()
 let Year = nowDate.getFullYear()
 let Month = nowDate.getMonth()
 let Day = nowDate.getDate()
export let validMonth = nowDate.getMonth()
export let validYear = nowDate.getFullYear()

 export let nowYear = {
  Year : Year
 }
 export let nowMonth = {
  Month : Month
 }
 export let nowDay = {
  Day : Day
 }
 