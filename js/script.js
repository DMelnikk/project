// console.log(something);
// let box;
// console.log(box);


// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false,
// }
// console.log(obj["name"]);
// let arr = ['plumb.png','orange.jpg','apple.bmp',6];
// console.log(arr[3]);
// const arr = [1,2,3];
// arr[10] = '3456';
// console.log(arr[10]);
//
//
// const arrObj = {
//     0: 1,
//     1: 2,
//     2: 3,
//     abc: {
//         df: [{},{}],
//         def: {
//
//         }
//     }
// };
//
// const b = 'b';
//
// // arrObj.b = '1234';
// arrObj['b'] = '1234';
// console.log(arrObj.b);
//
// console.log(arrObj["b"]);
// const obj = {
//     'Anna': 500,
//     'Alic': 800,
// };

// alert('Hello');


// const result = confirm(
//     "Are you here?"
// );
// console.log(result);

// const answer = +prompt('Are you 18?', "18");
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt('What is ur name?','');
// answers[1] = prompt('What is ur surname?','');
// answers[2] = prompt('How old are you?','');

// console.log(typeof(answers));
// console.log(typeof(null));

// const category = 'toys';
// console.log(`https://someurl.com/${category}/`);
//
// const user = 'Ivan';
// alert(`Hello, ${user}`);


// console.log('arr' + " - object");
// console.log(4 + " - object");

//
// let incr = 10,
//     decr = 10;
// ++incr;
// --decr;

// console.log(++incr);
// console.log(--decr);
//
// console.log(5%2);
// const num = true;
// const second = false;
// console.log(num ||  !second);


// const numberOfFilms = +prompt('How many movies did you watch?','');
// // console.log(numberOfFilms);
//
// const personalMovieDB = {
//   'count': numberOfFilms,
//   'movies':{},
//   'actors':{},
//   'genres':[],
//     'private':false,
// };
//
// const firstQuestion = prompt('What was the last movie you watch?'), secondQuestion = prompt('How would you rate him?');
//
// personalMovieDB.movies[firstQuestion] = secondQuestion;
// console.log(personalMovieDB);


// if (5 === 4) {
//     console.log('OK!');
// } else {
//     console.log('Not OKAY');
// }

// const num = 50;
// (num === 45) ? console.log('OK') : console.log('Not Ok')


//
// const num = 50;
// const sec = 50;
//
// switch (num) {
//     case 49:
//         console.log('Not correct');
//         break;
//     case sec:
//         console.log('Correct');
//         break;
//     default:
//         console.log('Not today');
//         break;
// }
//
//
//

// const hamburger = 5;
// const fries = 1;
//
// if(hamburger && fries) {
//     console.log('I\'m fed up ');
// } else {
//     console.log('Sorry but not today')
// }


// const hamburger = 2;
// const fries = 1;
//
// if(hamburger === 3 && fries === 1) {
//     console.log('We are going to eat');
// } else {
//     console.log('Not today');
// }

// console.log( NaN || 2 || undefined );
// // 2
// console.log( NaN && 2 && undefined );
// // NaN
// console.log( 1 && 2 && 3 );
// // 3
// console.log( !1 && 2 || !3 );
// // false
// console.log( 25 || null && !3 );
// // 25
// console.log( NaN || null || !3 || undefined || 5);
// // 5
// console.log( NaN || null && !3 && undefined || 5);
// // 5
// console.log( 5 === 5 && 3 > 1 || 5);
// // true

//
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
//
//
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
//
//
// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done!')
// }
//

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
//
//
// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// } else {
//     console.log('nope')
// }


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55)
//

// for (let i = 1; i < 10; i++) {
//     if(i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }


// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }


// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;
//
// for(let i = 1; i < length; i++) {
//
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n';
// }
// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First Level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second Level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if(k === 2) break first;
//             console.log(`Third Level: ${k}`);
//         }
//     }
// }

// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// for(let i = 5; i <= 10; i++) {
//     console.log(i);
// }

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// for(let i = 20; i >= 10; i--) {
//     if(i === 13) {
//         break
//     }
//     console.log(i);
// }
//

// При помощи цикла for выведите чётные числа от 2 до 10 включительно
// for(let i = 0; i <= 10; i++ ) {
//     if(i === 0) {
//         continue;
//     }
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i <= 16) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }

// const arrayOfNumbers = [];
// for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers.push(i);
// }
// console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16,'Hey', 20, 23,'What about you' , 50];
// const result = [];
// let reverse = [];
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === "string") {
//         arr[i] += ' - done';  // конкатенация с текстом
//         result.push(arr[i]);
//     } else {
//         result.push(arr[i] * 2);
//     }
//
//
// }
// // console.log(result);
// reverse = arr.reverse();
// console.log(reverse);


// const lines = 5;
// let result = '';
//
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
//
// console.log(result)

// let num = 20;
//
// function showFirstMessage(text) {
//     console.log(text);
//     // let num = 10;
//     console.log(num);
// }
// showFirstMessage('Hello');
// console.log(num);

// console.log(calc(5,4));
// function calc(a,b) {
//     return (a+b);
// }


//
// function ret() {
//     let num = 50;
//     return num;
// }
//
// const anotherNum = ret();
// console.log(anotherNum);
//
// const logger = function () {
//   console.log('Hello');
// };
//
// logger();


// const calc = (a,b) => {
//     console.log('1');
//     return (a + b);
// };
// console.log(calc(5,10));


// const usdCurr = 28;
// const discount = 0.9
//
//
// function convert (amount, curr) {
//     return amount * curr;
// }
//
// function promotion(result)
// {
//     console.log(result * discount);
// }
//
// promotion(convert(500, usdCurr));
//
// function test() {
//     for(let i = 0; i < 5; i++) {
//         console.log(i);
//         if(i === 3) return
//     }
//     console.log('DONE');
// }
// test();
//
//
// function doNothing(){};
// console.log(doNothing() === undefined);

// function returnName(name) {
//     return 'Hello -  ' + name;
// }
// console.log(returnName('Anton'));


// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
// console.log(returnNeighboringNumbers(10));

// function getMathResult(base, count) {
//     // Проверяем тип второго аргумента и его значение
//     if (typeof count !== 'number' || count <= 0) {
//         return base;
//     }
//
//     // Создаем массив для хранения чисел прогрессии
//     const result = [];
//
//     // Заполняем массив числами прогрессии
//     for (let i = 1; i <= count; i++) {
//         result.push(base * i);
//     }
//
//     // Преобразуем массив в строку, соединяя числа через "---"
//     return result.join('---');
// }
//
// console.log(getMathResult(5,2));

// const str = 'test';
// const arr = [1,2,3];
// // console.log(str[1]);
// // console.log(str.toUpperCase());
// console.log(str);
//
// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));
//
// const logg = 'Hello world';
// console.log(logg.slice(-6));
// console.log(logg.substring(6,11));
// console.log(logg.substr(6,11));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseFloat(test));
// console.log(parseInt(test));


// function calculateVolumeAndArea(edgeLength) {
//     if (typeof edgeLength !== 'number' || !Number.isInteger(edgeLength) || edgeLength <= 0) {
//         return 'При вычислении произошла ошибка';
//     }
//     const volume = Math.pow(edgeLength, 3); // Объем куба: длина ребра в кубе
//     const surfaceArea = 6 * Math.pow(edgeLength, 2);
//     return `Объем куба: ${volume}, площадь всей поверхности: ${surfaceArea}`;
// }

 // console.log(calculateVolumeAndArea(5));

// function getCoupeNumber(seatNumber) {
//     // Проверяем, что аргумент - это целое число от 1 до 36
//     if (typeof seatNumber !== 'number' || !Number.isInteger(seatNumber) || seatNumber <= 0) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }
//
//     if (seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }
//
//     // Вычисляем номер купе (каждое купе содержит 4 места)
//     const coupeNumber = Math.ceil(seatNumber / 4);
//
//     return 'Номер вашего купе ' +  coupeNumber;
// }
//
// console.log(getCoupeNumber(10));


// function getTimeFromMinutes(minutes) {
//     // Проверяем, что аргумент - это целое число от 0 до 600
//     if (typeof minutes !== 'number' || !Number.isInteger(minutes) || minutes < 0 || minutes > 600) {
//         return "Ошибка, проверьте данные";
//     }
//
//     // Вычисляем часы и минуты
//     const hours = Math.floor(minutes / 60);
//     const remainingMinutes = minutes % 60;
//
//     // Определяем правильное окончание для слова "час"
//     let hoursWord;
//     if (hours === 1) {
//         hoursWord = "час";
//     } else if (hours >= 2 && hours <= 4) {
//         hoursWord = "часа";
//     } else {
//         hoursWord = "часов";
//     }
//
//     return `Это ${hours} ${hoursWord} и ${remainingMinutes} минут`;
// }
//
// console.log(getTimeFromMinutes(60));


// function findMaxNumber(a, b, c, d) {
//     // Проверяем, что все аргументы являются числами
//     if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') {
//         return 0;
//     }
//     // Возвращаем максимальное значение из четырех чисел
//     return Math.max(a, b, c, d);
// }
// console.log(findMaxNumber(2,4,5,10));
//


// function fib(n) {
//     // Проверяем, что аргумент - это целое положительное число
//     if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
//         return '';
//     }
//
//     // Если n равно 0, возвращаем пустую строку
//     if (n === 0) {
//         return '';
//     }
//
//     // Инициализируем массив Фибоначчи
//     let fibSequence = [];
//     // 4 4-1 + 4 - 2  = 3 + 2
//     // 3-1 + 3 - 2 = 3
//     for (let i = 0; i < n; i++) {
//         if (i === 0) {
//             fibSequence.push(0);
//         } else if (i === 1) {
//             fibSequence.push(1);
//         } else {
//             // n = 4 ,  для i =  3 = >                   // 2               // 1
//                                             // 2 + 1 = 3
//                                             // складываем первое число с вторым из массива fibSequence
//                                             // записываем в массив число 2
//
//             // n = 5 , для i = 4 =>       // 3          // 2
//                                             // 2 + 1 = 3
//                                             // записываем в массив число 3
//             fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
//         }
//     }
//
//     // Возвращаем числа Фибоначчи через пробел
//     return fibSequence.join(' ');
// }
//
// console.log(fib(5));


// function first() {
//     // do smth
//     setTimeout(function () {
//         console.log(1);
//     },500)
// }
//
// function second() {
//     console.log(2);
// }
//
// first();
// second();
//
// function learnJS(lang, callback) {
//     console.log(`I am learning: ${lang}`);
//     callback();
// }
//
// function done() {
//     console.log('I have done this lesson');
// }
//
// learnJS('JavaScript',done);


// Lesson 31

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest : function () {
//         console.log('Test');
//     }
// };
//
// options.makeTest();
//
// const {border, bg} = options.colors
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Property ${i} has ${options[key][i]} value `)
//             counter++;
//         }
//     } else {
//         console.log(`Property ${key} has ${options[key]} value `)
//         counter++;
//     }
// }
// console.log(counter);
//

// Lesson 32

// const arr = [12,10,1,2,3,6,8];
// arr.sort(compareNum);
// console.log(arr);
//
// function compareNum(a,b) {
//     return a - b;
// }
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);


// arr.forEach(function (item, i,array){
//     console.log(`${i}: ${item} inside array ${array}`);
// });

// arr.pop();
// arr.push(10);
//
// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("","");
// const products = str.split(', ');
// products.sort();
// console.log(products.join(';'));


// Lesson 34


// let a = 5,
//     b = a;
//
// b = b + 5;
// console.log(b);
// console.log(a);
//
// const  obj = {
//     a: 5,
//     b : 1,
// };

// const copy = obj; // ссылка на объект , передача по ссылке
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
//
//     let key;
//     for(key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
//
// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//       x: 7,
//       y: 4,
//   }
// };
//
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;
// // console.log(newNumbers);
// // console.log(numbers);
//
// const add = {
//   d: 17,
//   e: 20,
// };
//
// const clone = (Object.assign({},add));
// clone.d = 20;
// // console.log(add);
// // console.log(clone);
//
// const oldArray = ['a','b','c'];
// const newArray = oldArray.slice();
// newArray[2] = 'adasdads';
// console.log(newArray);
// console.log(oldArray);


// const video = ['youtube','vimeo','rutube'],
//         blogs = ['wordpress','live','blogger'],
//         internet = [...video, ...blogs, 'vk','facebook'];
// console.log(internet);

// function log(a,b,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//
// const num = [2,5,7];
//
// log(...num);
//
// const array = ["a","b"];
// const newAarray = [...array];
// console.log(newAarray);
//
// const q = {
//     one: 1,
//     two: 2,
// }
//
// const newObj = {
//     ...q,
// }
// console.log(newObj);

// HomeWork

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month',
//     }
// };
//
// function showExperience(plan) {
//     const {
//         skills: {exp}
//     } = plan;
//     return exp;
// }
// console.log(showExperience(personalPlanPeter));


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month',
//     }
// };
//
// function showProgrammingLangs(plan) {
//     const { skills: { programmingLangs } } = plan;
//
//     if (!programmingLangs || Object.keys(programmingLangs).length === 0) {
//         return ''; // Возвращаем пустую строку, если языков нет
//     }
//
//     let result = '';
//     for (const lang in programmingLangs) {
//         result += `Язык ${lang} изучен на ${programmingLangs[lang]}\n`;
//     }
//     return result.trim(); // Убираем лишний перенос строки в конце
// }
//
// console.log(showProgrammingLangs(personalPlanPeter));
//
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month',
//     },
//     showAgeAndLangs(plan) {
//         const { age, skills: { languages } } = plan;
//         const upperCaseLanguages = languages.map(lang => lang.toUpperCase()).join(' ');
//         return `Мне ${age} и я владею языками: ${upperCaseLanguages}`;
//     }
// };
//
// // Пример использования
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


// function showFamily(family) {
//     if(!family || family.length === 0) {
//         console.log('Family is empty');
//     }
//
//     res = [];
//     for(const member in family) {
//         res[member] = family[member];
//     }
//     return 'Family contains ' + res;
//
// }
// fam = ['Anna','Bella'];
// console.log(showFamily(fam));

// function standardizeString(string) {
//     if(!string || string.length === 0) {
//         console.log('String is empty');
//     }
//
//     res = [];
//     for(const str in string) {
//         res[str] = string[str].toLowerCase();
//     }
//     return res;
// }
// string = ['HHDSDS','DSADASD','SDADSAD'];
// console.log(standardizeString(string));
//

// function reverse(input) {
//     if (typeof input !== 'string') {
//         return "Ошибка!"; // Проверяем, является ли входной параметр строкой
//     }
//     return input.split('').reverse().join('').toLowerCase(); // Разбиваем строку на массив, переворачиваем и объединяем обратно
// }
//
// let str = 'HELLO HOW ARE YOU';
// console.log(reverse(str));



// Lesson 35

// let str = 'some';
// let strObj = new String(str);
// // console.log(typeof(str));
// // console.log(typeof(strObj));
//
// // console.dir([1,2,3]);
//
// const solider = {
//     health: 400,
//     armor:100,
//     sayHello: function () {
//         console.log('Hello');
//     }
// };
//
// const john = Object.create(solider);
// // john.__proto__ = solider;
// // Object.setPrototypeOf(john,solider);
//
// // console.log(john.armor);
//
// john.sayHello();

// Lesson 36

// const persnalMovieDB = {
//     count() {
//         let nomberOfFilms;
//         nomberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         while (nomberOfFilms == '' || nomberOfFilms == null || isNaN(nomberOfFilms)) {
//             nomberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
//         }
//         this.count = nomberOfFilms;
//         function detectPersonalLevel() {
//             if (nomberOfFilms < 10) {
//                 alert('Просмотрено давольно-таки мало фильмов');
//             } else if (nomberOfFilms < 30) {
//                 alert('Вы классический зритель');
//             } else {
//                 alert('Вы киноман!');
//             }
//         }
//         detectPersonalLevel();
//     },
//     showYourMovies() {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt('Один из последних просмотренных фильмов?'),
//                 b = +prompt('Насколько оцениет его?');
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 this.movies[a] = b;
//                 console.log('done!');
//             } else {
//                 console.log('error!');
//                 i--;
//             }
//         }
//     },
//     movies: {},
//     actors: {},
//     writeYourGenres() {
//         for (let i = 1; i < 4; i++) {
//             persnalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//             while (persnalMovieDB.genres[i - 1] == '' || persnalMovieDB.genres[i - 1] == null) {
//                 persnalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//             }
//         }
//     },
//     genres: ['ужас', 'qwqccacac'],
//     privat: false,
//     toggleVisibleMyDB() {
//         if (persnalMovieDB.privat === false) {
//             persnalMovieDB.privat = true;
//             //console.log('первый консоль');
//             console.log(persnalMovieDB.privat);
//         } else {
//             persnalMovieDB.privat = false;
//             //console.log('второй консоль');
//             console.log(persnalMovieDB.privat);
//         }
//     },
//     showMyDB() {
//         if (persnalMovieDB.privat === false) {
//             console.log(persnalMovieDB);
//         }
//     }
// };
//
// persnalMovieDB.count();
// persnalMovieDB.showYourMovies();
// persnalMovieDB.writeYourGenres();
// persnalMovieDB.toggleVisibleMyDB();
// persnalMovieDB.showMyDB();
// persnalMovieDB.genres.forEach(function (item, i,) {
//     console.log(`Любимый жанр ${i} - это ${item}.`);
// });
//



// function isBudgetEnough(data) {
//     // Шаг 1: Вычисление общей площади всех магазинов
//     const totalArea = data.shops.reduce((total, shop) => total + shop.width * shop.length, 0);
//
//     // Шаг 2: Вычисление общего объема торгового центра
//     const totalVolume = totalArea * data.height;
//
//     // Шаг 3: Стоимость отопления для всего объема
//     const totalHeatingCost = totalVolume * data.moneyPer1m3;
//
//     // Шаг 4: Сравнение бюджета и стоимости отопления
//     if (data.budget >= totalHeatingCost) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }
//
// // Пример использования:
// const shoppingMallData = {
//     shops: [
//         { width: 10, length: 5 },
//         { width: 15, length: 7 },
//         { width: 20, length: 5 },
//         { width: 8, length: 10 }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };
//
// console.log(isBudgetEnough(shoppingMallData));
//


// function sortStudentsByGroups(students) {
//     // Шаг 1: Сортировка учеников по алфавиту
//     students.sort();
//
//     // Шаг 2: Создание групп по 3 человека
//     const groups = [];
//     while (students.length >= 3) {
//         groups.push(students.splice(0, 3));  // Берем первые 3 ученика
//     }
//
//     // Шаг 3: Определение оставшихся учеников
//     let remainingStudents = students.length > 0 ? `Оставшиеся студенты: ${students.join(', ')}` : 'Оставшиеся студенты: -';
//
//     // Шаг 4: Возвращаем результат: массив с группами и строкой о оставшихся студентах
//     return [...groups, remainingStudents];
// }
//
// // Пример использования
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// console.log(sortStudentsByGroups(students));


//Lesson 37
