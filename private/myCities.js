/* myCities.js Home made experimental templating */
"use strict";

const cities = function(obj) {
    let htmltop = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>McKilroy's Second Test Template</title>
        <link rel="stylesheet" href="side.css"/>
        <link rel="stylesheet" href="style.css"/>
        <script src="menu.js"></script>

    </head>
    <body>
        <div>`;

    let htmlbot = `        </div>
    </body>
</html>`;

    let dynamic = "";

    for (var i = 0; i < obj.length; i++) {
        let name = `<p><h2>${obj[i].name}</h2></p>\n`;
        let capital = `<p>${obj[i].isCapital}</p>\n`;
        let population = `<p>${obj[i].population}</p>\n`;
        let country = `<p>${obj[i].country}</p>\n`;
        dynamic += name;
        dynamic += capital;
        dynamic += population;
        dynamic += country;
    } 

    return htmltop + dynamic + htmlbot;
}

exports.cities = cities;