import mapleData from '../data/mapledata.json'

const clearCompleted = (reset, force = "false") => {
    const date = new Date();
    var nextDailyReset = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 1, 0, 0, 0);
    var nextWeeklyReset = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + (10 - date.getUTCDay()) % 7 + 1, 0, 0, 0);

    var arr = JSON.parse(localStorage.getItem('completed')) || [];

    if (force === "true") {
        // force reset completed tasks
        mapleData.map(data => {
            var elm = document.getElementById(data.name).firstChild;
            const index = arr.indexOf(data.name);
            if (reset === "daily") {
                if (!elm.classList.contains("hidden") && (data.is === reset)) {
                    // clear only those with is=daily
                    elm.classList.add("hidden");
                    elm.parentElement.childNodes[1].classList.remove("strike");
                    if (index > -1) {
                        arr.splice(index, 1);
                    }
                }
            } else if ((reset === "weekly") && (data.is === reset)) {
                // clear all regardless of task type
                if (!elm.classList.contains("hidden")) {
                    elm.classList.add("hidden");
                    elm.parentElement.childNodes[1].classList.remove("strike");
                    if (index > -1) {
                        arr.splice(index, 1);
                    }
                }
            } else if (reset === "all") {
                // clear all regardless of task type
                if (!elm.classList.contains("hidden")) {
                    elm.classList.add("hidden");
                    elm.parentElement.childNodes[1].classList.remove("strike");
                    if (index > -1) {
                        arr.splice(index, 1);
                    }
                }
            }
        });
        localStorage.setItem('completed', JSON.stringify(arr));
        localStorage.setItem("nextDailyReset", nextDailyReset);
        localStorage.setItem("nextWeeklyReset", nextWeeklyReset);
    } else {
        // reset only when current day is next day for storage value
        mapleData.map(data => {
            var elm = document.getElementById(data.name).firstChild;
            const index = arr.indexOf(data.name);
            if (reset === "weekly") {
                // clear all regardless of task type
                if (!elm.classList.contains("hidden")) {
                    elm.classList.add("hidden");
                    elm.parentElement.childNodes[1].classList.remove("strike");
                    if (index > -1) {
                        arr.splice(index, 1);
                    }
                }
            } else if (reset === "daily") {
                if (!elm.classList.contains("hidden") && (data.is === reset)) {
                    // clear only those with is=daily
                    elm.classList.add("hidden");
                    elm.parentElement.childNodes[1].classList.remove("strike");
                    if (index > -1) {
                        arr.splice(index, 1);
                    }
                }
            }
        });
        localStorage.setItem('completed', JSON.stringify(arr));
        localStorage.setItem("nextDailyReset", nextDailyReset);
        localStorage.setItem("nextWeeklyReset", nextWeeklyReset);
    }
};

export default clearCompleted;