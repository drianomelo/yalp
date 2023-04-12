// inputs

const inputs = document.querySelectorAll(".login__input input");
const labels = document.querySelectorAll(".login__input label");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", () => {
    labels[i].classList.add("clicked");
  });

  inputs[i].addEventListener("focusout", () => {
    if (inputs[i].value === "") {
      labels[i].classList.remove("clicked");
    }
  });
}
