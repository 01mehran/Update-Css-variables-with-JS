// selecting elements;
import { inputs } from "./elements.js";

// components;
import { handleUpdateStyles } from "./updateStyles.js";
import { handleIndicatoresTooltip } from "./indicatoreTooltip.js";
import { handleOnblureRangeInput } from "./onBlureRangeInput.js";
import { handleUpdateImage } from "./uploadImage.js";

// listeners;
inputs.forEach((input) => input.addEventListener("change", handleUpdateStyles));

inputs.forEach((input) =>
  input.addEventListener("mousemove", handleUpdateStyles),
);

// show the value of range;
inputs.forEach((input, i) => handleIndicatoresTooltip(input, i));

// onBlur range inputes;
inputs.forEach((input, i) => handleOnblureRangeInput(input, i));

// uplaod Img;
handleUpdateImage();
