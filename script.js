// 🔒 LOCKED TO IST (UTC +5:30)
function getISTTime() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 5.5 * 60 * 60 * 1000);
}

// 🎂 14 Jan 2026, 12:00 AM IST
const unlockTimeIST = new Date(2026, 0, 14, 0, 0, 0).getTime();

const lock = document.getElementById("lock");
const letter = document.getElementById("letter");
const countdown = document.getElementById("countdown");
const music = document.getElementById("music");

// 🎧 iOS audio unlock
document.body.addEventListener(
  "click",
  () => {
    if (music && music.paused) {
      music.play().catch(() => {});
    }
  },
  { once: true }
);

function updateCountdown() {
  const nowIST = getISTTime().getTime();
  const diff = unlockTimeIST - nowIST;

  if (diff <= 0) {
    lock.classList.add("hidden");
    letter.classList.remove("hidden");
    return;
  }

  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  countdown.textContent = `Unlocks in ${h}h ${m}m ${s}s (IST)`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
