import { iconConfig, configFormButton, radioVisOtherDays, config, radioTodo, radioFirstDay, checkboxWeekends, configWeekends } from "../../model/configModel/configModel"
import { iconConfigRotate } from "../../model/configModel/iconConfigRotate"
import { showTodo } from "../../view/todoView/showTodo"
import { calendarRender } from "../../view/calendarView/calendarRender"
import { configRender } from "../../view/configView/configRender"


export let iconConfigClick = iconConfig.addEventListener("click", () => {
  iconConfigRotate();
})

export let configFormButtonClick = configFormButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (radioVisOtherDays[0].checked === true) {
    config.visibleDaysOtherMonth = true;
  } else {
    config.visibleDaysOtherMonth = false;
  }

  if (radioTodo[0].checked === true) {
    config.ToDo = true;
  } else {
    config.ToDo = false;
  }

  if (radioFirstDay[0].checked === true) {
    if (config.ourWeek[0] !== "MON") {
      let sun = config.ourWeek.shift();
      config.ourWeek.push(sun);
    }
  } else if (radioFirstDay[1].checked === true) {
    if (config.ourWeek[0] === "MON") {
      let sun = config.ourWeek.pop();
      config.ourWeek.unshift(sun);
    }
  }
  checkboxWeekends.forEach((checkbox: any) => {
    if (
      checkbox.checked === true &&
      configWeekends.includes(checkbox.value) === false
    ) {
      configWeekends.push(checkbox.value);
    } else if (
      checkbox.checked === false &&
      configWeekends.includes(checkbox.value) === true
    ) {
      configWeekends.find((weekend, index) => {
        if (weekend === checkbox.value) {
          configWeekends.splice(index, 1);
        }
      });
    }
  });
  localStorage.setItem("config", JSON.stringify(config));
  configRender();
  calendarRender();
  iconConfigRotate();
  showTodo();
})