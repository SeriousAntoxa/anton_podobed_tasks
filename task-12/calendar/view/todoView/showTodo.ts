import {radioTodo, config} from "../../model/configModel/configModel"
import {todoMain, todoInfo} from "../../model/todoModel/todoModel"

export let showTodo = (): boolean => {
  if (radioTodo[0].checked === true) {
    config.ToDo = true;
    todoMain.classList.remove("todo__main_hidden");
    todoInfo.classList.add("todo__info_hidden");
    return true;
  } else {
    config.ToDo = false;
    todoMain.classList.add("todo__main_hidden");
    todoInfo.classList.remove("todo__info_hidden");
    return false;
  }
}