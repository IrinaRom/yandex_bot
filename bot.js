// ==UserScript==
// @name         Yandex bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Yandex bot
// @author       Romanova Irina
// @match        https://yandex.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keywords = ["речные круизы", "круизы по России","volga cruise", "речной теплоход"];
let keyword = keywords[getRandom(0,keywords.length)];
let infoInput = document.querySelectorAll(".input__control")[0];
let searchBtn = document.querySelectorAll(".button_theme_search")[0];
infoInput.value = keyword;
let links = document.links;

if (searchBtn !== undefined) {
    searchBtn.click();
}else{
    for (let i=0; i<links.length; i++) {
        if (links[i].href.includes('infoflot.com')){
            let link = links[i];
            link.setAttribute("target", "_self");
            link.click();           
            console.log("Нашел строку" + links[i]);
            break;
        }
    }
}
function getRandom(min,max) {
return Math.floor(Math.random()*(max-min)+min)
}
