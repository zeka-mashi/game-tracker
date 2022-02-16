import React, { useCallback } from 'react';
import TaskSelectionOption from "./TaskSelectionOption";
import clearCompleted from './clearCompleted';
import processTask from "./processTask";

function SettingsModal({ settingsOpened }) {
    // update modal state to allow the close function ;)
    const closeSettingsModal = useCallback(e => {
        settingsOpened(e)
    }, [settingsOpened])

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
                    <div className="selection-btn" onClick={() => processTask("hide")}>Remove Selected<br />{'>>'}</div>
                </div>
                <div className="setting-item" id="showTaskSelect">
                    <p>Hiding these tasks:</p>
                    <TaskSelectionOption shown="false" />
                    <div className="selection-btn" onClick={() => processTask("show")}>Add Selected<br />{'<<'}</div>
                </div>
            </div>
        </div>
    </div>
}

export default SettingsModal;