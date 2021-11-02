const todoMain = document.querySelector(".todo__main");
const todoInfo = document.querySelector(".todo__info");
const todoDateSelect = document.querySelector(".todo__date-select");
const formTodoLists = document.querySelector(".todo__lists");
const formTodoList = formTodoLists.querySelectorAll(".todo__list");
const formTodoAddItemButton = document.querySelector(".todo-form__button");
const formTodoTextarea = document.querySelector(".todo-form__textarea");

let toDoList = JSON.parse(localStorage.getItem("ToDoList"));

let selectDay = nowDay;

calNumbers.addEventListener("click", (e) => {
  selectDay = e.target;

  if (selectDay.classList.contains("calendar__number_nowMonth")) {
    for (let dayElem of calNumber) {
      dayElem.classList.remove("calendar__number_select");
    }

    selectDay.classList.add("calendar__number_select");
    selectDay = selectDay.innerHTML;
    todoRender()
    addTodoTaskInForm();
  }
});

formTodoTextarea.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    e.preventDefault();
    addTaskInTodo();
    cleanTodoForm();
    addTodoTaskInForm();
    colorDayIfTodoTask();
  }
});

formTodoAddItemButton.addEventListener("click", (e) => {
  e.preventDefault();
  addTaskInTodo();
  cleanTodoForm();
  addTodoTaskInForm();
  colorDayIfTodoTask();
});

formTodoLists.addEventListener("click", (e) => {
  let selectElem = e.target;

  if (selectElem.closest(".todo__list")) {
    let todoItem = selectElem.closest(".todo__list");
    let todoItemId = +todoItem.id;
    let key = `${selectDay}-${nowMonth}-${nowYear}`;

    if (selectElem.classList.contains("todo__list-check")) {
      checkedTaskInTodo(key, todoItemId);
    } else if (selectElem.classList.contains("todo__list-delete")) {
      deleteTaskInTodo(key, todoItemId);
    } else if (selectElem.classList.contains("todo__list-edit")) {
      editTaskInTodo(key, todoItemId);
    }
    addTodoTaskInForm();
  }

  localStorage.setItem("ToDoList", JSON.stringify(toDoList));
  colorDayIfTodoTask();
});

let addTaskInTodo = () => {
  let validDayInTodoList = "";
  Object.keys(toDoList).find((key) => {
    let keyArr = key.split("-");

    if (
      +keyArr[0] === +selectDay &&
      +keyArr[1] === nowMonth &&
      +keyArr[2] === nowYear
    ) {
      return (validDayInTodoList = key);
    }
  });

  if (validDayInTodoList === "" && formTodoTextarea.value !== "") {
    toDoList[`${selectDay}-${nowMonth}-${nowYear}`] = [
      { task: formTodoTextarea.value, status: false },
    ];
  } else if (validDayInTodoList !== "" && formTodoTextarea.value !== "") {
    toDoList[validDayInTodoList].push({
      task: formTodoTextarea.value,
      status: false,
    });
  }

  localStorage.setItem("ToDoList", JSON.stringify(toDoList));
};

let infoDateTodo = () => {
  let nowMonthString = monthArr.find(
    (month, monthIndex) => monthIndex === nowMonth
  );
  todoDateSelect.innerHTML = `${selectDay} ${nowMonthString} ${nowYear}`;
};

let cleanTodoForm = () => {
  formTodoTextarea.value = "";
  formTodoLists.innerHTML = "";
};

let addTodoTaskInForm = () => {
  Object.keys(toDoList).forEach((key) => {
    if (`${selectDay}-${nowMonth}-${nowYear}` === key) {
      let idCount = 0;

      for (let value of toDoList[key]) {
        let newTask = document.createElement("li");
        newTask.className = "todo__list";
        newTask.id = `${idCount++}`;
        newTask.innerHTML = `<div class="todo__list-task">
            <i class="far fa-check-square todo__list-check todo__icon" data-check="${value.status}"></i>
          <p class="todo__list-description todo__list-description_${value.status}">${value.task}</p>
        </div>
        <div class="todo__list-controls">
        <i class="fas fa-edit todo__list-edit todo__icon"></i>
        <i class="fas fa-trash-alt todo__list-delete todo__icon"></i>
        </div>`;
        formTodoLists.append(newTask);
      }
    }
  });
};

let checkedTaskInTodo = (key, todoItemId) => {
  let checked = toDoList[key][todoItemId].status;
  if (checked === false) {
    toDoList[key][todoItemId].status = true;
  } else {
    toDoList[key][todoItemId].status = false;
  }
  cleanTodoForm();
  
};

let deleteTaskInTodo = (key, todoItemId) => {
  toDoList[key].splice(todoItemId, 1);
  if (toDoList[key].length === 0) {
    delete toDoList[key];
  }
  cleanTodoForm();
};

let editTaskInTodo = (key, todoItemId) => {
  document.getElementById("todoTextarea").value =
    toDoList[key][todoItemId].task;
  toDoList[key].splice(todoItemId, 1);
  formTodoLists.innerHTML = "";
};

let todoRender = () => {
  infoDateTodo();
  cleanTodoForm();
}