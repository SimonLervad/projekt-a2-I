var el = document.getElementsByClassName('hiddenCountry');

var clickerFn = function(i) {
	console.log("click");
	document.getElementsByClassName('hiddenCountry')[0].style.height = "auto";
}

for (var i=0; i < el.length; i++) {
	console.log(i);
    // Here we have the same onclick
    console.log("u were clicked");
    el.item(i).onclick = clickerFn;
}