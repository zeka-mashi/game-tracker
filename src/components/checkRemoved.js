const checkRemoved = (props) => {
  // we need to check on page load if the task is removed via settings
  var elm = document.getElementById(props.name);
  if (localStorage.getItem('show ' + props.name) === "false") {
    elm.classList.add("hidden-item");
  }
};

export default checkRemoved;