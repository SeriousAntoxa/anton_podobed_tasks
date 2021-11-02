const calNowYear = document.getElementById("calendar__now-date-year");
const calNowMonth = document.getElementById("calendar__now-date-month");
const calNowDay = document.getElementById("calendar__now-date-day");
const calWeekDay = document.querySelectorAll(".calendar__week-day");
const calWeeks = document.querySelectorAll(".calendar__week");
const calNumbers = document.querySelector(".calendar__numbers");
const calNumber = calNumbers.getElementsByTagName("span");
const prevYear = document.getElementById("prev-year");
const nextYear = document.getElementById("next-year");
const prevMonth = document.getElementById("prev-month");
const nextMonth = document.getElementById("next-month");

const monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDayArr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

let nowDate = new Date();
let nowYear = nowDate.getFullYear();
let nowMonth = nowDate.getMonth();
let nowDay = nowDate.getDate();
let validMonth = nowDate.getMonth();
let validYear = nowDate.getFullYear();

prevYear.addEventListener("click", () => {
  nowYear--;
  calendarRender();
});

nextYear.addEventListener("click", () => {
  nowYear++;
  calendarRender();
});

prevMonth.addEventListener("click", () => {
  nowMonth--;

  if (nowMonth < 0) {
    nowYear--;
    nowMonth = 11;
  }

  calendarRender();
});

nextMonth.addEventListener("click", () => {
  nowMonth++;

  if (nowMonth > 11) {
    nowYear++;
    nowMonth = 0;
  }

  calendarRender();
});

let cleanerCalendar = () => {
  for (let dayElem of calNumber) {
    dayElem.innerHTML = "";
    dayElem.classList.remove("calendar__number_now");
    dayElem.classList.remove("calendar__number_nowMonth");
    dayElem.classList.remove("calendar__number_inactive");
    dayElem.classList.remove("calendar__number_weekend");
    dayElem.classList.remove("calendar__number_select");
    dayElem.classList.remove("calendar__number_holiday");
    dayElem.classList.remove("calendar__number_ifTodoList");
  }
};

let infoDate = () => {
  let nowMonthString = monthArr.find(
    (month, monthIndex) => monthIndex === nowMonth
  );
  calNowYear.innerHTML = `${nowYear}`;
  calNowMonth.innerHTML = `${nowMonthString}`;
  calNowDay.innerHTML = `${nowDay}`;
};

let addDaysInWeek = () => {
  calWeekDay.forEach(
    (calWeekDayItem, calWeekDayIndex) =>
      (calWeekDayItem.innerHTML = configOurWeek[calWeekDayIndex])
  );
};

let addNumbersOtherMonth = () => {
  if (config.visibleDaysOtherMonth) {
    let startWeek = new Date(nowYear, nowMonth, 0).getDay();
    let ourStartWeek = configOurWeek.findIndex(
      (ourWeekDay) =>
        ourWeekDay ===
        weekDayArr.find((weekDay, weekDayIndex) => weekDayIndex === startWeek)
    );
    nowOurDate = new Date(nowYear, nowMonth + 1, 0);
    nowOurDate.setDate(nowOurDate.getDate());
    let NumbInCalPrev = ourStartWeek - 1;
    let prevDate = new Date(nowYear, nowMonth, 0);
    prevDate.setDate(prevDate.getDate());

    for (n = prevDate.getDate(); n > 0; n--) {
      if (NumbInCalPrev >= 0) {
        calNumber[NumbInCalPrev].innerHTML = n;
        calNumber[NumbInCalPrev].classList.add("calendar__number_inactive");
      }

      NumbInCalPrev--;
    }

    let NumbInCalNext = ourStartWeek + nowOurDate.getDate();
    let nextDate = new Date(nowYear, nowMonth + 2, 0);
    nextDate.setDate(nextDate.getDate());

    for (n = 1; n < nowOurDate.getDate(); n++) {
      if (NumbInCalNext <= calNumber.length - 1) {
        calNumber[NumbInCalNext].innerHTML = n;
        calNumber[NumbInCalNext].classList.add("calendar__number_inactive");
      }

      NumbInCalNext++;
    }
  }
};

let addNumbersOurMonth = () => {
  let startWeekDay = new Date(nowYear, nowMonth, 0).getDay();
  let ourStartWeek = configOurWeek.findIndex(
    (ourWeekDayItem) =>
      ourWeekDayItem ===
      weekDayArr.find((weekDay, weekDayIndex) => weekDayIndex === startWeekDay)
  );
  let numbInCal = ourStartWeek;
  nowOurDate = new Date(nowYear, nowMonth + 1, 0);
  nowOurDate.setDate(nowOurDate.getDate());

  for (n = 1; n < nowOurDate.getDate() + 1; n++) {
    calNumber[numbInCal].innerHTML = n;
    calNumber[numbInCal].classList.add("calendar__number_nowMonth");
    colorHolidays(numbInCal);
    colorNowDate(numbInCal);
    numbInCal++;
  }
};

let colorNowDate = (numbInCal) => {
  if (+calNumber[numbInCal].innerHTML === nowDay && validMonth === nowMonth && validYear === nowYear) {
    calNumber[numbInCal].classList.add("calendar__number_now");
  }
};

let colorWeekends = () => {
  configWeekends.forEach((weekend) => {
    let indexWeekendItem = configOurWeek.indexOf(weekend);
    calWeeks.forEach((week) => {
      week.children[indexWeekendItem].classList.add("calendar__number_weekend");
    });
  });
};

let colorHolidays = (numbInCal) => {
  configHolidays.forEach((holiday) => {
    if (
      +calNumber[numbInCal].innerHTML === holiday.day &&
      nowOurDate.getMonth() === holiday.month - 1
    ) {
      calNumber[numbInCal].classList.add("calendar__number_holiday");
    }
  });
};

let colorDayIfTodoTask = () => {
  if (config.ToDo) {
    for (let dayElem of calNumber) {
      dayElem.classList.remove("calendar__number_ifTodoList");

      if (dayElem.classList.contains("calendar__number_nowMonth")) {
        Object.keys(toDoList).find((key) => {
          if (`${dayElem.innerHTML}-${nowMonth}-${nowYear}` === key) {
            dayElem.classList.add("calendar__number_ifTodoList");
          }
        });
      }
    }
  }
};

let calendarRender = () => {
  cleanerCalendar();
  infoDate();
  addDaysInWeek();
  addNumbersOurMonth();
  addNumbersOtherMonth();
  colorWeekends();
  colorDayIfTodoTask();
};
