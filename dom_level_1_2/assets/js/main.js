"use strict";

// ========================================
//     JS-Einführung – DOM-Level-1_2
// ========================================

console.log("%c JS-Einführung – DOM-Level-1_2", "color: tomato");

document.querySelector('#info').innerHTML = '<h1>Hello World</h1>';
document.write('<h2>How are you?</h2>');

document.getElementById('container').innerHTML = 'start of the element';

document.write("end of the element");