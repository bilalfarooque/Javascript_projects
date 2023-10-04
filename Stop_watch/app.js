let [seconds, minutes, hours, milliSecs] = [0, 0, 0, 0];
let displayTime = document.getElementById("display");
let milliDisplay = document.getElementById("milli");
//initial timer status
let timer = null;

function stopwatch() {
  console.log("stopwatch running");
  milliSecs++;
  if(milliSecs===100){
    milliSecs = 0;
    seconds++
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  console.log(displayTime);

  let [s, m, h, ms] = [seconds, minutes, hours, milliSecs];
  //zero padding before
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  ms = ms < 10 ? "0" + ms : ms;

  displayTime.innerHTML = `${h}:${m}:${s}`;
  milliDisplay.innerHTML = `${ms}`
  //
}

function start() {
  console.log("play button clicked");
  if (timer !== null) {
    //agar timer null nhi hai to timer interval ko zero kardo/ start krdo
    clearInterval(timer);
  }
  //timer is updating each 1sec
  timer = setInterval(stopwatch, 10);
}

function pause(){
    //timer stops running
    clearInterval(timer);
}
function reset(){
    //timer stops running
    clearInterval(timer);
    [hours, minutes, seconds,milliSecs] = [0, 0 ,0, 0];
    displayTime.innerHTML = `00:00:00`;
    milliDisplay.innerHTML = `00`;
}
