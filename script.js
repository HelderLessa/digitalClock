window.addEventListener("load", currentTime);

function currentTime() {
  const today = new Date();

  const day = document.querySelector("#day");
  const hour = document.querySelector("#hour");
  const minute = document.querySelector("#minute");
  const ampm = document.querySelector("#ampm");

  const daysWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  day.innerHTML = daysWeek[today.getDay()];
  hour.innerHTML =
    today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
  minute.innerHTML =
    today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
  ampm.innerHTML = today.getHours() < 12 ? "AM" : "PM";
  setTimeout(() => {
    currentTime();
  }, 1000);
}
