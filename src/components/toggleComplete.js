const toggleComplete = (props) => {
  var elm = document.getElementById(props.name).firstChild;
  var arr = JSON.parse(localStorage.getItem('completed')) || [];
  if (elm.classList.contains("hidden")) {
    // if completed, remove hidden class from slash image, then store name value in storage
    elm.classList.remove("hidden");
    elm.parentElement.childNodes[1].classList.add("strike");
    elm.classList.add("visible");
    arr.push(props.name);
    localStorage.setItem('completed', JSON.stringify(arr));
  } else {
    // else remove any stored value in storage and hide slash
    elm.classList.remove("visible");
    elm.parentElement.childNodes[1].classList.remove("strike");
    elm.classList.add("hidden");
    const index = arr.indexOf(props.name);
    if (index > -1) {
      arr.splice(index, 1);
    }
    localStorage.setItem('completed', JSON.stringify(arr));
  }
};

export default toggleComplete;