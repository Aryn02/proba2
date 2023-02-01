
//DOM - document object model
// название тэга, классб, id
let title = document.getElementsByTagName('h1') // returns array

let text = document.getElementsByClassName('txt') // returns array

let uniq = document.getElementById('uniq') // returns just one element

let title1 = document.querySelectorAll('h1') // .txt is class, returns array

let uniq1 = document.querySelector('#uniq') // #uniq is id , returns one element
console.log(uniq1);


// // inner HTML, outer HTML
// title2[0].innerHTML = 'Changed';
// title2[0].outerHTML = '<h3>Outer</h3>'; //меняет текст тэга тем самым удаляет его
// из списка таитл так как в таитле только элементы с тэгом h1 
// title2[0].classList.add('added')// adding a class
// title[0].classList.remove('added')// removing class