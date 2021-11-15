import { toDoList, formTodoTextarea, selectDay } from "./todoModel"
import { nowMonth, nowYear } from "../calendarModel/calendarModel"

export let addTaskInTodo = (): void => {
  let newItemInTodo: string = ""
  Object.keys(toDoList).find((key) => {
    let keyArr: Array<string> = key.split("-");

    if (
      Number(keyArr[0]) === selectDay['Day'] &&
      Number(keyArr[1]) === nowMonth['Month'] &&
      Number(keyArr[2]) === nowYear['Year']
    ) {
      newItemInTodo = key;
    }
  })

  if (newItemInTodo === "" && formTodoTextarea.value !== "") {
    toDoList[`${selectDay.Day}-${nowMonth.Month}-${nowYear.Year}`] = [
      { task: formTodoTextarea.value, status: false },
    ];
  } else if (newItemInTodo !== "" && formTodoTextarea.value !== "") {
    toDoList[newItemInTodo].push({
      task: formTodoTextarea.value,
      status: false,
    });
  }

  localStorage.setItem("ToDoList", JSON.stringify(toDoList));
}