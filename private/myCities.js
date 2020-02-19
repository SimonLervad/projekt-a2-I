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
        <h1>Cities</h1>
        <form action="/myCities" method="POST" id="cityForm">
			<h3>Add new city</h3>
			<label>Country: </label><br>
				<input type="text" name="country" placeholder="Denmark" required></input><br>
			<label>City: </label><br>
				<input type="text" name="city" placeholder="Kolding" required></input><br>
			<label>Population: </label><br>
				<input type="number" name="population" placeholder="57583"></input><br>
			<label>Capital: </label><br>
				<select type="text" name="capital" placeholder="Capital" required>
					<option value="Yes">Yes</option>
					<option value="no">No</option>
				</select><br>
			<button type="submit">OK</button>
		</form>`;

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