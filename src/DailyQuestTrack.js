import ImageComponent from './components/ImageComponent'
import toggleComplete from './components/toggleComplete'
import checkComplete from './components/checkComplete'

const DailyQuestTrack = () => {

  const dailies = [
    {
      name: "VJ: Daily Quests",
      icon: "https://static.wikia.nocookie.net/maplestory/images/4/4f/Eqp_Arcane_Symbol_Vanishing_Journey.png"
    },
    {
      name: "VJ: Erda Spectrum",
      icon: "https://static.wikia.nocookie.net/maplestory/images/a/aa/MapIcon_Road_of_Vanishing.png"
    },
    {
      name: "Chu Chu: Daily Quests",
      icon: "https://static.wikia.nocookie.net/maplestory/images/7/74/Eqp_Arcane_Symbol_Chu_Chu_Island.png"
    },
    {
      name: "Chu Chu: Hungry Muto",
      icon: "https://static.wikia.nocookie.net/maplestory/images/0/01/MapIcon_ChewChew.png"
    },
    {
      name: "Lachelein: Daily Quests",
      icon: "https://static.wikia.nocookie.net/maplestory/images/3/3c/Eqp_Arcane_Symbol_Lachelein.png"
    },
    {
      name: "Lachelein: Dream Defender",
      icon: "https://static.wikia.nocookie.net/maplestory/images/9/99/MapIcon_Lacheln.png"
    },
    {
      name: "Arcana: Daily Quests",
      icon: "https://static.wikia.nocookie.net/maplestory/images/2/23/Eqp_Arcane_Symbol_Arcana.png"
    },
    {
      name: "Arcana: Spirit Savior",
      icon: "https://static.wikia.nocookie.net/maplestory/images/b/b2/MapIcon_Arcana.png"
    },
    {
      name: "Morass: Daily Quests",
      icon: "https://static.wikia.nocookie.net/maplestory/images/7/7e/Eqp_Arcane_Symbol_Morass.png"
    },
    {
      name: "Morass: Ranheim Defense",
      icon: "https://static.wikia.nocookie.net/maplestory/images/b/b6/MapIcon_Morass.png"
    },
    {
      name: "Esfera: Daily Quests",
      icon: "https://static.wikia.nocookie.net/maplestory/images/4/4f/Eqp_Arcane_Symbol_Esfera.png"
    },
    {
      name: "Esfera: Esfera Guardian",
      icon: "https://static.wikia.nocookie.net/maplestory/images/0/05/MapIcon_esfera.png"
    },
    {
      name: "Cernium: Daily Quests",
      icon: "https://static.wikia.nocookie.net/maplestory/images/c/cc/Eqp_Sacred_Symbol_Cernium.png"
    },
    {
      name: "Burning Cernium: Daily Quests",
      icon: "https://static.wikia.nocookie.net/maplestory/images/c/cc/Eqp_Sacred_Symbol_Cernium.png"
    },
    {
      name: "Hotel Arcus: Daily Quests",
      icon: "https://static.wikia.nocookie.net/maplestory/images/7/78/Eqp_Sacred_Symbol_Arcus.png"
    },
  ];

  return (
    <>
      {dailies.map(daily => (
        <div className="overlay-wrapper" id={daily.name} key={daily.name} onClick={() => toggleComplete(daily)}>
          <img className="completed hidden" src={require('./imgs/cross.png')} alt={"completed " + daily.name} onLoad={() => checkComplete(daily)} />
          <div className="item">
            <ImageComponent url={daily.icon} alt={daily.name} /><span>{daily.name}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default DailyQuestTrack;