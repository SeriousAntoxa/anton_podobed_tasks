import {calendarRender} from "../../view/calendarView/calendarRender"
import {prevYear, nextYear, prevMonth, nextMonth, nowYear, nowMonth} from "../../model/calendarModel/calendarModel"


export let prevYearClick = prevYear.addEventListener("click", () => {
  nowYear['Year']--
  calendarRender()
})

export let nextYearClick = nextYear.addEventListener("click", () => {  
  nowYear['Year']++
  calendarRender()
})

export let prevMonthClick = prevMonth.addEventListener("click", () => {
  nowMonth['Month']--

  if (nowMonth['Month'] < 0) {
    nowYear['Year']--
    nowMonth['Month'] = 11
  }

  calendarRender()
})

export let nextMonthClick = nextMonth.addEventListener("click", () => {
  nowMonth['Month']++

  if (nowMonth['Month'] > 11) {
    nowYear['Year']++
    nowMonth['Month'] = 0
  }

  calendarRender()
})

