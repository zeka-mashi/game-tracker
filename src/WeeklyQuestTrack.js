import ImageComponent from './components/ImageComponent'
import toggleComplete from './components/toggleComplete'
import checkComplete from './components/checkComplete'

const WeeklyQuestTrack = () => {
    const weeklies = [
        {
            name: "Scrapyard",
            icon: "https://static.wikia.nocookie.net/maplestory/images/7/7c/Etc_Diffusion-Line_Energy_Core_%28Grade_A%29.png"
        },
        {
            name: "Dark World Tree",
            icon: "https://static.wikia.nocookie.net/maplestory/images/5/5d/Etc_Faint_Stigma_Spirit_Stone.png"
        },
    ];

    return (
        <>
            {weeklies.map(weekly => (
                <div className="overlay-wrapper" id={weekly.name} key={weekly.name} onClick={() => toggleComplete(weekly)}>
                    <img className="completed hidden" src={require('./imgs/cross.png')} alt={"completed " + weekly.name} onLoad={() => checkComplete(weekly)}/>
                    <div className="item">
                        <ImageComponent url={weekly.icon} alt={weekly.name} /><span>{weekly.name}</span>
                    </div>
                </div>
            ))}
        </>
    );
};

export default WeeklyQuestTrack;