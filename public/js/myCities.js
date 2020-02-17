/* myCities.js Home made experimental templating */
"use strict";

const cities = function(obj) {
    let htmltop = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>McKilroy's Second Test Template</title>
        <link rel="stylesheet" href="side.css"/>

    </head>
    <body>
        
        <div>`;

    let htmlbot = `        </div>
    </body>
</html>`;

    let dynamic = "";
    dynamic += `<h2>${obj[0].name}</h2>
    <p><em>${obj[0].isCapital}</em></p>`;




    return htmltop + dynamic + htmlbot;
}

exports.cities = cities;