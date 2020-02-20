/* myTemplater.js Home made experimental templating */
"use strict";
const fs = require("fs");

const receipt = function(obj) {
    let htmltop = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Cities</title>
        <link rel="stylesheet" type="text/css" href="side.css">
        <link rel="stylesheet" type="text/css" href="style.css">
        <script src="menu.js"></script>

    </head>
    <body>
        <div class="info">`;

    let htmlbot = `        </div>
    </body>
</html>`;

    let dynamic = `
    <p>Your informations are now on the site</p>
    <p>You entered the following</p>
            <h3>Country</h3>
            <p>${obj.POST.country}</p>

            <h3>Continent</h3>
            <p>${obj.POST.continent}</p>

            <h3>Area</h3>
            <pre>${obj.POST.area}</pre>

            <h3>Population</h3>
            <pre>${obj.POST.population}</pre>

            <h3>Governmentform</h3>
            <pre>${obj.POST.governmenform}</pre>

    `;



    return htmltop + dynamic + htmlbot;
}

exports.receipt = receipt;
