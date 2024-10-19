const useWidget = () => {
  let isWidget = sessionStorage.getItem("widget");
  return { isWidget: isWidget === "true" ? true : false };
};

export default useWidget;
