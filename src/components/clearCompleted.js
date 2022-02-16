import mapleData from '../data/mapledata.json'

const clearCompleted = (reset, force = "false") => {
    const date = new Date();
    var nextDailyReset = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 1, 0, 0, 0);
    var nextWeeklyReset = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + (10 - date.getUTCDay()) % 7 + 1, 0, 0, 0);

    if (force === "true") {
        // force reset completed tasks
        mapleData.map(data => {
            var elm = document.getElementById(data.name).firstChild;
            if (reset === "daily") {
                if (!elm.classList.contains("hidden") && (data.is === reset)) {
                    // clear only those with is=daily
                    elm.classList.add("hidden");
                    elm.parentElement.childNodes[1].classList.remove("strike");
                    localStorage.removeItem(data.name);
                }
            } else if ((reset === "weekly") && (data.is === reset)) {
                // clear all regardless of task type
                if (!elm.classList.contains("hidden")) {
                    elm.classList.add("hidden");
                    elm.parentElement.childNodes[1].classList.remove("strike");
                    localStorage.removeItem(data.name);
                }
            } else if (reset === "all") {
                // clear all regardless of task type
                if (!elm.classList.contains("hidden")) {
                    elm.classList.add("hidden");
                    elm.parentElement.childNodes[1].classList.remove("strike");
                    localStorage.removeItem(data.name);
                }
            }
        });
        localStorage.setItem("nextDailyReset", nextDailyReset);
        localStorage.setItem("nextWeeklyReset", nextWeeklyReset);
    } else {
        // reset only when current day is next day for storage value
        mapleData.map(data => {
            var elm = document.getElementById(data.name).firstChild;
            if (reset === "weekly") {
                // clear all regardless of task type
                if (!elm.classList.contains("hidden")) {
                    elm.classList.add("hidden");
                    elm.parentElement.childNodes[1].classList.remove("strike");
                    localStorage.removeItem(data.name);
                }
            } else if (reset === "daily") {
                if (!elm.classList.contains("hidden") && (data.is === reset)) {
                    // clear only those with is=daily
                    elm.classList.add("hidden");
                    elm.parentElement.childNodes[1].classList.remove("strike");
                    localStorage.removeItem(data.name);
                }
            }
        });
        localStorage.setItem("nextDailyReset", nextDailyReset);
        localStorage.setItem("nextWeeklyReset", nextWeeklyReset);
    }
};

export default clearCompleted;