const radioVisOtherDays = document.querySelectorAll(".radioVisOtherDays");
const radioTodo = document.querySelectorAll(".radioToDo");
const radioFirstDay = document.querySelectorAll(".radioFirstDay");
const checkboxWeekends = document.querySelectorAll(".checkboxWeekends");
const configFormButton = document.querySelector(".config-form__button");
const iconConfig = document.querySelector(".fa-cog");
const menuConfig = document.querySelector(".calendar__config-menu");

let config = JSON.parse(localStorage.getItem("config"));
let configOurWeek = config.ourWeek;
let configWeekends = config.weekends;
let configHolidays = config.holidays;
let configTodo = config.ToDo;

iconConfig.addEventListener("click", () => {
  iconConfigRotate();
});

configFormButton.addEventListener("click", (e) => {
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
  checkboxWeekends.forEach((checkbox) => {
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
  formConfigChecked();
  calendarRender();
  iconConfigRotate();
  showTodo();
});

let iconConfigRotate = () => {
  if (!menuConfig.classList.contains("calendar__config-menu_vis")) {
    iconConfig.classList.add("fa-cog_rotate-down");
    iconConfig.classList.remove("fa-cog_rotate-up");
  } else {
    iconConfig.classList.add("fa-cog_rotate-up");
    iconConfig.classList.remove("fa-cog_rotate-down");
  }

  menuConfig.classList.toggle("calendar__config-menu_vis");
};

let formConfigChecked = () => {
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
};

let showTodo = () => {
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
};
