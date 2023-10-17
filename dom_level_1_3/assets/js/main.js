"use strict";

// ========================================
//     JS-Einführung – DOM-Level-1_3
// ========================================

console.log("%c JS-Einführung – DOM-Level-1_3", "color: tomato");

const gallery = document.querySelector('#gallery');
let number = 1;

// gallery.innerHTML = '<figure><img src="https://picsum.photos/600/300?random=1" alt="Random Pic 1" /><figcaption>Fig.1</figcaption></figure><p>&nbsp;</p><p>&nbsp;</p><figure><img src="https://picsum.photos/600/300?random=2" alt="Random Pic 2" /><figcaption>Fig.2</figcaption></figure><p>&nbsp;</p><p>&nbsp;</p><figure><img src="https://picsum.photos/600/300?random=3" alt="Random Pic 3" /><figcaption>Fig.3</figcaption></figure>';

gallery.insertAdjacentHTML('beforeend', '<figure><img src="https://picsum.photos/600/300?random=1" alt="Random Pic 1" /><figcaption>Fig.'+number+'</figcaption></figure><p>&nbsp;</p><p>&nbsp;</p>');

number++;

gallery.insertAdjacentHTML('beforeend', '<figure><img src="https://picsum.photos/600/300?random=2" alt="Random Pic 2" /><figcaption>Fig.'+number+'</figcaption></figure><p>&nbsp;</p><p>&nbsp;</p>');

number++;

gallery.insertAdjacentHTML('beforeend', '<figure><img src="https://picsum.photos/600/300?random=3" alt="Random Pic 3" /><figcaption>Fig.'+number+'</figcaption></figure><p>&nbsp;</p><p>&nbsp;</p>');
