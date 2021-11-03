window.addEventListener("load", () => {
  getWeather();
  formConfigChecked();
  calendarRender();
  if (showTodo()) {
    todoRender();
  }
});


