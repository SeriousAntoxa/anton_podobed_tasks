import {calNumbers, nowMonth, nowYear, calNumber} from "../../model/calendarModel/calendarModel"
import {colorDayIfTodoTask} from "../../view/calendarView/colorDayIfTodoTask"
import {formTodoTextarea, formTodoAddItemButton, formTodoLists, selectDay, toDoList} from "../../model/todoModel/todoModel"
import {checkedTaskInTodo} from "../../view/todoView/checkedTaskInTodo"
import {deleteTaskInTodo} from "../../view/todoView/deleteTaskInTodo"
import {editTaskInTodo} from "../../view/todoView/editTaskInTodo"
import {addTaskInTodo} from "../../model/todoModel/addTaskInTodo"
import {cleanTodoForm} from "../../view/todoView/cleanTodoForm"
import {addTodoTaskInForm} from "../../view/todoView/addTodoTaskInForm"
import {todoRender} from "../../view/todoView/todoRender"

export let calNumbersClick = calNumbers.addEventListener("click", (e) => {
  let selectDayInCal: HTMLElement = e.target as HTMLElement;

  if (selectDayInCal.classList.contains("calendar__number_nowMonth")) {
    for (let dayElem of calNumber) {
      dayElem.classList.remove("calendar__number_select");
    }

    selectDayInCal.classList.add("calendar__number_select");
    selectDay['Day'] = Number(selectDayInCal.innerHTML);
    todoRender();
  }
})

export let formTodoTextareaEnter = formTodoTextarea.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    e.preventDefault();
    addTaskInTodo();
    cleanTodoForm();
    addTodoTaskInForm();
    colorDayIfTodoTask();
  }
})

export let formTodoAddItemButtonClick = formTodoAddItemButton.addEventListener("click", (e) => {
  e.preventDefault();
  addTaskInTodo();
  cleanTodoForm();
  addTodoTaskInForm();
  colorDayIfTodoTask();
})

export let formTodoListsClick = formTodoLists.addEventListener("click", (e) => {
  let selectElem: HTMLElement = e.target as HTMLElement;

  if (selectElem.closest(".todo__list")) {
    let todoItem = selectElem.closest(".todo__list");
    let todoItemId = +todoItem.id;
    let key = `${selectDay['Day']}-${nowMonth['Month']}-${nowYear['Year']}`;

    if (selectElem.classList.contains("todo__list-check")) {
      checkedTaskInTodo(key, todoItemId);
    } else if (selectElem.classList.contains("todo__list-delete")) {
      deleteTaskInTodo(key, todoItemId);
    } else if (selectElem.classList.contains("todo__list-edit")) {
      editTaskInTodo(key, todoItemId);
    } else return false;
    addTodoTaskInForm();
  }

  localStorage.setItem("ToDoList", JSON.stringify(toDoList));
  colorDayIfTodoTask();
})