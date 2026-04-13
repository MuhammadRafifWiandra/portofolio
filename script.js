const music = document.getElementById("bgMusic");

// auto play setelah klik pertama (browser policy)
document.body.addEventListener("click", () => {
  music.play().catch(() => {});
}, { once: true });

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}