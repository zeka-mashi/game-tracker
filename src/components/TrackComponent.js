import MapData from './MapData'
import mapleData from '../data/mapledata.json'

const TrackComponent = (list) => {
    if (list.type === "weekly-quest-misc") {
        return mapleData.map(data => {
            if (data.type === "weekly-quest-misc") {
                return <MapData track="weekly-quest-misc" props={data} key={data.id} />
            }
        });
    } else if (list.type === "weekly-boss") {
        return mapleData.map(data => {
            if (data.type === "weekly-boss") {
                return <MapData track="weekly-boss" props={data} key={data.id} />
            }
        });
    } else if (list.type === "daily-quest") {
        return mapleData.map(data => {
            if (data.type === "daily-quest") {
                return <MapData track="daily-quest" props={data} key={data.id} />
            }
        });
    } else if (list.type === "daily-misc") {
        return mapleData.map(data => {
            if (data.type === "daily-misc") {
                return <MapData track="daily-misc" props={data} key={data.id} />
            }
        });
    } else if (list.type === "daily-boss") {
        return mapleData.map(data => {
            if (data.type === "daily-boss") {
                return <MapData track="daily-boss" props={data} key={data.id} />
            }
        });
    }
};

export default TrackComponent;