import ImageComponent from './ImageComponent'
import toggleComplete from './toggleComplete'
import checkComplete from './checkComplete'
import cross from '../imgs/cross.png'

const MapData = (data) => {
    if (data.props.type === data.track) {
        return (
            <div className="overlay-wrapper" id={data.props.name} key={data.props.name} onClick={() => toggleComplete(data.props)}>
                <img className="completed hidden" src={cross} alt={"completed " + data.props.name} onLoad={() => checkComplete(data.props)} />
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