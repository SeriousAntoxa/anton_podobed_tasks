import {toDoList} from "./todoData.js"
import {cleanTodoForm} from "./cleanTodoForm.js"

export let checkedTaskInTodo = (key, todoItemId) => {
  let checked = toDoList[key][todoItemId].status;
  if (checked === false) {
    toDoList[key][todoItemId].status = true;
  } else {
    toDoList[key][todoItemId].status = false;
  }
  cleanTodoForm();
}