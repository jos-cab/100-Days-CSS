const animationDuration = 0.35 * 1000;

async function toggleAnimation() {
  let line1 = document.getElementsByClassName("line")[0];
  let line2 = document.getElementsByClassName("line")[1];
  let line3 = document.getElementsByClassName("line")[2];

  if (line1.classList.contains("move-down")) {
    line1.classList.remove("rotate-right");
    line2.classList.remove("make-small");
    line3.classList.remove("rotate-left");

    await new Promise((r) => setTimeout(r, animationDuration));

    line1.classList.remove("move-down");
    line2.classList.remove("disapear");
    line3.classList.remove("move-up");
  } else {
    line1.classList.add("move-down");
    line2.classList.add("make-small");
    line3.classList.add("move-up");

    await new Promise((r) => setTimeout(r, animationDuration));

    line1.classList.add("rotate-right");
    line2.classList.add("disapear");
    line3.classList.add("rotate-left");
  }
}
