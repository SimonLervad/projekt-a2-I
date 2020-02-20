/* myTemplater.js Home made experimental templating */
"use strict";
const fs = require("fs");

const receipt = function(obj) {
    let htmltop = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Cities</title>
        <script src="menu.js"></script>
        <link rel="stylesheet" type="text/css" href="style.css">
        <link rel="stylesheet" type="text/css" href="side.css">

    </head>
    <body>
        <div class="info">`;

    let htmlbot = `        </div>
    </body>
</html>`;

    let dynamic = `
    <p>Your informations are not on the site</p>

    `;



    return htmltop + dynamic + htmlbot;
}

exports.receipt = receipt;
