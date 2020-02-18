/* myCities.js Home made experimental templating */
"use strict";

const cities = function(obj, obj2, obj3, asset) {
    let h1 = "";
    if (asset === "na") {
        h1 = "North America"
    }
    if (asset === "sa") {
        h1 = "South America"
    }
    if (asset === "af") {
        h1 = "Africa"
    }
    if (asset === "eu") {
        h1 = "Europe"
    }
    if (asset === "as") {
        h1 = "Asia"
    }
    if (asset === "au") {
       h1 = "Australia"
    }
    if (asset === "an") {
        h1 = "Antarctica"
    }
    console.log(h1);
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
    <div id="body">
        <h1>${h1}</h1>
        <h1>
            Countries
        </h1>
        `;

        // dynamic content goes here

    let htmlbot = `</div>
    <script src="script.js"></script>
    </body>
</html>`;
    let countries = "";
    for (var i = 0; i < obj.length; i++) {  //countries
        if (obj[i].continent === h1) {
            let country = `
                <button class="play"><h2>${obj[i].name}</h2></button>
                <div class="countries">
                    <h1>
                        ${obj[i].name}
                    </h1>
                    <div class="hiddenCountry">
                        <table>
                            <tr>
                                <td>Continent</td>
                                <td>${obj[i].continent}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>${obj[i].area}</td>
                            </tr>
                            <tr>
                                <td>Population</td>
                                <td>${obj[i].population}</td>
                            </tr>
                            <tr>
                                <td>Government form</td>
                                <td>${obj[i].governmentForm}</td>
                            </tr>
                        </table>
                    `;
            for (var j = 0; j < obj3.length; j++) {  //cities
                if (obj2[j].country === obj[i].name) {
                    country += `
                    <h1>
                    Spoken languages
                    </h1>
                        <div class="language">
                            <h2>
                                ${obj3[j].language}
                            </h2>
                            <div class="hiddenLang">
                                <table>
                                    <tr>
                                        <td>Country</td>
                                        <td>${obj3[j].country}</td>
                                    </tr>
                                    <tr>
                                        <td>Speakers</td>
                                        <td>${obj3[j].speakers}</td>
                                    </tr>
                                    <tr>
                                        <td>Is official</td>
                                        <td>${obj3[j].isOfficial}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    `;
                }
            }
            for (var q = 0; q < obj2.length; q++) {  //language
                if (obj3[q].country === obj[i].name) {
                    console.log("test");
                    country += `
                        <h1>
                           Cities
                        </h1>
                        <div class="cities">
                            <h2>
                                ${obj2[q].name}
                            </h2>
                            <div class="hiddenCity">
                                <table>
                                    <tr>
                                        <td>Is capital</td>
                                        <td>${obj2[q].isCapital}</td>
                                    </tr>
                                    <tr>
                                        <td>Population</td>
                                        <td>${obj2[q].population}</td>
                                    </tr>
                                    <tr>
                                        <td>Country</td>
                                        <td>${obj2[q].country}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                    `;
                }
            }

            countries += country;
        }
    }
    return htmltop + countries + htmlbot;
}

exports.cities = cities;
