import {infoDateTodo} from "../../model/todoModel/infoDateTodo.js"
import {cleanTodoForm} from "../../model/todoModel/cleanTodoForm.js"
import {addTodoTaskInForm} from "../../model/todoModel/addTodoTaskInForm.js"

export let todoRender = () => {
  infoDateTodo();
  cleanTodoForm();
  addTodoTaskInForm();
}