// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// function User(id, name, surname, email, phone) {
//     this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
// }



// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

// const userArr = [
//     new User(5, 'Vasya', 'Vasiv', 'VV@gmail.com', 30630000012),
//     new User(1, 'Andriy', 'Lepshuy', 'LepshuyA@gmail.com', 30680000321),
//     new User(13, 'Misko', 'Pis', 'PisM@gmail.com', 30630000089),
//     new User(68, 'Olya', 'Vasiv', 'VasivO@gmail.com', 30630000654),
//     new User(324, 'Anya', 'Vasiv', 'VasivA@gmail.com', 30630002178),
//     new User(9, 'Bodya', 'Pes', 'PesB@gmail.com', 30680000062),
//     new User(56, 'Kolya', 'Vasiv', 'VasivK@gmail.com', 30630009876),
// ];
// console.log(userArr);




// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
//
// let filterUser = userArr.filter((item) => {
//     if (item.id % 2 === 0){
//     return item
//     }});
// console.log(filterUser);




// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//console.log(userArr.sort((a, b) => a.id - b.id));




// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//     }
// }



// створити пустий масив, наповнити його 10 об'єктами Client

// let clientArray = [
//     new Client(43, 'Bodya', 'Pes', 'PesB@gmail.com', 380680000026, ['bolt', 'uber', 'olx', 'fifa07']),
//     new Client(21, 'Vasya', 'Asd', 'AsdVasya@gmail.com', 380630000321, ['book', 'bank', 'rex', 'foto']),
//     new Client(2, 'Misko', 'Puhh', 'PuhhM@gmail.com', 380680054378, ['Karpaty', 'Lviv', 'Vivtsi', 'pes11']),
//     new Client(6, 'Olya', 'Vasiv', 'VasivO@gmail.com', 380630006754, ['girl', 'Bank', 'red', 'dog']),
//     new Client(9, 'Stepan', 'Giga', 'GigaS@gmail.com', 380680000006, ['song', 'riter', 'vesillya', 'DN', 'new year', 'korporatuvy']),
//     new Client(3, 'Victor', 'Pavlick', 'PavlickV@gmail.com', 380737860029, ['sex', 'drugs', 'rock', '&roll']),
//     new Client(1, 'Muhaylo', 'Poplavskiy', 'PoplavskiyM@gmail.com', 3806800005489, ['best', 'song', 'all', 'the world']),
//     new Client(10, 'Leo', 'Messi', 'MessiL@gmail.com', 380680001010, ['football', 'player', 'PSG', 'Argentina']),
//     new Client(7, 'Christiano', 'Ronaldo', 'Ronaldo@gmail.com', 380680007777, ['MU', 'Portugal', 'forward', 'left']),
//     new Client(33, 'Xavi', 'Alonso', 'AlonsoX@gmail.com', 380680003333, ['midfielder', 'Real', 'Madrid', 'fifa07']),
// ];
// console.log(clientArray);





// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sortClients = clientArray.sort((a, b) => a.order.length - b.order.length);
// console.log(sortCLients)









