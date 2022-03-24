import React, { useCallback, useState } from 'react';
import TaskSelectionOption from "./TaskSelectionOption";
import clearCompleted from './clearCompleted';

const processTask = () => {
    var arr = [];
    //var elm = document.getElementById("showSelection").selectedOptions;
    var elm = document.getElementById("showSelection");
    for (var i = elm.options.length - 1; i >= 0; i--) {
        if (elm.options[i].selected !== true) {
            document.getElementById(elm.options[i].value).classList.add("hidden-item");
            //for (var i = elm.length - 1; i >= 0; i--) {
            //document.getElementById(elm[i].value).classList.add("hidden-item");
            arr.push(elm[i].value);
        } else {
            document.getElementById(elm.options[i].value).classList.remove("hidden-item");
        }
        localStorage.setItem('hidden', JSON.stringify(arr));
    }
    var hdr = document.getElementsByClassName("tracker-header");
    var i;

    for (i = 0; i < hdr.length; i++) {
        var wrapper = hdr[i].nextElementSibling;
        wrapper.style.maxHeight = wrapper.scrollHeight + "px";
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
        <div id="maple-settings" className="settings-box">
            <h3>MapleStory</h3>
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
                    <div className="setting-item" id="TaskSelect">
                        <p>Showing:</p>
                        <TaskSelectionOption />
                        <div className="selection-btn" onClick={() => updateState()}>Update</div>
                    </div>
                </div>
            </div>
        </div>
        <div id="soon-settings" className="settings-box">
            <h3>Coming Soon</h3>
            <div className="setting-toggles">
                <div className="setting-item">
                    <p>More settings coming soon!</p>
                </div>
            </div>
        </div>
    </div>
}

export default SettingsModal;