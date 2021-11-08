import {calNumbers, nowMonth, nowYear, calNumber} from "../../model/calendarModel/calendarData.js"
import {colorDayIfTodoTask} from "../../model/calendarModel/colorDayIfTodoTask.js"
import {formTodoTextarea, formTodoAddItemButton, formTodoLists, selectDay, toDoList} from "../../model/todoModel/todoData.js"
import {checkedTaskInTodo} from "../../model/todoModel/checkedTaskInTodo.js"
import {deleteTaskInTodo} from "../../model/todoModel/deleteTaskInTodo.js"
import {editTaskInTodo} from "../../model/todoModel/editTaskInTodo.js"
import {addTaskInTodo} from "../../model/todoModel/addTaskInTodo.js"
import {cleanTodoForm} from "../../model/todoModel/cleanTodoForm.js"
import {addTodoTaskInForm} from "../../model/todoModel/addTodoTaskInForm.js"
import {todoRender} from "./todoRender.js"

export let calNumbersClick = calNumbers.addEventListener("click", (e) => {
  let selectDayInCal = e.target;

  if (selectDayInCal.classList.contains("calendar__number_nowMonth")) {
    for (let dayElem of calNumber) {
      dayElem.classList.remove("calendar__number_select");
    }

    selectDayInCal.classList.add("calendar__number_select");
    selectDay['Day'] = selectDayInCal.innerHTML;
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
  let selectElem = e.target;

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