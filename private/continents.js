/* myCities.js Home made experimental templating */
"use strict";

const cities = function(obj, obj2, obj3) {
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
    for (var i = 0; i < obj2.length; i++) {
        let name = `<h2>${obj2[i].name}</h2>\n`;
        let isCapital = `<p>Name: ${obj2[i].isCapital}</p>\n`;
        let population = `<p>Continent: ${obj2[i].population}</p>\n`;
        let country = `<p>Area: ${obj2[i].country}</p>\n`;
        dynamic += name;
        dynamic += isCapital;
        dynamic += population;
        dynamic += country;
    }
    for (var i = 0; i < obj3.length; i++) {
        let country = `<h2>${obj3[i].country}</h2>\n`;
        let language = `<p>Name: ${obj3[i].language}</p>\n`;
        let speakers = `<p>Continent: ${obj3[i].speakers}</p>\n`;
        let isOfficial = `<p>Area: ${obj3[i].isOfficial}</p>\n`;
        dynamic += country;
        dynamic += language;
        dynamic += speakers;
        dynamic += isOfficial;
    }

    
    return htmltop + dynamic + htmlbot;
}

exports.cities = cities;