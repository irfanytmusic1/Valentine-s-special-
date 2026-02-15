const music = document.getElementById("music");
const tapText = document.getElementById("tapText");

let isPlaying = false;

document.body.addEventListener("click", function () {
  if (!isPlaying) {
    music.play();
    tapText.innerText = "Tap to pause";
    isPlaying = true;
  } else {
    music.pause();
    tapText.innerText = "Tap to play";
    isPlaying = false;
  }
});
