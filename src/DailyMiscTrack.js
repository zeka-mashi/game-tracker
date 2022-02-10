import React from 'react'
import ImageComponent from './ImageComponent'

const DailyMiscTrack = () => {
  const dailies = [
    {
      name: "Commerci Trade Voyages (x3)",
      icon: "https://static.wikia.nocookie.net/maplestory/images/e/e8/MapIcon_CommerzBT.png"
    },
    {
      name: "Ursus (x3)",
      icon: "https://static.wikia.nocookie.net/maplestory/images/9/91/Mobicon_Ursus.png"
    },
    {
      name: "Maple Tour (x2)",
      icon: "https://static.wikia.nocookie.net/maplestory/images/2/2b/MapIcon_MTour.png"
    },
    {
      name: "Monster Park (x2)",
      icon: "https://static.wikia.nocookie.net/maplestory/images/7/7e/Etc_Monster_Park_Commemorative_Coin.png"
    },
    {
      name: "Legion Raid",
      icon: "https://static.wikia.nocookie.net/maplestory/images/1/11/Etc_Legion_Coin.png"
    },
    {
      name: "Daily Gift",
      icon: "https://static.wikia.nocookie.net/maplestory/images/8/8f/Etc_First_Explorer_Gift_Box.png"
    },
    {
      name: "Fairy Bros",
      icon: "https://static.wikia.nocookie.net/maplestory/images/b/bb/NPC_Wonky_the_Fairy.png"
    },
    {
      name: "Event: Coin Cap",
      icon: "https://orangemushroom.files.wordpress.com/2017/09/maplestory-256x256.png"
    },
    {
      name: "Event: Make Sandwich",
      icon: "https://static.wikia.nocookie.net/maplestory/images/5/54/Use_Sandwich.png"
    },
  ];

  return (
    <>
      {dailies.map(daily => (
        <div className="overlay-wrapper" id={daily.name} key={daily.name} onClick={() => document.getElementById(daily.name).firstChild.classList.toggle("hidden")}>
          <img className="completed hidden" src={require('./imgs/cross.png')} alt={"completed " + daily.name} />
          <div className="item">
            <ImageComponent url={daily.icon} alt={daily.name} /><span>{daily.name}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default DailyMiscTrack;