import { nowDay } from "../calendarModel/calendarModel"

export const todoMain: HTMLElement = document.querySelector(".todo__main");
export const todoInfo: HTMLElement = document.querySelector(".todo__info");
export const todoDateSelect: HTMLElement = document.querySelector(".todo__date-select");
export const formTodoLists: HTMLElement = document.querySelector(".todo__lists");
export const formTodoList: NodeListOf<Element> = formTodoLists.querySelectorAll(".todo__list");
export const formTodoAddItemButton: HTMLButtonElement = document.querySelector(".todo__form-button");
export const formTodoTextarea: HTMLTextAreaElement = document.querySelector(".todo__form-textarea");

export let selectDay: { Day: number } = {
  Day: nowDay['Day']
}

interface TodoItem {
  task: string,
  status: boolean
}

type TodoItems = {
  [key: string]: TodoItem[] 
}

export let toDoList: TodoItems = JSON.parse(localStorage.getItem("ToDoList"));

