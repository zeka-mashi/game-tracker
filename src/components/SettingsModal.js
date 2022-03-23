import React, { useCallback, useState } from 'react';
import TaskSelectionOption from "./TaskSelectionOption";
import clearCompleted from './clearCompleted';

const processTask = (props) => {
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

function SettingsModal({ settingsOpened }) {
    // update modal state to allow the close function ;)
    const closeSettingsModal = useCallback(e => {
        settingsOpened(e)
    }, [settingsOpened])

    const [update, setUpdate] = useState(false);

    const updateState = (props) => {
        processTask(props);
        setUpdate(!update);
    }

    return <div id="SettingsModal" className="hidden">
        <h1>SETTINGS</h1>
        <div className="close" onClick={closeSettingsModal}><span>&#x2716;</span></div>
        <div className="setting-toggles">
            <div className="setting-item">
                <p>Clear all daily completed</p>
                <div className="reset-btn" onClick={() => clearCompleted("daily", "true")}>Reset</div>
            </div>
            <div className="setting-item">
                <p>Clear all weekly completed</p>
                <div className="reset-btn" onClick={() => clearCompleted("weekly", "true")}>Reset</div>
            </div>
            <div className="task-selecton">
                <div className="setting-item" id="hideTaskSelect">
                    <p>Showing these tasks:</p>
                    <TaskSelectionOption shown="true" />
                    <div className="selection-btn" onClick={() => updateState("hide")}>Remove Selected<br />{'>>'}</div>
                </div>
                <div className="setting-item" id="showTaskSelect">
                    <p>Hiding these tasks:</p>
                    <TaskSelectionOption shown="false" />
                    <div className="selection-btn" onClick={() => updateState("show")}>Add Selected<br />{'<<'}</div>
                </div>
            </div>
        </div>
    </div>
}

export default SettingsModal;