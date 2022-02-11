const toggleComplete = (props) => {
  var elm = document.getElementById(props.name).firstChild;
  if (elm.classList.contains("hidden")) {
    // if completed, remove hidden class from slash image, then store 'true' value in storage
    elm.classList.remove("hidden");
    localStorage.setItem(props.name, JSON.stringify(true));
  } else {
    // else remove any stored value in storage and hide slash
    elm.classList.add("hidden");
    localStorage.removeItem(props.name);
  }
};

export default toggleComplete;