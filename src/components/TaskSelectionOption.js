import mapleData from '../data/mapledata.json'

const TaskSelectionOption = (props) => {
    var arr = JSON.parse(localStorage.getItem('hidden')) || [];
    if (props.shown === "true") {
        return <select id="showSelection" key="showSelection" name="Shown" size="10">
            {mapleData.map(data => {
                if (!(arr.indexOf(data.name) > -1)) {
                    return <option key={data.name} value={data.name}>[{data.is}] {data.name}</option>
                }
            })}</select>
    } else {
        return <select id="hideSelection" key="hideSelection" name="Hidden" size="10">
            {mapleData.map(data => {
                if (arr.indexOf(data.name) > -1) {
                    return <option key={data.name} value={data.name}>[{data.is}] {data.name}</option>
                }
            })}</select>
    }
};

export default TaskSelectionOption;