//
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

// const areaRectangle = (a, b) => {
//   return a * b;
// }
// console.log(areaRectangle(20, 100));
// document.write('Площа прямокутника: ' + areaRectangle(20, 100));




// - створити функцію яка обчислює та повертає площу кола

// const areaCircle = (r) => {
//   let radius = r ** 2;
//   return 3.14 * radius;
// }
// console.log(areaCircle(100));
// document.write('Площа круга: ' + areaCircle(100));




// - створити функцію яка обчислює та повертає площу циліндру

// const areaCylinder = (r, h) => {
//   return 2 * 3.14 * r * h;
// }
// console.log(areaCylinder(100, 100));
// document.write('Площа циліндра: ' + areaCylinder(100, 100));


// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [21,88,43, 'wow', true, false, 'mars'];
//
// const dataArray = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     document.write(array[i]);
//   }
// }
// dataArray(array);




// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// const dataP = (text) => {
//   document.write(`<p>${text}</p>`);
//   document.write(`<p>${text}</p>`);
//   document.write(`<hr>`);
//   // ================================== за допомогою циклу ========================
//   for (let i = 0; i <= 25; i++) {
//     document.write(`<p>${i} - ${text}</p>`);
//   }
// }
// dataP('empty text');




// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// const createUl = (arg) => {
//   document.write(`<ul>`);
//   document.write(`<li>${arg}</li>`);
//   document.write(`<li>${arg}</li>`);
//   document.write(`<li>${arg}</li>`);
//   document.write(`</ul>`);
// }
// createUl('text');




// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// const createUlDinamic = (text,number) => {
//   document.write(`<ul>`)
// for (let i = 0; i < number; i++) {
//   document.write(`<li>${text}</li>`);
//   }
//   document.write(`</ul>`)
// }
// createUlDinamic('empty li', 4);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let anyArray = ['KIA', false, true, 1990, 'superman'];
//
// const primitives = (array) => {
//   document.write(`<ol>`)
//   for (let i = 0; i < array.length; i++) {
//     document.write(`<li>${array[i]}</li>`);
//   }
//   document.write(`</ol>`)
// }
// primitives(anyArray);




// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let newArray = [{id:1, name: 'Yoda', age: 889}, {id:2, name: 'Vasya', age: 29}, {id:3, name: 'Olya', age: 21}];
//
// const objArray = (array) => {
//   for (const arrayElement of array) {
//     document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
//   }
// }
// objArray(newArray);






