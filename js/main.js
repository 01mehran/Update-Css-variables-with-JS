// selecting elements;
import { inputs, img, inputFile } from "./elements.js";

// components;
import { handleUpdateStyles } from "./updateStyles.js";
import { handleIndicatoresTooltip } from "./indicatoreTooltip.js";
import { handleOnblureRangeInput } from "./onBlureRangeInput.js";

// listeners;
inputs.forEach((input) => input.addEventListener("change", handleUpdateStyles));

inputs.forEach((input) =>
  input.addEventListener("mousemove", handleUpdateStyles),
);

// show the value of range;
inputs.forEach((input, i) => handleIndicatoresTooltip(input, i));

// onBlur range inputes;
inputs.forEach((input, i) => handleOnblureRangeInput(input, i));

// Uplaod Img;
inputFile.addEventListener("change", () => {
  img.src = URL.createObjectURL(inputFile.files[0]);
});
