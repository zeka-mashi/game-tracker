import './App.css';
import React, { useEffect, useState } from 'react';
import DailyReset from './DailyReset';
import WeeklyReset from './WeeklyReset';
import DailyBossTrack from './DailyBossTrack';
import DailyQuestTrack from './DailyQuestTrack';
import DailyMiscTrack from './DailyMiscTrack';
import WeeklyBossTrack from './WeeklyBossTrack';
import WeeklyQuestTrack from './WeeklyQuestTrack';
import WeeklyMiscTrack from './WeeklyMiscTrack';

const App = () => {
  const [serverTime, setServerTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setServerTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="content">
      <div className="nav">
        <div className="nav-wrapper">
          <h1>Dailies Tracker</h1>
          <a href="#dailies">Dailies</a>
          <a href="#weeklies">Weeklies</a>
          { /*<a href="#">About</a> */}
        </div>
      </div>
      <div className="main">
        <div className="time-header">
          <div className="container">
            <div className="serverTime">
              Server time <span>{new Date(parseInt(serverTime)).toISOString().substring(11, 19)} UTC</span>
            </div>
            <div className="localTime">
              Local time <span>{new Date(parseInt(serverTime)).toLocaleTimeString({ hour12: true })}</span>
            </div>
          </div>
        </div>
        <div id="dailies" className="section">
          <div>Daily Reset in <DailyReset /></div>
          <div className="main-wrapper">
            <div className="tracker daily">
              <div className="tracker-header">Daily Bosses</div>
              <div className="tracker-wrapper">
                <DailyBossTrack />
              </div>
            </div>
            <div className="tracker daily">
              <div className="tracker-header">Daily Quests</div>
              <div className="tracker-wrapper">
                <DailyQuestTrack />
              </div>
            </div>
            <div className="tracker daily">
              <div className="tracker-header">Daily Misc</div>
              <div className="tracker-wrapper">
                <DailyMiscTrack />
              </div>
            </div>
          </div>
        </div>
        <div id="weeklies" className="section">
          <div>Weekly Reset in <WeeklyReset /></div>
          <div className="main-wrapper">
            <div className="tracker weekly">
              <div className="tracker-header">Weekly Bosses</div>
              <div className="tracker-wrapper">
                <WeeklyBossTrack />
              </div>
            </div>
            <div className="tracker weekly">
              <div className="tracker-header">Weekly Quests</div>
              <div className="tracker-wrapper">
                <WeeklyQuestTrack />
              </div>
            </div>
            <div className="tracker weekly">
              <div className="tracker-header">Weekly Misc</div>
              <div className="tracker-wrapper">
                <WeeklyMiscTrack />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
