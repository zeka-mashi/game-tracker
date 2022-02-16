import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import DailyReset from './DailyReset';
import WeeklyReset from './WeeklyReset';
import TrackComponent from './components/TrackComponent';
import clearCompleted from './components/clearCompleted';
import SettingsModal from "./components/SettingsModal";

const App = () => {
  const [serverTime, setServerTime] = useState(Date.now() + 1000);
  const [settingsModal, setSettingsModal] = useState(false);
  var getDailyReset = localStorage.getItem("nextDailyReset");
  var getWeeklyReset = localStorage.getItem("nextWeeklyReset");
  const firstLoad = useRef(false); // prevent settingsModal state from rendering twice


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

  useEffect(() => {
    if (firstLoad.current) {
      document.getElementById("SettingsModal").classList.toggle("hidden");
      document.getElementById("SettingsModal").classList.toggle("visible");
      document.getElementsByTagName("body")[0].classList.toggle("noscroll");
      document.getElementById("SettingsModal").classList.toggle("noscroll");
      document.getElementById("main").classList.toggle("no-click");
      document.getElementById("main").classList.toggle("close-the-blinds");
      document.getElementById("main").classList.toggle("let-there-be-light");
    } else firstLoad.current = true;
  }, [settingsModal]);

  const toggleSettingsModal = () => {
    setSettingsModal(!settingsModal);
  }

  return (
    <div className="content">
      <SettingsModal settingsOpened={setSettingsModal} />
      <div className="nav">
        <div className="nav-wrapper">
          <h1>Dailies Tracker</h1>
          <span onClick={toggleSettingsModal} id="settings"><i className="fas fa-cog"></i></span>
        </div>
      </div>
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
              <div className="tracker-header">Daily Bosses</div>
              <div className="tracker-wrapper">
                <TrackComponent type="daily-boss" />
              </div>
            </div>
            <div className="tracker daily">
              <div className="tracker-header">Daily Quests</div>
              <div className="tracker-wrapper">
                <TrackComponent type="daily-quest" />
              </div>
            </div>
            <div className="tracker daily">
              <div className="tracker-header">Daily Misc</div>
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
              <div className="tracker-header">Weekly Bosses</div>
              <div className="tracker-wrapper">
                <TrackComponent type="weekly-boss" />
              </div>
            </div>
            <div className="tracker weekly">
              <div className="tracker-header">Weekly Quests & Misc<span>* some Quests/Misc reset Monday UTC</span></div>
              <div className="tracker-wrapper">
                <TrackComponent type="weekly-quest-misc" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer"><p>Made with <i className="fas fa-heart"></i> by zeka-mashi <i className="fas fa-copyright"></i> 2022</p></div>
    </div>
  );
};

export default App;
