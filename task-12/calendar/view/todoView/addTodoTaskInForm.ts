import { toDoList, selectDay, formTodoLists } from "../../model/todoModel/todoModel"
import { nowMonth, nowYear } from "../../model/calendarModel/calendarModel"


export let addTodoTaskInForm = (): void => {
  Object.keys(toDoList).forEach((key) => {
    if (`${selectDay['Day']}-${nowMonth['Month']}-${nowYear['Year']}` === key) {
      let idCount = 0;
      for (let value of toDoList[key]) {
        let newTask = document.createElement("li");
        newTask.className = "todo__list";
        newTask.id = `${idCount++}`;
        newTask.innerHTML = `<div class="todo__list-task">
            <i class="far fa-check-square todo__list-check todo__icon" data-check="${value.status}"></i>
          <textarea class="todo__list-description todo__list-description_${value.status}" disabled>${value.task}</textarea>
        </div>
        <div class="todo__list-controls">
        <i class="fas fa-edit todo__list-edit todo__icon"></i>
        <i class="fas fa-trash-alt todo__list-delete todo__icon"></i>
        </div>`;
        formTodoLists.append(newTask);
      }
    }
  });
}