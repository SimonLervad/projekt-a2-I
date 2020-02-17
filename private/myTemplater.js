/* myTemplater.js Home made experimental templating */
"use strict";

const fs = require("fs");

const receipt = function(obj) {
    let html = `<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Contact</title>
        <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <h1>The bakery's Receipt</h1>
        <div id="placeholder">
        </div>
        <div>
            <h3>We will get back to you.</h3>
            <p><a href="/">Return to front page</a><p>
        </div>
    </body>
    <script>
    'use strict';
        const reqListener = function() {
            console.log(this.responseText);
            document.getElementById("placeholder").innerHTML = this.responseText;
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "./user.json");
        oReq.send();
    </script>
</html>`;
    return html;
}

exports.receipt = receipt;