import {toDoList} from "./todoData.js"
import {cleanTodoForm} from "./cleanTodoForm.js"

export let deleteTaskInTodo = (key, todoItemId) => {
  toDoList[key].splice(todoItemId, 1);
  if (toDoList[key].length === 0) {
    delete toDoList[key];
  }
  cleanTodoForm();
}