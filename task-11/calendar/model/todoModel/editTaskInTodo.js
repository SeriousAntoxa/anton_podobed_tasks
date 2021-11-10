import {toDoList, formTodoLists} from "./todoData.js"

export let editTaskInTodo = (key, todoItemId) => {
  document.getElementById("todoTextarea").value =
    toDoList[key][todoItemId].task;
  toDoList[key].splice(todoItemId, 1);
  formTodoLists.innerHTML = "";
}