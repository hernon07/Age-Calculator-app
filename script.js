const days = document.getElementById("days");
const months = document.getElementById("months");
const years = document.getElementById("years");

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const date = new Date();

day.addEventListener("input", function () {
  days.textContent = date.getDate() - day.value;
});

month.addEventListener("input", function () {
  months.textContent = Math.abs(date.getMonth() - month.value);
});

year.addEventListener("input", function () {
  years.textContent = Math.abs(date.getFullYear() - year.value) - 1;
});
