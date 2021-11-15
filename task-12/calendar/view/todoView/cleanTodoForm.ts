import { formTodoTextarea, formTodoLists } from "../../model/todoModel/todoModel"


export let cleanTodoForm = (): void => {
  formTodoTextarea.value = "";
  formTodoLists.innerHTML = "";
}