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
    
        <div class="info">
        <h1>Country</h1>
	<form action="/myCountry" method="POST" id="countryForm">
		<h3>Add new country</h3>
		<label>Country: </label><br>
			<input type="text" name="country" placeholder="Denmark" required></input><br>
		<label>Continent: </label><br>
			    <select type="text" name="continent" placeholder="Continent" required>
				<option value="Africa">Africa</option>
				<option value="Antarctica">Antarctica</option>
				<option value="Australia">Australia</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="North America">North America</option>
				<option value="South America">South America</option>
			</select><br>
		<label>Area: </label><br>
			<input type="number" name="area" placeholder="42933"></input><br>
		<label>Population: </label><br>
			<input type="number" name="population" placeholder="5603000"></input><br>
		<label>The gouvernment form: </label><br>
			<input type="text" name="governmenform" placeholder="Democracy"></input><br>
		<button type="submit">OK</button>
	</form>`;
        

    let htmlbot = `        </div>
    </body>
</html>`;

    let dynamic = "";
    let au = `
        <div>
            <h1>Australia</h1>
        </div>
    `;
    let sa = `
        <div>
            <h1>South America</h1>
        </div>
    `;
    let na = `
        <div>
            <h1>North America</h1>
        </div>
    `;
    let eu = `
        <div>
            <h1>Europe</h1>
        </div>
    `;
    let as = `
        <div>
            <h1>Asia</h1>
        </div>
    `;
    let af = `
        <div>
            <h1>Africa</h1>
        </div>
    `;
    let an = `
        <div>
            <h1>Antarctica</h1>
        </div>
    `;
    for (var i = 0; i < obj.length; i++) {
        let info = `
             <div class="country">
                <h2>${obj[i].name}</h2>
                <table>
                    <tr>
                        <td>Continent</td>
                        <td>${obj[i].continent}</td>
                    </tr>
                    <tr>
                        <td>Area km2</td>
                        <td>${obj[i].area}</td>
                    </tr>
                    <tr>
                        <td>Population</td>
                        <td>${obj[i].population}</td>
                    </tr>
                    <tr>
                        <td>The government form</td>
                        <td>${obj[i].governmentForm}</td>
                    </tr>
                </table>
            </div>
        `;
        if (obj[i].continent === "Australia") {
            au += info;
        } else if (obj[i].continent === "North America") {
            na += info;
        } else if (obj[i].continent === "South America") {
            sa += info;
        } else if (obj[i].continent === "Africa") {
            af += info;
        } else if (obj[i].continent === "Asia") {
            as += info;
        } else if (obj[i].continent === "Europe") {
            eu += info;
        } else if (obj[i].continent === "Antarctica") {
            an += info;
        }
        /*
        let heading = `<h2>${obj[i].name}</h2>\n`;
        let continent = `<p>Continent: ${obj[i].continent}</p>\n`;
        let area = `<p>Area km2: ${obj[i].area}</p>\n`;
        let population = `<p>Population: ${obj[i].population}</p>\n`;
        let governmentForm = `<p>The goverment form: ${obj[i].governmentForm}</p>\n`;
        dynamic += heading + continent + area + population + governmentForm;
        */
    }
    dynamic += eu + as + af + na + sa + au + an;
    
    return htmltop + dynamic + htmlbot;
}

exports.cities = cities;