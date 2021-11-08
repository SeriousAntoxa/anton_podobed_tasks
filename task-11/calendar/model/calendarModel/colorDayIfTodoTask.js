import {config} from "../configModel/configData.js"
import {toDoList} from "../todoModel/todoData.js"
import {nowYear, nowMonth, calNumber} from "./calendarData.js"

export let colorDayIfTodoTask = () => {
  if (config.ToDo) {
    for (let dayElem of calNumber) {
      dayElem.classList.remove("calendar__number_ifTodoList");

      if (dayElem.classList.contains("calendar__number_nowMonth")) {
        Object.keys(toDoList).find((key) => {
          if (`${dayElem.innerHTML}-${nowMonth['Month']}-${nowYear['Year']}` === key) {
            dayElem.classList.add("calendar__number_ifTodoList");
          }
        });
      }
    }
  }
}