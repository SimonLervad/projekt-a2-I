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

        <div class="info">
        <h1>Languange</h1>
        <form action="/myLang" method="POST" id="langForm">
			<h3>Add a lanuage</h3>
			<label>Country: </label><br>
                <input type="text" name="country" placeholder="Denmark" required></input><br>
            <label>Language: </label><br>
				<input type="text" name="language" placeholder="Danish" required></input><br>
			<label>Speakers: </label><br>
				<input type="number" name="speakers" placeholder="99" required></input><br>
			<label>The official languange: </label><br>
				<select type="text" name="isOfficial" placeholder="isOfficial" required>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select><br>
			<button type="submit">OK</button>
		</form>`;

    let htmlbot = `        </div>
    </body>
</html>`;

    let dynamic = "";

    for (var i = 0; i < obj.length; i++) {
        let info = `
                <div class="city">
                    <h2>${obj[i].language}</h2>
                    <table>
                        <tr>
                            <td>Country</td>
                            <td>${obj[i].country}</td>
                        </tr>
                        <tr>
                            <td>Speakers</td>
                            <td>${obj[i].speakers}</td>
                        </tr>
                        <tr>
                            <td>Is official</td>
                            <td>${obj[i].isOfficial}</td>
                        </tr>
                    </table>
                </div>
            `;
        if (i === 0) {
            dynamic += `<div><h1>${obj[i].country}</h1></div>`;
        } else if (obj[i].country != obj[i - 1].country) {
            dynamic += `<div><h1>${obj[i].country}</h1></div>`;
        }
        dynamic += info;
    } 

    return htmltop + dynamic + htmlbot;
    /*
    for (var i = 0; i < obj.length; i++) {
        let language = `<h2>${obj[i].language}</h2>\n`;
       let country = `<p>Country: ${obj[i].country}</p>\n`;
       let speakers = `<p>Speakers: ${obj[i].speakers}</p>\n`;
       let isOfficial = `<p>Is official: ${obj[i].isOfficial}</p>\n`;
       */
}

exports.cities = cities;
