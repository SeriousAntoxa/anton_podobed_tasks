import {infoDateTodo} from "./infoDateTodo"
import {cleanTodoForm} from "./cleanTodoForm"
import {addTodoTaskInForm} from "./addTodoTaskInForm"

export let todoRender = (): void => {
  infoDateTodo();
  cleanTodoForm();
  addTodoTaskInForm();
}