import {radioTodo, config} from "../../model/configModel/configData.js"
import {todoMain, todoInfo} from "../../model/todoModel/todoData.js"

export let showTodo = () => {
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