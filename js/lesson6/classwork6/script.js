// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let n4 = 'Albus---__..Dumbldor'
//
// function normalizeName(name) {
//     name
//     name.replaceAll('---', ' ')
//     name.replaceAll('__', ' ')
//     name.replaceAll('..', ' ');
//
// }


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// let random = (length, num) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray;
// };
// let result = random(20, 100);
// console.log(result);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort


// // 1 варіант використовуючи попередню функцію
// result.sort(( a, b ) =>  a - b);
// console.log(result)
// result.sort(( a, b ) =>  b - a);
// console.log(result)

// 2 варіант з новою функцією

// let sortRandom = (length, num) => {
//     let emptyArray = [];
//     for (let i = 1; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray.sort((a, b) => a - b);
// };
// console.log(sortRandom(33, 100));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let numbFilter = (length) => {
//     let x = [];
//     for (let i = 0; i <length; i++) {
//         x.push(Math.floor(Math.random() * 100));
//     }
//     return x.filter(x => x % 2 === 0);
// };
// console.log(numbFilter(12));




// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arrayRandom = (length) => {
//     let x = [];
//     for (let i = 0; i <length; i++) {
//         x.push(Math.floor(Math.random() * 100));
//     }
//     return x.map(value => value.toString());
// }
// console.log(arrayRandom(4));




// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// function sortNums(numbers, direction) {
//     if (direction ==='asc') {
//         return numbers.sort((a, b) => a - b);
//     } else if (direction === 'desc') {
//         return numbers.sort((a, b) => b - a);
//     }
//     return [];
// }
//
// console.log(sortNums([21, 0, 89, 32], 'asc') );
// console.log(sortNums([21, 0, 89, 32], 'desc') );




// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration) );





// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5 ));