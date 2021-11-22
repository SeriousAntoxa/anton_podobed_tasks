import {nowDate} from "../calendarModel/calendarModel"

export const weatherWeekDay: HTMLElement = document.querySelector(".weather__week-block");
export const weatherWeekDays: HTMLElement = document.querySelector(".weather__week-block-items");

export const nowWeekDay: number = nowDate.getDay();
