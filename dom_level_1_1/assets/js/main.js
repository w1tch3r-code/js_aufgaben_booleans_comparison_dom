"use strict";

// ========================================
//     JS-Einführung – DOM-Level-1_1
// ========================================

console.log("%c JS-Einführung – DOM-Level-1_1", "color: tomato");

document.write('<h1>Hello World!</h1>');
document.write('<br>');
document.write('<p>Have a nice day!</p>');

const myText = 'Hello Again!';

document.write(myText);
document.write('<br>');

const vorname = 'Rainer';
const nachname = 'Busch';

document.write('Name: ' + vorname + '<br>');
document.write('Nachname: ' + nachname  + '<br>');

document.write(`Hi, ich bin ${vorname} ${nachname}.`);