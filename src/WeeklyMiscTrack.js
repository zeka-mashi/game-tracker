import React from 'react'
import ImageComponent from './ImageComponent'

const WeeklyMiscTrack = () => {
  const weeklies = [
    {
      name: "Mu Lung Dojo",
      icon: "https://static.wikia.nocookie.net/maplestory/images/f/fd/Mob_Mu_Gong.png"
    },
    {
      name: "Guild: Culvert",
      icon: "https://static.wikia.nocookie.net/maplestory/images/a/a9/MapIcon_Guild.png"
    },
    {
      name: "Guild: Flag Race",
      icon: "https://static.wikia.nocookie.net/maplestory/images/a/a9/MapIcon_Guild.png"
    },
    {
      name: "Event: Weekly Punch King",
      icon: "https://static.wikia.nocookie.net/maplestory/images/d/d1/Use_Basic_Damage_Skin.png"
    },
  ];

  return (
    <>
      {weeklies.map(weekly => (
        <div className="overlay-wrapper" id={weekly.name} key={weekly.name} onClick={() => document.getElementById(weekly.name).firstChild.classList.toggle("hidden")}>
          <img className="completed hidden" src={require('./imgs/cross.png')} alt={"completed " + weekly.name} />
          <div className="item">
            <ImageComponent url={weekly.icon} alt={weekly.name} /><span>{weekly.name}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default WeeklyMiscTrack;