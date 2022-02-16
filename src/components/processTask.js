const processTask = (props) => {
    if (props === "hide") {
        var elm = document.getElementById("showSelection");
        for (var i = elm.options.length - 1; i >= 0; i--) {
            if (elm.options[i].selected === true) {
                document.getElementById(elm.options[i].value).classList.add("hidden-item");
                localStorage.setItem('show ' + elm.options[i].value, "false");
            }
        }
    } else if (props === "show") {
        var elm = document.getElementById("hideSelection");
        for (var i = elm.options.length - 1; i >= 0; i--) {
            if (elm.options[i].selected === true) {
                document.getElementById(elm.options[i].value).classList.remove("hidden-item");
                localStorage.removeItem('show ' + elm.options[i].value);
            }
        }
    }
}

export default processTask;