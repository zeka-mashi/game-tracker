import ImageComponent from './components/ImageComponent'
import toggleComplete from './components/toggleComplete'
import checkComplete from './components/checkComplete'

const WeeklyBossTrack = () => {
    const weeklies = [
        {
            name: "Zakum (Chaos)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/9/98/Maple_Guide_-_Zakum.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Magnus (Hard)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/5/52/Maple_Guide_-_Magnus.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Hilla (Hard)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/1/15/Maple_Guide_-_Hilla.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Papulatus (Chaos)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/a/a7/Maple_Guide_-_Papulatus.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Pierre (Chaos)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/9/9a/Maple_Guide_-_Pierre.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Crimson Queen (Chaos)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/7/7a/Maple_Guide_-_Crimson_Queen.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Von Bon (Chaos)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/1/1e/Maple_Guide_-_Von_Bon.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Vellum (Chaos)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/0/0b/Maple_Guide_-_Vellum.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Pink Bean (Chaos)",
            icon: "https://static.wikia.nocookie.net/maplestory/images/8/8a/Maple_Guide_-_Pink_Bean.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Cygnus",
            icon: "https://static.wikia.nocookie.net/maplestory/images/1/18/Maple_Guide_-_Cygnus.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Damien",
            icon: "https://static.wikia.nocookie.net/maplestory/images/7/72/Maple_Guide_-_Damien.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Lotus",
            icon: "https://static.wikia.nocookie.net/maplestory/images/e/e9/Maple_Guide_-_Lotus.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Lucid",
            icon: "https://static.wikia.nocookie.net/maplestory/images/0/03/Maple_Guide_-_Lucid.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Will",
            icon: "https://static.wikia.nocookie.net/maplestory/images/d/df/Maple_Guide_-_Will.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Gloom",
            icon: "https://static.wikia.nocookie.net/maplestory/images/1/15/Maple_Guide_-_Gloom.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Versus Hilla",
            icon: "https://static.wikia.nocookie.net/maplestory/images/d/da/Maple_Guide_-_Verus_Hilla.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Darknell",
            icon: "https://static.wikia.nocookie.net/maplestory/images/d/da/Maple_Guide_-_Guard_Captain_Darknell.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Guardian Angel Slime",
            icon: "https://static.wikia.nocookie.net/maplestory/images/e/e6/Maple_Guide_-_Guardian_Angel_Slime.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Princess No",
            icon: "https://static.wikia.nocookie.net/maplestory/images/6/61/Maple_Guide_-_Princess_No.png",
            crystalPrice: 25, rebootCrystalPrice: 25
        },
        {
            name: "Akechi Mitsuhide",
            icon: "https://static.wikia.nocookie.net/maplestory/images/5/53/Maple_Guide_-_Akechi_Mitsuhide.png",
            crystalPrice: 25, rebootCrystalPrice: 25
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

export default WeeklyBossTrack;