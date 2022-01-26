
function readTextFile(file, callback, variable) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText, variable);
        }
    }
    rawFile.send('string');
}

const state = {
    data: [],
    currentFilter: "Daily"
}

readTextFile("/src/model/data.json", function(text, variable){
    var data = JSON.parse(text);
    variable.push(...data);
    console.log(state);
}, state.data);