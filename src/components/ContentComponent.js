import React, { useEffect, useState } from 'react';
import DailyReset from '../DailyReset';
import WeeklyReset from '../WeeklyReset';
import TrackComponent from './TrackComponent';
import clearCompleted from './clearCompleted';

const ContentComponent = (props) => {
    const [serverTime, setServerTime] = useState(Date.now() + 1000);
    var getDailyReset = localStorage.getItem("nextDailyReset");
    var getWeeklyReset = localStorage.getItem("nextWeeklyReset");

    if (document.getElementById("main")) {
        if (serverTime > getWeeklyReset) {
            clearCompleted("all");
        } else if (serverTime > getDailyReset) {
            clearCompleted("daily");
        }
    }

    useEffect(() => {
        const interval = setInterval(() => setServerTime(Date.now() + 1000), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    if (props.game === "maple") {
        return <div className="content maple">
            <div id="main" className="main let-there-be-light">
                <div className="time-header">
                    <div className="server-time">
                        <p>Server time</p> <span>{new Date(parseInt(serverTime)).toISOString().substring(11, 19)} UTC</span>
                    </div>
                    <div className="local-time">
                        <p>Local time</p> <span>{new Date(parseInt(serverTime)).toLocaleTimeString({ hour12: true })}</span>
                    </div>
                </div>
                <div id="dailies" className="section">
                    <div className="reset-timer">Daily Reset in <DailyReset /></div>
                    <div className="main-wrapper">
                        <div className="tracker daily">
                            <div className="tracker-header"><div className="collapse-icon"></div>Daily Bosses</div>
                            <div className="tracker-wrapper">
                                <TrackComponent type="daily-boss" />
                            </div>
                        </div>
                        <div className="tracker daily">
                            <div className="tracker-header"><div className="collapse-icon"></div>Daily Quests</div>
                            <div className="tracker-wrapper">
                                <TrackComponent type="daily-quest" />
                            </div>
                        </div>
                        <div className="tracker daily">
                            <div className="tracker-header"><div className="collapse-icon"></div>Daily Misc</div>
                            <div className="tracker-wrapper">
                                <TrackComponent type="daily-misc" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="weeklies" className="section">
                    <div className="reset-timer">Weekly Reset in <WeeklyReset /></div>
                    <div className="main-wrapper">
                        <div className="tracker weekly">
                            <div className="tracker-header"><div className="collapse-icon"></div>Weekly Bosses</div>
                            <div className="tracker-wrapper">
                                <TrackComponent type="weekly-boss" />
                            </div>
                        </div>
                        <div className="tracker weekly">
                            <div className="tracker-header"><div className="collapse-icon"></div>Weekly Quests & Misc<span>* some Quests/Misc reset Monday UTC</span></div>
                            <div className="tracker-wrapper">
                                <TrackComponent type="weekly-quest-misc" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    } else {
        return <div className="content soon"><p style={{ color: "white", textAlign: "center", fontSize: "30px" }}>Coming soon</p></div>
    }
}

export default ContentComponent;