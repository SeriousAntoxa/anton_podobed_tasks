let ToDoListFile = {
};

if (!localStorage.getItem("ToDoList")) {
  localStorage.setItem("ToDoList", JSON.stringify(ToDoListFile));
}
