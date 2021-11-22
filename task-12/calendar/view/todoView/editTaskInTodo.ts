import { toDoList, formTodoLists, formTodoTextarea } from "../../model/todoModel/todoModel"

export let editTaskInTodo = (key: string, todoItemId: number): void => {
  formTodoTextarea.value = toDoList[key][todoItemId].task;
  toDoList[key].splice(todoItemId, 1);
  formTodoLists.innerHTML = "";
}