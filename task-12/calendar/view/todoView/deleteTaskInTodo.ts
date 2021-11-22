import { toDoList } from "../../model/todoModel/todoModel"
import { cleanTodoForm } from "./cleanTodoForm"

export let deleteTaskInTodo = (key: string, todoItemId: number): void => {
  toDoList[key].splice(todoItemId, 1);
  if (toDoList[key].length === 0) {
    delete toDoList[key];
  }
  cleanTodoForm();
}