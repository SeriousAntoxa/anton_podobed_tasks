import {toDoList, formTodoTextarea, selectDay} from "./todoData.js"
import {nowMonth, nowYear} from "../calendarModel/calendarData.js"

export let addTaskInTodo = () => {
  let validDayInTodoList = "";
  Object.keys(toDoList).find((key) => {
    let keyArr = key.split("-");

    if (
      +keyArr[0] === +selectDay['Day'] &&
      +keyArr[1] === nowMonth['Month'] &&
      +keyArr[2] === nowYear['Year']
    ) {
      return (validDayInTodoList = key);
    }
  })

  if (validDayInTodoList === "" && formTodoTextarea.value !== "") {
    toDoList[`${selectDay['Day']}-${nowMonth['Month']}-${nowYear['Year']}`] = [
      { task: formTodoTextarea.value, status: false },
    ];
  } else if (validDayInTodoList !== "" && formTodoTextarea.value !== "") {
    toDoList[validDayInTodoList].push({
      task: formTodoTextarea.value,
      status: false,
    });
  }

  localStorage.setItem("ToDoList", JSON.stringify(toDoList));
}