export const calnowYear: HTMLElement = document.getElementById("calendar__now-date-year");
export const calnowMonth: HTMLElement = document.getElementById("calendar__now-date-month");
export const calnowDay: HTMLElement = document.getElementById("calendar__now-date-day");
export const calWeekDay: NodeListOf<Element> = document.querySelectorAll(".calendar__week-day");
export const calWeeks: NodeListOf<Element> = document.querySelectorAll(".calendar__week");
export const calNumbers: HTMLElement = document.querySelector(".calendar__numbers");
export const calNumber: HTMLCollectionOf<HTMLSpanElement> = calNumbers.getElementsByTagName("span");
export const prevYear: HTMLElement = document.getElementById("prev-year");
export const nextYear: HTMLElement = document.getElementById("next-year");
export const prevMonth: HTMLElement = document.getElementById("prev-month");
export const nextMonth: HTMLElement = document.getElementById("next-month");

export const monthArr: Array<string> = [
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

export const weekDayArr: Array<string> = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export let nowDate: Date = new Date()
let Year: number = nowDate.getFullYear()
let Month: number = nowDate.getMonth()
let Day: number = nowDate.getDate()
export let validMonth: number = nowDate.getMonth()
export let validYear: number = nowDate.getFullYear()

export let nowYear: { Year: number } = {
  Year: Year
}
export let nowMonth: { Month: number } = {
  Month: Month
}
export let nowDay: { Day: number } = {
  Day: Day
}
