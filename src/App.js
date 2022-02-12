import './App.css';
import React, { useEffect, useState } from 'react';
import DailyReset from './DailyReset';
import WeeklyReset from './WeeklyReset';
import TrackComponent from './components/TrackComponent';

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
          <div className="server-time">
            <p>Server time</p> <span>{new Date(parseInt(serverTime)).toISOString().substring(11, 19)} UTC</span>
          </div>
          <div className="local-time">
            <p>Local time</p> <span>{new Date(parseInt(serverTime)).toLocaleTimeString({ hour12: true })}</span>
          </div>
        </div>
        <div id="dailies" className="section">
          <div class="reset-timer">Daily Reset in <DailyReset /></div>
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
          <div class="reset-timer">Weekly Reset in <WeeklyReset /></div>
          <div className="main-wrapper">
            <div className="tracker weekly">
              <div className="tracker-header">Weekly Bosses</div>
              <div className="tracker-wrapper">
                <TrackComponent type="weekly-boss" />
              </div>
            </div>
            <div className="tracker weekly">
              <div className="tracker-header">Weekly Quests & Misc</div>
              <div className="tracker-wrapper">
                <TrackComponent type="weekly-quest-misc" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer"><p>Made with <i class="fas fa-heart"></i> by zeka-mashi <i class="fas fa-copyright"></i> 2022</p></div>
    </div>
  );
};

export default App;
