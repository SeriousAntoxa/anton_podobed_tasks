import {configRender} from "../controller/configController/configRender.js"
import {configFormButtonClick, iconConfigClick} from "../controller/configController/configController.js"
import {calendarRender} from "../controller/calendarController/calendarRender.js"
import {prevYearClick, nextYearClick, prevMonthClick, nextMonthClick} from "../controller/calendarController/calendarController.js"
import {showTodo} from "../controller/todoController/showTodo.js"
import {todoRender} from "../controller/todoController/todoRender.js"
import {calNumbersClick, formTodoTextareaEnter, formTodoAddItemButtonClick, formTodoListsClick} from "../controller/todoController/todoController.js"
import {weatherRender} from "../controller/weatherController/weatherRender.js"
import "../styles/main.scss";

window.addEventListener("load", () => {
  configRender();
  calendarRender();
  if (showTodo()) {
    todoRender();
  }

  prevYearClick
  nextYearClick
  prevMonthClick
  nextMonthClick

  configFormButtonClick
  iconConfigClick

  calNumbersClick
  formTodoTextareaEnter
  formTodoAddItemButtonClick
  formTodoListsClick

  weatherRender();
});
