import { bgColorName, indicatores } from "./elements.js";

export const handleIndicatoresTooltip = (input, i) => {
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
};
