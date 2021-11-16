// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    // Вивести кожну змінну за допомогою: console.log , alert, document.write

/*
let q = "hello";
console.log(q);
alert(q);
document.write(q);

let a = "owu";
console.log(a);
alert(a);
document.write(a);

let z = "com";
console.log(z);
alert(z);
document.write(z);
*/




// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

/*
q = "ua";
console.log(q);
alert(w);
document.write(12);

a = 1;
console.log(s);
alert(s);
document.write(s+100);

z = 10;
console.log(x);
alert(x-10);
document.write(x);
*/




// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

/*let firstName = "Yuriy";
let middleName = "Yuriyovich";
let lastName = "Barabakh";
let person = firstName + middleName + lastName;
console.log(person)*/




// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

/*let firstName = prompt("enter your name");
let middleName = prompt("enter your middleName");
let age = prompt("enter your age");
alert('ddddd' + ' ' + firstName + ' ' + middleName +'nj,b'+ age +'ktn');*/




// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

/*let a = 100;
let b = '100';
let c = true;
console.log(typeof a + typeof b + typeof c);*/




// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false


// 123 ? '123' -> false
// 123 ? '123' -> true
//

/*
console.log (5 < 6);
console.log (5 > 6);
console.log (5 >= 6);
console.log (5 == 6);
console.log (10 >= 10);
console.log (10 <= 10);
console.log (10 !== 10);
console.log (10 != 10);
console.log (10 > 10);
console.log(123 < '123');
console.log(123 >= '123');
*/




// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

/*let str = "20";
let a = 5;
document.write(str + a + "<br/>");*/
//=205; let a = 5; - стало строкою, відбулась дія додавання "+str + a + "<br/>"

/*let str = "20";
let a = 5;
document.write(str - a + "<br/>");*/
//=15; значення str- стало строкою, відбулась дія віднімання

/*let str = "20";
let a = 5;
document.write(str * "2" + "<br/>");*/
//40; - два значення стають цифрові, відбулась дія множення

/*let str = "20";
let a = 5;
document.write(str / "2" + "<br/>");*/
//10; - str значення стає цифровим, відбулась дія ділення