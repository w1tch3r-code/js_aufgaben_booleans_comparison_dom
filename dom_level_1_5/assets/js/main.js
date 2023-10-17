"use strict";

// ========================================
//     JS-Einführung – DOM-Level-1_5
// ========================================

console.log("%c JS-Einführung – DOM-Level-1_5", "color: tomato");

console.log(window.location.href);

document.querySelector('#show__url').onclick = function () {
    const output = document.querySelector('#output');
    const url = window.location.href;
    output.style = 'display: block';
    output.innerHTML = '<p>&nbsp;</p>' + url;
	
};