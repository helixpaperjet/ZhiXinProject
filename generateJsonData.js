var dataJSON = require("./reference/UpdateCenter.json");
var latest = dataJSON.latest;
var dataSet = dataJSON.data.data;
var newestBuild = dataSet[dataSet.length - 1][0];
var downloadBase = dataJSON.data.downloadBase;
var Data = /** @class */ (function () {
    function Data(buildNumber, name, number, status, description, download) {
        this.data = {};
        this.latest = buildNumber;
        this.downloadBase = downloadBase;
        this.data["fields"] = ["buildNumber", "name", "number", "status", "description", "download"];
        this.data["data"] = dataSet;
        this.data["data"].push([buildNumber, name, number, status, description, download]);
    }
    return Data;
}());
function checkValid(buildNumber) {
    var returnValue;
    console.log("latest:".concat(dataSet[dataSet.length - 1][0]));
    if (buildNumber > latest) {
        returnValue += "OK";
        if (buildNumber > newestBuild + 1) {
        }
    }
    return returnValue;
}
checkValid(dataJSON);
var newJSON = new Data(3, "二月更新", "0.2.0.0", "Beta", "ehrgerhi", { "type": "updater", "data": "UpdateCenter/3/update.exe" });
console.log(newJSON);
console.log(JSON.stringify(newJSON));
