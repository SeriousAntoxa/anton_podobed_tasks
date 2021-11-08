import {nowDay} from "../calendarModel/calendarData.js"

export const todoMain = document.querySelector(".todo__main");
export const todoInfo = document.querySelector(".todo__info");
export const todoDateSelect = document.querySelector(".todo__date-select");
export const formTodoLists = document.querySelector(".todo__lists");
export const formTodoList = formTodoLists.querySelectorAll(".todo__list");
export const formTodoAddItemButton = document.querySelector(".todo__form-button");
export const formTodoTextarea = document.querySelector(".todo__form-textarea");

export let toDoList = JSON.parse(localStorage.getItem("ToDoList"));

export let selectDay = {
  Day : nowDay['Day'] 
}