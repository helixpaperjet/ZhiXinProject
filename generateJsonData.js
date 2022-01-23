var url
var validity
document.getElementById("check").addEventListener("click", () => {
    var projectURL = document.getElementById("project-url").value
    // type check - checks the last 5 chars of projectURL
    var type = projectURL.substring(projectURL.length-5, projectURL.length)
    if (type === ".json") {
        $.ajax({
            url: projectURL,
            async: false,
            dataType: 'json',
            success: function (json) {
                document.getElementById("result").style.color = "#000000"
                document.getElementById("result").innerHTML = `JSON File identified: <br />${JSON.stringify(json)}`
                url = projectURL
                document.getElementById("download-base-insert").innerText = json.data.downloadBase
                validity = true
            }
            ,error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
                document.getElementById("result").innerHTML = `An Error occured: ${errorThrown}`
                document.getElementById("result").style.color = "#FF0000"
                validity = false
              }
          })
    }
    else {alert(`Invalid project URL type - ${type}, should be (".json")`); validity = false}
})

/*
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
*/
document.getElementById("btn-submit").addEventListener("click", function () {
    if (validity) {
        var dataJSON
        $.ajax({
        url: url,
        async: false,
        dataType: 'json',
        success: function (json) {
            console.log(json)
            dataJSON = json
        }
        })
        console.log(`dataJSON: ${JSON.stringify(dataJSON)}`)
        var latest = dataJSON.latest;
        var dataSet = dataJSON.data.data;
        var newestBuild = dataSet[dataSet.length - 1][0]
        var downloadBase = dataJSON.data.downloadBase;
        var Data = /** @class */ (function () {
            function Data(buildNumber, name, number, status, description, download) {
                this.latest = buildNumber
                this.data = {}
                this.data["downloadBase"] = downloadBase
                this.data["fields"] = ["buildNumber", "name", "number", "status", "description", "download"]
                this.data["data"] = dataSet
                this.data["data"].push([buildNumber, name, number, status, description, download])
            }
            return Data;
        }());
        var inputBuildNumber = document.getElementById("build-number")
        var inputName = document.getElementById("name")
        var inputNumber = document.getElementById("number")
        var inputStatus = document.getElementById("status")
        var inputDescription = document.getElementById("description")
        var inputDownloadType = document.getElementById("download-type")
        var inputDownloadData = document.getElementById("download-data")
        // Compose new Data JSON object
        try {
            if (
            inputBuildNumber.value != "" && 
            inputBuildNumber.value != "" && 
            inputName.value != "" && 
            inputNumber.value != "" && 
            inputStatus.value != "" && 
            inputDescription.value != ""
            ) {
                var newJSON = new Data(
                    inputBuildNumber.value,
                    inputName.value,
                    inputNumber.value,
                    inputStatus.value,
                    inputDescription.value,
                    {
                        "type": inputDownloadType.value,
                        "data": inputDownloadData.value
                    })
                console.log(JSON.stringify(newJSON))
                document.getElementById("json-export").innerText = JSON.stringify(newJSON)
            }
            else {console.log("One or more of the received values are empty!");alert("One or more of the received values are empty!")}
            }
            catch (e) {
                console.log(e)
                alert("Internal Error")
            }
    }
    else {alert("Project URL is either empty or incorrect")}
})


