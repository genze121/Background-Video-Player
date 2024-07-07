const button = document.querySelector(".button");
const video = document.querySelector(".video-player");
const icon = document.querySelector(".fa");

button.addEventListener("click", () => {
  if (button.classList.contains("pause")) {
    button.classList.remove("pause");
    video.play();
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play");
  } else {
    button.classList.add("pause");
    video.pause();
    icon.classList.add("fa-play");
    icon.classList.remove("fa-pause");
  }
});
