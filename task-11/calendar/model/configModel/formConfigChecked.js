import {config, radioVisOtherDays, radioTodo, radioFirstDay, checkboxWeekends, configWeekends} from "./configData.js"

export let formConfigChecked = () => {
  if (config.visibleDaysOtherMonth === true) {
    radioVisOtherDays[0].checked = true;
  } else {
    radioVisOtherDays[1].checked = true;
  }

  if (config.ToDo === true) {
    radioTodo[0].checked = true;
  } else {
    radioTodo[1].checked = true;
  }

  if (config.ourWeek[0] === "MON") {
    radioFirstDay[0].checked = true;
  } else if (config.ourWeek[0] !== "MON") {
    radioFirstDay[1].checked = true;
  }

  checkboxWeekends.forEach((checkboxItem) => {
    if (configWeekends.includes(checkboxItem.value)) {
      checkboxItem.checked = true;
    }
  });
}