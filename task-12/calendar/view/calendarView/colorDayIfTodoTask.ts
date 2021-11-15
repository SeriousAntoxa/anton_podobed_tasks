import { config } from "../../model/configModel/configModel";
import { toDoList } from "../../model/todoModel/todoModel";
import { nowYear, nowMonth, calNumber } from "../../model/calendarModel/calendarModel"

export let colorDayIfTodoTask = (): void => {
  if (config.ToDo) {
    for (let dayElem of calNumber) {
      dayElem.classList.remove("calendar__number_ifTodoList");

      if (dayElem.classList.contains("calendar__number_nowMonth")) {
        Object.keys(toDoList).find((key) => {
          if (
            `${dayElem.innerHTML}-${nowMonth["Month"]}-${nowYear["Year"]}` ===
            key
          ) {
            dayElem.classList.add("calendar__number_ifTodoList");
          }
        });
      }
    }
  }
};
