import {monthArr, nowMonth, nowYear} from "../calendarModel/calendarData.js"
import {todoDateSelect, selectDay} from "./todoData.js"


export let infoDateTodo = () => {
  let nowMonthString = monthArr.find(
    (month, monthIndex) => monthIndex === nowMonth['Month']
  );
  todoDateSelect.innerHTML = `ToDo for ${selectDay['Day']} ${nowMonthString} ${nowYear['Year']}`;
}