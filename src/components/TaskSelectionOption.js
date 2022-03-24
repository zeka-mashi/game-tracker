import mapleData from '../data/mapledata.json'

const TaskSelectionOption = () => {
    var arr = JSON.parse(localStorage.getItem('hidden')) || [];
    /*return <select multiple id="showSelection" key="showSelection" name="Shown" size="10">
        {mapleData.map(data => {
            if (!(arr.indexOf(data.name) > -1)) {
                return <option key={data.name} value={data.name}>[{data.is}] {data.name}</option>
            }
        })}</select>*/
    return <select name="showSelection" id="showSelection" multiple multiselect-search="true" multiselect-select-all="true" multiselect-max-items="0">
        {mapleData.map(data => {
            if (!(arr.indexOf(data.name) > -1)) {
                return <option selected key={data.name} value={data.name}>[{data.is}] {data.name}</option>
            }
            if (arr.indexOf(data.name) > -1) {
                return <option key={data.name} value={data.name}>[{data.is}] {data.name}</option>
            }
        })}
    </select>
};

export default TaskSelectionOption;