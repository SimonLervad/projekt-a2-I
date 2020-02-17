/* myCities.js Home made experimental templating */
"use strict";

const cities = function(obj) {
    let htmltop = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Countries</title>
        <link rel="stylesheet" href="side.css"/>
        <script src="menu.js"></script>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <div id="info">`;

    let htmlbot = `        </div>
    </body>
</html>`;

    let dynamic = "";
    for (var i = 0; i < obj.length; i++) {
        let heading = `<h2>${obj[i].continent}</h2>\n`;
        let name = `<p>Name: ${obj[i].name}</p>\n`;
        let continent = `<p>Continent: ${obj[i].continent}</p>\n`;
        let area = `<p>Area: ${obj[i].area}</p>\n`;
        let population = `<p>Population: ${obj[i].population}</p>\n`;
        let governmentForm = `<p>The goverment form: ${obj[i].governmentForm}</p>\n`;
        dynamic += heading;
        dynamic += name;
        dynamic += continent;
        dynamic += area;
        dynamic += population;
        dynamic += governmentForm;
    }
    
    return htmltop + dynamic + htmlbot;
}

exports.cities = cities;