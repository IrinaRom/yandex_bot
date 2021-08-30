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

let keywords = ["круизы по Нилу"];
let keyword = keywords[getRandom(0,keywords.length)];
let infoInput = document.querySelectorAll(".input__control")[0];
let searchBtn = document.querySelectorAll(".button_theme_search")[0];
//infoInput.value = keyword;
let links = document.links;
let nextPage = document.querySelector(".pager__item_kind_next");

if (searchBtn !== undefined) {
    let i = 0;
    let timerId = setInterval(()=>{
        infoInput.value += keyword[i];
        i++;
        if (i == keyword.length) {
            clearInterval(timerId);
            searchBtn.click();
        }
    },500);
}else if(location.hostname == 'infoflot.com'){

    setInterval(()=>{
        let index = getRandom(0, links.length);
        if(getRandom(0,101) >= 80) {
        location.href = "https://www.yandex.ru";
        }
        if (links[index].href.indexOf("infoflot.com") !== -1)
            links[index].click();}, getRandom(1000, 5000));
}else{
    let nextYandexPage = true;
    for (let i=0; i<links.length; i++) {
        if (links[i].href.includes('infoflot.com')){
            let link = links[i];
            link.setAttribute("target", "_self");
            let nextYandexPage = false;
            setTimeout(()=>{link.click();},getRandom(3000,7000));
            console.log("Нашел строку " + links[i]);
            break;
        }
    }
    if (document.querySelector('.pager__item_current_yes').innerText == "5") {
        let nextYandexPage = false;
        location.href = "https://www.yandex.ru";
    }
    if (nextYandexPage) {
        setTimeout(()=>{nextPage.click();},getRandom(2000,6000));

    }
}

function getRandom(min,max) {
    return Math.floor(Math.random()*(max-min)+min)
}
