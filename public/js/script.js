/*
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
*/

    
var el = document.getElementsByClassName("play");
var i;


for (i = 0; i < el.length; i++) {
  el[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var countries = this.nextElementSibling;
    if (countries.style.display === "block") {
      countries.style.display = "none";
    } else {
      countries.style.display = "block";
    }
  });
}

var el1 = document.getElementsByClassName("play1");
var i;


for (i = 0; i < el1.length; i++) {
  el1[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var cities = this.nextElementSibling;
    if (cities.style.display === "block") {
      cities.style.display = "none";
    } else {
      cities.style.display = "block";
    }
  });
}