const checkComplete = (props) => {
  // we need to check on page load if the task had been previously marked complete
  var elm = document.getElementById(props.name).firstChild;
  if (localStorage.getItem(props.name) === "true") {
    elm.classList.remove("hidden");
  }
};

export default checkComplete;