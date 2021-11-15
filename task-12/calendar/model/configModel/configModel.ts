export const radioVisOtherDays: any = document.querySelectorAll(".radioVisOtherDays");
export const radioTodo: any = document.querySelectorAll(".radioToDo");
export const radioFirstDay: any = document.querySelectorAll(".radioFirstDay");
export const checkboxWeekends: any = document.querySelectorAll(".checkboxWeekends");
export const configFormButton: HTMLElement = document.querySelector(".config-form__button");
export const iconConfig: HTMLElement = document.querySelector(".fa-cog");
export const menuConfig: HTMLElement = document.querySelector(".calendar__config-menu");

type holidaysType = {
  day: number,
  month: number
}

export let config: { ourWeek: Array<string>; weekends: Array<string>; holidays: holidaysType[]; visibleDaysOtherMonth: boolean; ToDo: boolean }

export let configVisibleDaysOtherMonth: boolean
export let configOurWeek: Array<string>
export let configWeekends: Array<string>
export let configHolidays: holidaysType[]
export let configTodo: boolean

export let configData = (): void => {
  config = JSON.parse(localStorage.getItem("config"));
  configVisibleDaysOtherMonth = config.visibleDaysOtherMonth;
  configOurWeek = config.ourWeek;
  configWeekends = config.weekends;
  configHolidays = config.holidays;
  configTodo = config.ToDo;
}