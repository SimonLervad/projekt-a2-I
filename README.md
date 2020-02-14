# projekt-a2-I

<h2>Overfør en database</h2>
Skriv dette ind i  terminalen, når du har tændt mongodb

<pre>	mongodump -d <databaseNavn> </pre>

Her laver mongo en zip-fil med databasen. For at få den ind på din computer, skal du skrive nedenstående i mongo

<pre> restore -d <databaseNavn> --dump dump/world </pre>
