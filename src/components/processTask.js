// merged with SettingsModal

const ProcessTask = (props) => {
    var arr = JSON.parse(localStorage.getItem('hidden')) || [];
    if (props === "hide") {
        var elm = document.getElementById("showSelection").selectedOptions;
        for (var i = elm.length - 1; i >= 0; i--) {
            document.getElementById(elm[i].value).classList.add("hidden-item");
            arr.push(elm[i].value);
            localStorage.setItem('hidden', JSON.stringify(arr));
        }
    } else if (props === "show") {
        var elm = document.getElementById("hideSelection").selectedOptions;
        for (var i = elm.length - 1; i >= 0; i--) {
            document.getElementById(elm[i].value).classList.remove("hidden-item");
            const index = arr.indexOf(elm[i].value);
            if (index > -1) {
                arr.splice(index, 1);
            }
            localStorage.setItem('hidden', JSON.stringify(arr));
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