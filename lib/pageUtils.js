export const scrollToTop = (value = 0) => {
  window.scrollTo({
    behavior: "smooth",
    top: value,
  });
};
