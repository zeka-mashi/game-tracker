import mapleData from '../data/mapledata.json'

const TaskSelectionOption = (props) => {
    if (props.shown === "true") {
        return <select id="showSelection" key="showSelection" name="Shown" size="10">
            {mapleData.map(data => {
                if (!(localStorage.getItem('show ' + data.name) === "false")) {
                    return <option key={data.id} value={data.name}>[{data.is}] {data.name}</option>
                }
            })}</select>
    } else {
        return <select id="hideSelection" key="hideSelection" name="Hidden" size="10">
            {mapleData.map(data => {
                if (localStorage.getItem('show ' + data.name) === "false") {
                    return <option key={data.id} value={data.name}>[{data.is}] {data.name}</option>
                }
            })}</select>
    }
};

export default TaskSelectionOption;