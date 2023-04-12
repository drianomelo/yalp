const btn = document.querySelector(".theme__btn");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  if (btn.style.left == "3%") {
    btn.style.left = "61.5%";
    btn.style.backgroundImage = "url(../../../assets/images/moon.svg)";
    btn.style.transform = "rotate(180deg)";
  } else {
    btn.style.left = "3%";
    btn.style.backgroundImage = "url(../../../assets/images/sun.svg)";
    btn.style.transform = "rotate(0deg)";
  }
});

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

