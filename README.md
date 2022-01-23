# ZhiXinProject - ZGIT Update System JS
<i>This file was last updated 23/01/2022 2:51PM EET // 23/01/2022 8:51PM CST</i>
## What is it?
The ZGIT Update System (ZUS) is a software publishing system that relies on server-side PHP script and client-side JavaScript.  
## What is this?
This repository is a JS implementation of the ZGIT Update System's API for developers.
## Why was this JS project created?
We seek to improve the API User's experience with the API. What previously needed JSON knowledge and rigorous typing, now you only need to log on to a web page and punch in the details. ```generateJsonData.js``` will do the rest for you in an easy, computerized, automated way.
## JSON format
Each software package is associated with a file containing a JSON string, storing its update information.  
A valid JSON string should contain these properties:
```jsonc
{
    "latest": /*int*/,
    "data": {
        "downloadBase": /*PathLike, partial -> the collection of software this belongs to*/,
        "fields"/*Indicates parameters of "data"*/: [
            "buildNumber", /*int, incrementally increase from 0*/
            "name", /*string, Name of the update*/
            "status", /*string, Phase the software is in, e.g. Alpha, Beta, Release*/
            "number", /*Version number, int.int.int.int*/
            "description", /*string, Description of the update, allows multi-line strings*/
            "download" /*JavaScript Object containing "type" and "data"*/
        ],
        "data" /*Collection of data of each release*/: [
            //Data of Update 0
            [
                0
            ],
            // Data of Update 1
            [
                1,
                "Update 1",
                "0.1.0.0",
                "Test",
                "[+] Created the project",
                {
                    "type": "updater",
                    "data": "UpdateCenter/1/update.exe"
                }
            ],
            // Data of Update 2
            [
                2,
                "Update 2",
                "0.1.0.1",
                "Alpha",
                "[=] fixed some bugs",
                {
                    "type": "updater",
                    "data": "UpdateCenter/2/update.exe"
                }
            ]
            // etc...
        ]
    }
}
```
## Ownership
&copy;2022 paperjet <a href="mailto://z.liu@outlook.com.gr">Email</a>