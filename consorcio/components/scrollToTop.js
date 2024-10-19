const scrollToTop = value => {
  window.scrollTo({
    behavior: "smooth",
    top: value,
  });
};

export default scrollToTop;
