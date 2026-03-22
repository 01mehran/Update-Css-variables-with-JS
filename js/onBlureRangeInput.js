import { indicatores } from "./elements.js";

export const handleOnblureRangeInput = (input, i) => {
  input.addEventListener("blur", () => {
    if (input.type === "range") {
      indicatores[i].classList.remove("show");
    }
  });
};
