const dataJSON = require("./reference/UpdateCenter.json")
const latest = dataJSON.latest
const dataSet = dataJSON.data.data
const newestBuild = dataSet[dataSet.length - 1][0]
const downloadBase = dataJSON.data.downloadBase
class Data {
    latest: number
    downloadBase: string
    data = {}
    constructor(buildNumber: number,name: string,number: string,status: string,description: string,download: Object) {
            this.latest = buildNumber
            this.downloadBase = downloadBase
            this.data["fields"] = ["buildNumber", "name", "number", "status", "description", "download"]
            this.data["data"] = dataSet
            this.data["data"].push([buildNumber, name, number, status, description, download])
        }
}
function checkValid(buildNumber: number) {
    let returnValue: string
    console.log(`latest:${dataSet[dataSet.length - 1][0]}`)
    if (buildNumber > latest) {
        returnValue += "OK"
        if (buildNumber > newestBuild + 1) {

        }
    }
    return returnValue
}

checkValid(dataJSON)
let newJSON = new Data(3, "二月更新", "0.2.0.0", "Beta", "ehrgerhi", {"type": "updater", "data":"UpdateCenter/3/update.exe"})
console.log(newJSON)
console.log(JSON.stringify(newJSON));
