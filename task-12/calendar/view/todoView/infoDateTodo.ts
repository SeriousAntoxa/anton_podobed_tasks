import {monthArr, nowMonth, nowYear} from "../../model/calendarModel/calendarModel"
import {todoDateSelect, selectDay} from "../../model/todoModel/todoModel"


export let infoDateTodo = (): void => {
  let nowMonthString: string = monthArr.find(
    (month, monthIndex) => monthIndex === nowMonth['Month']
  );
  todoDateSelect.innerHTML = `ToDo for ${selectDay['Day']} ${nowMonthString} ${nowYear['Year']}`;
}