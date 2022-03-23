const checkRemoved = (props) => {
  // we need to check on page load if the task is removed via settings
  var elm = document.getElementById(props.name);
  var arr = JSON.parse(localStorage.getItem('hidden'));
  if (arr.indexOf(props.name) > -1) {
    elm.classList.add("hidden-item");
  }
};

export default checkRemoved;