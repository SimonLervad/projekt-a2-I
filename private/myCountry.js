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
    for (var i = 0; i < obj.length; i++) {
        let heading = `<h2>${obj[i].continent}</h2>\n`;
        let name = `<p>Name: ${obj[i].name}</p>\n`;
        let continent = `<p>Continent: ${obj[i].continent}</p>\n`;
        let area = `<p>Area: ${obj[i].area}</p>\n`;
        let population = `<p>Population: ${obj[i].population}</p>\n`;
        let governmentForm = `<p>The goverment form: ${obj[i].governmentForm}</p>\n`;
        dynamic += heading + name + continent + area + population + governmentForm;
    }
    
    return htmltop + dynamic + htmlbot;
}

exports.cities = cities;