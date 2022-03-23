// merged with SettingsModal

const ProcessTask = (props) => {
    var arr = JSON.parse(localStorage.getItem('hidden')) || [];
    if (props === "hide") {
        var elm = document.getElementById("showSelection");
        for (var i = elm.options.length - 1; i >= 0; i--) {
            if (elm.options[i].selected === true) {
                document.getElementById(elm.options[i].value).classList.add("hidden-item");
                arr.push(elm.options[i].value);
                localStorage.setItem('hidden', JSON.stringify(arr));
            }
        }
    } else if (props === "show") {
        var elm = document.getElementById("hideSelection");
        for (var i = elm.options.length - 1; i >= 0; i--) {
            if (elm.options[i].selected === true) {
                document.getElementById(elm.options[i].value).classList.remove("hidden-item");
                const index = arr.indexOf(elm.options[i].value);
                if (index > -1) {
                    arr.splice(index, 1);
                }
                localStorage.setItem('hidden', JSON.stringify(arr));
            }
        }
    }
    var hdr = document.getElementsByClassName("tracker-header");
    var i;

    for (i = 0; i < hdr.length; i++) {
        var elm = hdr[i].nextElementSibling;
        elm.style.maxHeight = elm.scrollHeight + "px";
    };
}

export default ProcessTask;