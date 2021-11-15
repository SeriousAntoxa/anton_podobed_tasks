import { configRender } from "./view/configView/configRender"
import { configFormButtonClick, iconConfigClick } from "./controller/configController/configController"
import { calendarRender } from "./view/calendarView/calendarRender"
import { prevYearClick, nextYearClick, prevMonthClick, nextMonthClick } from "./controller/calendarController/calendarController"
import { showTodo } from "./view/todoView/showTodo"
import { todoRender } from "./view/todoView/todoRender"
import { calNumbersClick, formTodoTextareaEnter, formTodoAddItemButtonClick, formTodoListsClick } from "./controller/todoController/todoController"
import { weatherRender } from "./controller/weatherController/weatherRender"
import "./styles/main.scss";

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
