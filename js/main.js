// selecting elements;
import {
  inputs,
  img,
  indicatores,
  inputFile,
  bgColorName,
} from "./elements.js";

// components;
import { handleUpdateStyles } from "./updateStyles.js";

// listeners;
inputs.forEach((input) => input.addEventListener("change", handleUpdateStyles));

inputs.forEach((input) =>
  input.addEventListener("mousemove", handleUpdateStyles),
);

// Show the value of range;
inputs.forEach((input, i) => {
  input.addEventListener("input", () => {
    if (input.type === "range") {
      const inputValue = input.value < 10 ? `0${input.value}` : input.value;
      indicatores[i].textContent = inputValue;
      indicatores[i].style.left = `${(input.value / input.max) * 100}%`;
      indicatores[i].classList.add("show");
    } else if (input.type === "color") {
      bgColorName.textContent = input.value;
    }
  });
});

// onBlur;
inputs.forEach((input, i) => {
  input.addEventListener("blur", () => {
    if (input.type === "range") {
      indicatores[i].classList.remove("show");
    }
  });
});

// Uplaod Img;
inputFile.addEventListener("change", () => {
  img.src = URL.createObjectURL(inputFile.files[0]);
});
