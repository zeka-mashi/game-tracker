import ImageComponent from './components/ImageComponent'
import toggleComplete from './components/toggleComplete'
import checkComplete from './components/checkComplete'

const DailyBossTrack = () => {
    const dailies = [
        {
            name: "Zakum (Easy/Normal)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/9/98/Maple_Guide_-_Zakum.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Magnus (Easy/Normal)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/5/52/Maple_Guide_-_Magnus.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Hilla (Normal)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/1/15/Maple_Guide_-_Hilla.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "OMNI-CLN",
            icon: "https://static.wikia.nocookie.net/maplestory/images/5/5a/Maple_Guide_-_OMNI-CLN.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Papulatus (Easy/Normal)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/a/a7/Maple_Guide_-_Papulatus.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Pierre (Normal)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/9/9a/Maple_Guide_-_Pierre.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Crimson Queen (Normal)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/7/7a/Maple_Guide_-_Crimson_Queen.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Von Bon (Normal)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/1/1e/Maple_Guide_-_Von_Bon.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Vellum (Normal)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/0/0b/Maple_Guide_-_Vellum.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Von Leon",
            icon: "https://static.wikia.nocookie.net/maplestory/images/a/af/Maple_Guide_-_Von_Leon.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Horntail",
            icon: "https://static.wikia.nocookie.net/maplestory/images/0/02/Maple_Guide_-_Horntail.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Arkarium",
            icon: "https://static.wikia.nocookie.net/maplestory/images/e/eb/Maple_Guide_-_Arkarium.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Pink Bean (Normal)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/8/8a/Maple_Guide_-_Pink_Bean.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Mori Ranmaru",
            icon: "https://static.wikia.nocookie.net/maplestory/images/a/ac/Maple_Guide_-_Mori_Ranmaru.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Gollux",
            icon: "https://static.wikia.nocookie.net/maplestory/images/4/49/Maple_Guide_-_Gollux.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
    ];

    return (
        <>
            {dailies.map(daily => (
                <div className="overlay-wrapper" id={daily.name} key={daily.name} onClick={() => toggleComplete(daily)}>
                    <img className="completed hidden" src={require('./imgs/cross.png')} alt={"completed " + daily.name} onLoad={() => checkComplete(daily)}/>
                    <div className="item">
                        <ImageComponent url={daily.icon} alt={daily.name} /><span>{daily.name}</span>
                    </div>
                </div>
            ))}
        </>
    );
};

export default DailyBossTrack;