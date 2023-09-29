let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let period = document.getElementById("period");
let day = document.getElementById("day");
let mon = document.getElementById("mon");
let date = document.getElementById("date");
let year = document.getElementById("year");

setInterval(() => {
  let currentTime = new Date();
  let hours = currentTime.getHours();

  //set time period AM/PM
  period.innerHTML = hours >= 12 ? (period = "PM") : (period = "AM");

  //set 12hour format
  hours = hours > 12 ? hours - 12 : hours;

  // zero before padding
  hr.innerHTML = (hours < 10 ? "0" : "") + hours;
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

  day.innerHTML = currentTime.toLocaleString("default", { weekday: "long" });
  mon.innerHTML = currentTime.toLocaleString("default", { month: "short" });
  year.innerHTML = currentTime.getFullYear();
  date.innerHTML = currentTime.getDate();
}, 100);
