// selecting elements;
import { inputs, img, indicatores, inputFile } from "./elements.js";

// components;
import { handleUpdateStyles } from "./updateStyles.js";
import { handleIndicatoresTooltip } from "./indicatoreTooltip.js";

// listeners;
inputs.forEach((input) => input.addEventListener("change", handleUpdateStyles));

inputs.forEach((input) =>
  input.addEventListener("mousemove", handleUpdateStyles),
);

// show the value of range;
inputs.forEach((input, i) => handleIndicatoresTooltip(input, i));

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
