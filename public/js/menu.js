"use strict";
const $ = function(foo) {
    return document.getElementById(foo);    
}

let links = ["", ];
const menu = $("header");

var insert = function () {
    for (let i = 1; i < links.length; i++) {
        console.log(i);
        links[i].draw();
    }
}

var initialize = function () {
let header = document.createElement("DIV");
header.setAttribute("id", "header");
let body = document.getElementsByTagName("body");
body[0].appendChild(header);

let link3 = Object.create(Links);
link3.init("Home", "/");
links.push(link3);
let link1 = Object.create(Links);
link1.init("Countries", "country");
links.push(link1);
let link2 = Object.create(Links);
link2.init("Cities", "city");
links.push(link2);
let link4 = Object.create(Links);
link4.init("Language", "lang");
links.push(link4);
insert();
}

// links
let Links = {
    init(name, link) {
        this.name = name;
        this.link = link;
    },

    draw() {
    	let link = document.createElement("A");
    	link.setAttribute("href", this.link);
    	link.innerHTML = this.name;
    	header.appendChild(link);
    }
};
window.addEventListener('load', initialize);