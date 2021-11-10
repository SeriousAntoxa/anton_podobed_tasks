export const radioVisOtherDays = document.querySelectorAll(".radioVisOtherDays");
export const radioTodo = document.querySelectorAll(".radioToDo");
export const radioFirstDay = document.querySelectorAll(".radioFirstDay");
export const checkboxWeekends = document.querySelectorAll(".checkboxWeekends");
export const configFormButton = document.querySelector(".config-form__button");
export const iconConfig = document.querySelector(".fa-cog");
export const menuConfig = document.querySelector(".calendar__config-menu");

export let config = JSON.parse(localStorage.getItem("config"));

export let configOurWeek = config.ourWeek;
export let configWeekends = config.weekends;
export let configHolidays = config.holidays;
export let configTodo = config.ToDo;

