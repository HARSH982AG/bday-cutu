// 🎂 CHANGE ONLY THIS IF NEEDED
// Jan = 0 → January 14, 2026, 12:00 AM
const unlockTime = new Date(2026, 0, 14, 0, 0, 0).getTime();

const lock = document.getElementById("lock");
const letter = document.getElementById("letter");
const countdown = document.getElementById("countdown");
const waitMsg = document.getElementById("waitMsg");

function updateCountdown() {
  const diff = unlockTime - Date.now();

  if (diff <= 0) {
    lock.classList.add("hidden");
    letter.classList.remove("hidden");
    return;
  }

  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  countdown.textContent = `Unlocks in ${h}h ${m}m ${s}s`;

  if (diff > 3600000) {
    waitMsg.textContent = "Just a little patience… something special is waiting 💕";
  } else if (diff > 600000) {
    waitMsg.textContent = "Getting closer… my heart is racing 💗";
  } else if (diff > 60000) {
    waitMsg.textContent = "Almost there, Cutu… 💖";
  } else {
    waitMsg.textContent = "Any second now… 🫶🏻";
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
