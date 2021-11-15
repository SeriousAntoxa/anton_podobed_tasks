import { configVisibleDaysOtherMonth, configTodo, configOurWeek, radioVisOtherDays, radioTodo, radioFirstDay, checkboxWeekends, configWeekends } from "../../model/configModel/configModel"

export let formConfigChecked = (): void => {
  if (configVisibleDaysOtherMonth === true) {
    radioVisOtherDays[0].checked = true;
  } else {
    radioVisOtherDays[1].checked = true;
  }

  if (configTodo === true) {
    radioTodo[0].checked = true;
  } else {
    radioTodo[1].checked = true;
  }

  if (configOurWeek[0] === "MON") {
    radioFirstDay[0].checked = true;
  } else if (configOurWeek[0] !== "MON") {
    radioFirstDay[1].checked = true;
  }

  checkboxWeekends.forEach((checkboxItem: any) => {
    if (configWeekends.includes(checkboxItem.value)) {
      checkboxItem.checked = true;
    }
  });
}