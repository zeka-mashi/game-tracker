const checkComplete = (props) => {
  // we need to check on page load if the task had been previously marked complete
  var elm = document.getElementById(props.name).firstChild;
  var arr = JSON.parse(localStorage.getItem('completed')) || [];
  if (arr.indexOf(props.name) > -1) {
    elm.classList.remove("hidden");
    elm.parentElement.childNodes[1].classList.add("strike");
    elm.classList.add("visible");
  }
};

export default checkComplete;