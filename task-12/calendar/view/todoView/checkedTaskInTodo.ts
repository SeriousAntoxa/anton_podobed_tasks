import { toDoList } from "../../model/todoModel/todoModel"
import { cleanTodoForm } from "./cleanTodoForm"

export let checkedTaskInTodo = (key: string, todoItemId: number): void => {
  console.log(toDoList);
  
  let checked: boolean = toDoList[key][todoItemId].status;
  if (checked === false) {
    toDoList[key][todoItemId].status = true;
  } else {
    toDoList[key][todoItemId].status = false;
  }
  cleanTodoForm();
}