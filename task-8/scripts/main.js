window.addEventListener("load", () => {
  formConfigChecked();
  calendarRender();
  if (showTodo()) {
    todoRender();
  }
});


