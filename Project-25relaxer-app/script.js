const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const hold = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Breath In";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Break Out";
      container.className = "container shrink";
    }, hold);
  }, breathTime);
}

setInterval(breathAnimation, totalTime)
