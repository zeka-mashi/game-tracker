import ImageComponent from './ImageComponent'
import toggleComplete from './toggleComplete'
import checkComplete from './checkComplete'
import completed from '../imgs/completed.png'

const MapData = (data) => {
    var arr = JSON.parse(localStorage.getItem('hidden')) || [];
    if ((data.props.type === data.track) && (arr.indexOf(data.props.name) > -1)) {
        return (
            <div className="overlay-wrapper hidden-item" id={data.props.name} key={data.props.name} onClick={() => toggleComplete(data.props)} >
                <img className="completed hidden" src={completed} alt={"completed " + data.props.name} onLoad={() => checkComplete(data.props)} />
                <div className="item">
                    <ImageComponent url={data.props.icon} alt={data.props.name} /><span>{data.props.name}</span>
                </div>
            </div>
        )
    } else if (data.props.type === data.track) {
        return (
            <div className="overlay-wrapper" id={data.props.name} key={data.props.name} onClick={() => toggleComplete(data.props)} >
                <img className="completed hidden" src={completed} alt={"completed " + data.props.name} onLoad={() => checkComplete(data.props)} />
                <div className="item">
                    <ImageComponent url={data.props.icon} alt={data.props.name} /><span>{data.props.name}</span>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default MapData;