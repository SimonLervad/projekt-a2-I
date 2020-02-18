/* myCities.js Home made experimental templating */
"use strict";

const cities = function(obj) {
    let htmltop = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Cities</title>
        <link rel="stylesheet" href="side.css"/>
        <link rel="stylesheet" href="style.css"/>
        <script src="menu.js"></script>

    </head>
    <body>
        <div class="info">
        <h1>Cities</h1>`;

    let htmlbot = `        </div>
    </body>
</html>`;

    let dynamic = "";

    for (var i = 0; i < obj.length; i++) {
        let name = `<p><h2>${obj[i].name}</h2></p>\n`;
        let capital = `<p>Is capital: ${obj[i].isCapital}</p>\n`;
        let population = `<p>Population: ${obj[i].population}</p>\n`;
        let country = `<p>Country: ${obj[i].country}</p>\n`;
        dynamic += name + capital + population + country;
    } 

    return htmltop + dynamic + htmlbot;
}

exports.cities = cities;