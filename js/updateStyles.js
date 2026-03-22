export const handleUpdateStyles = (e) => {
  const { id, value } = e.target;

  const suffix = id === "base" ? "" : id === "border" ? "%" : "px";

  document.documentElement.style.setProperty(`--${id}`, value + suffix);
};
