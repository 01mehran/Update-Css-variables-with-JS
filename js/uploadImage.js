import { img, inputFile } from "./elements.js";

export const handleUpdateImage = () => {
  inputFile.addEventListener("change", () => {
    img.src = URL.createObjectURL(inputFile.files[0]);
  });
};
