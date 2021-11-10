import {formTodoTextarea, formTodoLists} from "./todoData.js"


export let cleanTodoForm = () => {
  formTodoTextarea.value = "";
  formTodoLists.innerHTML = "";
}