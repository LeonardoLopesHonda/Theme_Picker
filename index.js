const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");

const clear_button = document.querySelector(".clear-btn");

const blue_theme_button = document.querySelector(".Blue");
const purple_theme_button = document.querySelector(".Purple");
const red_theme_button = document.querySelector(".Red");

const light_blue_theme_button = document.querySelector(".Light-Blue");
const light_purple_theme_button = document.querySelector(".Light-Purple");
const light_red_theme_button = document.querySelector(".Light-Red");

const dark_blue_theme_button = document.querySelector(".Dark-Blue");
const dark_purple_theme_button = document.querySelector(".Dark-Purple");
const dark_red_theme_button = document.querySelector(".Dark-Red");

function changeBtnBgOnHover(element, event, color, ...textColor){
    element.addEventListener(event, () => {
        element.style.background = color; 
        element.style.color = textColor;
    })
}

function changeBgOnBtnClick(element, event, color){
    element.addEventListener(event, () => {
        body.style.background = color;
        body.style.color = "white";
        Array.from(buttons).map(e => e.style.color = "white");
    })
}

function resetBg(element, event){
    element.addEventListener(event, () => {
        body.style.background = "white";
        body.style.color = "black";
        Array.from(buttons).map(e => e.style.color = "black");
    })
}

/* Reset Background */

resetBg(clear_button, 'click');

/* Normal Colors */

changeBtnBgOnHover(blue_theme_button, 'mouseover', 'blue', 'white');
changeBtnBgOnHover(purple_theme_button, 'mouseover', 'purple', 'white');
changeBtnBgOnHover(red_theme_button, 'mouseover', 'red', 'white');

changeBtnBgOnHover(blue_theme_button, 'mouseout', 'transparent');
changeBtnBgOnHover(purple_theme_button, 'mouseout', 'transparent');
changeBtnBgOnHover(red_theme_button, 'mouseout', 'transparent');

changeBgOnBtnClick(blue_theme_button, 'click', 'blue', 'white');
changeBgOnBtnClick(purple_theme_button, 'click', 'purple', 'white');
changeBgOnBtnClick(red_theme_button, 'click', 'red', 'white');

/* Light Colors */

changeBtnBgOnHover(light_blue_theme_button, 'mouseover', '#add8e6', 'white');
changeBtnBgOnHover(light_purple_theme_button, 'mouseover', '#af69ee', 'white');
changeBtnBgOnHover(light_red_theme_button, 'mouseover', '#ff7f7f', 'white');

changeBtnBgOnHover(light_blue_theme_button, 'mouseout', 'transparent');
changeBtnBgOnHover(light_purple_theme_button, 'mouseout', 'transparent');
changeBtnBgOnHover(light_red_theme_button, 'mouseout', 'transparent');

changeBgOnBtnClick(light_blue_theme_button, 'click', '#add8e6', 'white');
changeBgOnBtnClick(light_purple_theme_button, 'click', '#af69ee', 'white');
changeBgOnBtnClick(light_red_theme_button, 'click', '#ff7f7f', 'white');

/* Dark Colors */

changeBtnBgOnHover(dark_blue_theme_button, 'mouseover', '#00008b', 'white');
changeBtnBgOnHover(dark_purple_theme_button, 'mouseover', '#301934', 'white');
changeBtnBgOnHover(dark_red_theme_button, 'mouseover', '#8b0000', 'white');

changeBtnBgOnHover(dark_blue_theme_button, 'mouseout', 'transparent');
changeBtnBgOnHover(dark_purple_theme_button, 'mouseout', 'transparent');
changeBtnBgOnHover(dark_red_theme_button, 'mouseout', 'transparent');

changeBgOnBtnClick(dark_blue_theme_button, 'click', '#00008b', 'white');
changeBgOnBtnClick(dark_purple_theme_button, 'click', '#301934', 'white');
changeBgOnBtnClick(dark_red_theme_button, 'click', '#8b0000', 'white');