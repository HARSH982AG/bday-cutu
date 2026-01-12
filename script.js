// 🔴 THIS ALERT MUST SHOW — OTHERWISE JS IS NOT LOADING
alert("JS LOADED — TEST MODE");

// 🧪 TEST MODE: unlock in 15 seconds
const unlockTime = Date.now() + 15 * 1000;

const lock = document.getElementById("lock");
const letter = document.getElementById("letter");
const countdown = document.getElementById("countdown");

let unlocked = false;

function updateCountdown() {
  if (unlocked) return;

  const diff = unlockTime - Date.now();

  if (diff <= 1000) {
    unlocked = true;
    lock.classList.add("hidden");
    letter.classList.remove("hidden");
    alert("UNLOCKED — COUNTDOWN WORKS");
    return;
  }

  const seconds = Math.ceil(diff / 1000);
  countdown.textContent = `Unlocks in ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
