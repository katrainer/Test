// task 1-4

let searchInput = document.getElementById('search_input');
let searchButton = document.getElementById('search_button');

function getInputValue() {
    let inputValue = searchInput.value;
    (inputValue != 'google') ? alert(inputValue) :
        alert('Yandex круче. Но это не точно');
    console.log(arrayPeople[0].name);
}

searchButton.addEventListener('click', getInputValue);



// task 5
//
// let vasa = {name: 'Vasa', age: 20};
// let kola = {name: 'Kola', age: 21};
// let lena = {name: 'Lena', age: 23};
// let arsent = {name: 'Arsent', age: 26};
//
// let arrayPeople = [vasa, kola, lena, arsent];



// task 6

// function superSum(a, b) {
//     alert(+a + +b);
// }
// superSum(12, 11);



// task 7

// let arr = [1, 2, 3, -4, -5, 7, -12, 1, -6, 6];
//
// function findMaxMin(array) {
//     let min = array[0];
//     let max = array[0];
//     for (let i = 1; i<array.length; i++){
//         min = (array[i]<min) ? array[i] : min;
//         max = (array[i]>max) ? array[i] : max;
//     }
//     console.log(min, max);
// }
//
// findMaxMin(arr);



// task 8

// function changeValues(a, b) {
//     let c = a;
//     a = b;
//     b = c;
//     console.log(a);
//     console.log(b);
// }
//
// changeValues(1, 3);



// task 9

// function getMaxElement(array) {
//     let max = array[0];
//     for (let i = 1; i<array.length; i++){
//         max = (array[i]>max) ? array[i] : max;
//     }
//     return max;
// }



// task 10

// let searchInput = document.getElementById('search_input');
// let searchButton = document.getElementById('search_button');
//
// function getInputValue() {
//     let inputValue = searchInput.value;
//     (inputValue != 'google') ? setTimeout(function () {
//             alert(inputValue);
//     }, 3000)  :
//         setTimeout(function () {
//             alert('Yandex круче. Но это не точно');
//         }, 3000);
// }
//
// searchButton.addEventListener('click', getInputValue);