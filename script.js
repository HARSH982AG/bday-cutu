// 🎂 14 Jan 2026 — 12:00 AM
// Jan = 0
const unlockTime = Date.now() + 60 * 1000; // TEST MODE: unlock in 60 seconds




const lock = document.getElementById("lock");
const letter = document.getElementById("letter");
const countdown = document.getElementById("countdown");
const waitMsg = document.getElementById("waitMsg");

/* 🌸 Rose petal confetti */
function launchConfetti() {
  const petals = ["🌸", "💮", "🌺"];

  for (let i = 0; i < 40; i++) {
    const petal = document.createElement("div");
    petal.className = "confetti";
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 3 + Math.random() * 2 + "s";

    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 5000);
  }
}

/* 📳 Gentle vibration */
function vibrateOnUnlock() {
  if ("vibrate" in navigator) {
    navigator.vibrate([100, 50, 100]);
  }
}

function updateCountdown() {
  const diff = unlockTime - Date.now();

  if (diff <= 1000) {
    lock.classList.add("hidden");
    letter.classList.remove("hidden");
    launchConfetti();
    vibrateOnUnlock();
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
