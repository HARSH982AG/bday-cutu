// iOS-safe date: Jan = 0
const unlockTime = new Date(2025, 0, 14, 0, 0, 0).getTime();

const lock = document.getElementById("lock");
const letter = document.getElementById("letter");
const countdown = document.getElementById("countdown");
const music = document.getElementById("music");

// iOS audio unlock
document.body.addEventListener("click", () => {
  if (music.paused) music.play().catch(() => {});
}, { once: true });

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
}

updateCountdown();
setInterval(updateCountdown, 1000);
