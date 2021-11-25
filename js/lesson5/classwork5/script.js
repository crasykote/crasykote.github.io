// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// const numMin = (num1, num2, num3,) => {
//   if (num1 < num2 && num1 < num3) {
//       document.write(num1);
//       console.log(num1);
//   } else if (num2 <num3 && num2 < num1) {
//       console.log(num2);
//       document.write(num2);
//   } else {
//       console.log(num3);
//       document.write(num3);
//   }
// };
// numMin(300, 10, -2);




// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const numMax = (num1, num2, num3) =>{
//     if (num1 > num2 && num1 > num3) {
//         document.write(num1);
//         console.log(num1);
//     } else if (num2 > num3 && num2 > num1) {
//         console.log(num2);
//         document.write(num2);
//     } else {
//         console.log(num3);
//         document.write(num3);
//     }
// };
// numMax(21, 5409, 32878);




// - створити функцію яка повертає найбільше число з масиву
//
// let maxArray = [1,21,34,500,78834,0,-32,884];
//
// const arrayMax = (array) => {
//   let max = array[0];
//   for (const element of array) {
//       if (element > max){
//           max = element;
//       }
//   }
//   return max;
// }
// document.write(`<h2>Найбільший елемент масиву: ${arrayMax(maxArray)}</h2>`);




// - створити функцію яка повертає найменьше число з масиву

// let minArray = [1,21,34,500,78834,0,-32,884];
//
// const arrayMin = (array) => {
//     let min = array[0];
//     for (const element of array) {
//         if (element < min) {
//             min = element;
//         }
//     }
//     return min;
// }
// document.write(`Найменший елемент масиву: ${arrayMin(minArray)}</h2>`)




// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let summArray = [25,50,5,20];
// const summElement = (array) => {
//   let sum = 0;
//   for (const arrayElement of array){
//       sum = arrayElement + sum;
//   }
//   return sum;
// }
// document.write(summElement(summArray));





// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let mediumArray = [20,40,60,80];
// const medium = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum = arrayElement + sum;
//     }
//     return sum/array.length;
// }
// document.write(medium(mediumArray));




// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// const minMax = (...arg) => {
//   let min = arg[0];
//   let max = arg[0];
//   for (const element of arg) {
//       if (element > max) {
//           max = element;
//       }
//       if (element < min) {
//           min = element;
//       }
//   }
//   console.log("max", max);
//   return min;
// }
// document.write('Мінімальне число з введених: ' + minMax(20, 30, -109, 98, 1))




// - створити функцію яка заповнює масив рандомними числами

// const funRandom = (length) => {
//   let arrayEmpty = [];
//   for (let i = 0; i < length; i++){
//       arrayEmpty.push(Math.floor(Math.random()*100));
//   }
//   return arrayEmpty
// };
// document.write(funRandom(20))




// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// const randomNumber = (length,limit) => {
//   let emptyArray = [];
//   for (let i = 0; i < length; i++) {
//       emptyArray.push(Math.round(Math.random() * limit));
//   }
//   return emptyArray;
// }
// document.write(randomNumber(25,50));




// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let array = [20, 30, 50, 80, 100]
// const reverse = (arr) => {
//   let newArr = [];
//   for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//       newArr[ri] = arr[i];
//     }
//
//   return newArr;
// }
// console.log(array);
// console.log(reverse(array));











