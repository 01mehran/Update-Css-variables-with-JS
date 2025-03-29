// Selecting Elements;
const inputs = document.querySelectorAll(".input-range__wrapper input");
const img = document.querySelector("#cr7");
const values = document.querySelectorAll(".indicatore");

const inputFile = document.querySelector("#input-file");
const bgColorName = document.querySelector("#bgColorName");



// Set dynamiclly styles;
const updateStyle = function () {
  const ID = this.id;
  const suffix = ID === "base" ? "" : ID === "border" ? "%" : "px";

  document.documentElement.style.setProperty(`--${ID}`, this.value + suffix);
};

inputs.forEach((input) => input.addEventListener("change", updateStyle));
inputs.forEach((input) => input.addEventListener("mousemove", updateStyle));

// Show the value of range;
inputs.forEach((input, i) => {
  input.addEventListener("input", () => {
    if (input.type == "range") {
      const inputValue = input.value < 10 ? "0" + input.value : input.value;
      values[i].textContent = inputValue;
      values[i].style.left = `${(input.value / input.max) * 100}%`;
      values[i].classList.add("show");
    } else if (input.type == "color") {
      bgColorName.textContent = input.value;
    }
  });
});

// onBlur;
inputs.forEach((input, i) => {
  input.addEventListener("blur", () => {
    if (input.type == "range") {
      values[i].classList.remove("show");
    }
  });
});

// Uplaod Img;
inputFile.addEventListener("change", () => {
  img.src = URL.createObjectURL(inputFile.files[0]);
});
