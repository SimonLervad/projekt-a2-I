/* myCities.js Home made experimental templating */
"use strict";

const cities = function(obj) {
    let htmltop = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Languages</title>
        <link rel="stylesheet" href="side.css"/>
        <script src="menu.js"></script>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>

        <div>`;

    let htmlbot = `        </div>
    </body>
</html>`;

    let dynamic = "";

    for (var i = 0; i < obj.length; i++) {
       let country = `<p><h2>Country: ${obj[i].country}</h2></p>\n`;
       let language = `<p>Language: ${obj[i].language}</p>\n`;
       let speakers = `<p>Speakers: ${obj[i].speakers}</p>\n`;
       let isOfficial = `<p>Is official: ${obj[i].isOfficial}</p>\n`;

       dynamic += country + language + speakers + isOfficial;

   }


/*
    dynamic += `<p>Country: ${obj[0].country} </br> Language: ${obj[0].language} </br> Speakers: ${obj[0].speakers} </br> Is official: ${obj[0].isOfficial}</p>`;
*/

    return htmltop + dynamic + htmlbot;
}

exports.cities = cities;
