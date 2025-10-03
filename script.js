let [ms, sec, min, hr] = [0, 0, 0, 0];
let timer = null, running = false;
const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lapsDiv = document.getElementById('laps');

function updateDisplay() {
  const two = n => n.toString().padStart(2, "0");
  const twoMs = n => n.toString().padStart(2, "0");
  display.textContent = `${two(hr)}:${two(min)}:${two(sec)}.${twoMs(ms)}`;
}

function stopwatch() {
  ms += 1;
  if (ms === 100) {
    ms = 0; sec += 1;
  }
  if (sec === 60) {
    sec = 0; min += 1;
  }
  if (min === 60) {
    min = 0; hr += 1;
  }
  updateDisplay();
}

startBtn.onclick = function() {
  if (!running) {
    timer = setInterval(stopwatch, 10);
    running = true;
  }
};

pauseBtn.onclick = function() {
  clearInterval(timer);
  running = false;
  // Add lap time
  if (hr > 0 || min > 0 || sec > 0 || ms > 0) {
    const lap = document.createElement('div');
    lap.textContent = "Lap: " + display.textContent;
    lapsDiv.prepend(lap);
  }
};

resetBtn.onclick = function() {
  clearInterval(timer);
  [ms, sec, min, hr] = [0, 0, 0, 0];
  updateDisplay();
  running = false;
  lapsDiv.innerHTML = "";
};

updateDisplay();
