// ===== способи створення об'єкта:

// --- 1

// Object();

// var ob = new Object();
// ob.property = "test";
// alert(ob.property);

// --- 2

// Object.create();

// --- 3

// var ob = Object.create(null, { property: { value: "Test" } });
// alert(ob.property);

// --- 4
//  літеральний спосіб

// var ob = { property: "tesT" };
// alert(ob.property);

// --- 5
// функція-конструктор

// function myOb() {
//   this.property = "tEst";
// }
// var ob = new myOb();
// alert(ob.property);

// --- 6
// class

// class myOb {
//   constructor() {
//     this.property = "teSt";
//   }
// }
// var ob = new myOb();
// alert(ob.property);

// -----

// ООП

// процедурне програмування

// -----
// розрахуємо суму кредиту

// const summ = 20000;
// const month = 12;
// const p = 1000;

// const credit = (summ, date, p) => {
//   return summ + p * date;
// };

// console.log(credit(summ, month, p)); // 32000

// -----

// об*єктно орієнтоване програмування

// const credit = {
//   summ: 20000,
//   month: 12,
//   p: 1000,
//   result() {
//     return this.summ + this.p * this.month;
//   },
// };

// console.log(credit.result()); // 32000

// -----

//класи - це загальна схема
// обєкт класу - те, що зроблено за схемою
// екземпляр класу - обєкт, що зібран за схемою
// інтерфейс - методи взаємодії - набор класів
// інкапсуляція - обєднує методи і данні
// абстракція - спосіб виділити значимі і не розглядати незначимі
// наслідування - властивість, що описує клас на основі існуючого
// поліморфізм - властивість

// ----
// класи class

// // робимо схему кредиту:
// class Bank {
//   static type = "bank";
//   constructor(options) {
//     this.summ = options.summ;
//     this.month = options.month;
//     this.p = options.p;
//   }

//   credit() {
//     return console.log(this.summ + this.p * this.month);
//   }
// }

// // на основі цієї схеми видаємо кредит:

// const userBank = new Bank({
//   summ: 30000,
//   month: 5,
//   p: 500,
// });

// console.log(userBank); // відає всю інфомацію про кредит
// userBank.credit(); // 32500
// console.log(Bank.type); // Bank

// -----

// class Bank {
//   static type = "Privat";
//   constructor(options) {
//     this.summ = options.summ;
//     this.month = options.month;
//     this.p = options.p;
//   }

//   credit() {
//     return console.log("I am Privat");
//   }
// }

// class NewBank extends Bank {
//   constructor(options) {
//     super(options);
//     this.card = options.card;
//   }
//   credit() {
//     super.credit();
//     return console.log("I am Aval");
//   }
// }

// const aval = new NewBank({
//   summ: 30000,
//   month: 5,
//   p: 500,
//   card: true,
// });

// console.log(aval.card); // true
// console.log(aval.credit()); // I am Privat I am Aval

/* 
оператор new можемо використовувати з класами, а можемо
і з функціями (крім стрілочних)- утворюємо багато нових

*/

// -----
// get & set
// get  - коли зчитуємо інформацію
// set - коли змінюємо інформацію

// class User {
//   constructor(props) {
//     this.name = props.name;
//   }
//   firstName = "";
//   lastName = "";
//   age = "";
//   city = "";

//   set name(newName) {
//     const nameRow = newName.split(" ");
//     this.firstName = nameRow[0];
//     this.lastName = nameRow[1];
//   }
//   get name() {
//     return ` First name : ${this.firstName} last name : ${this.lastName}`;
//   }
// }

// const Kris = new User({ name: "Kristina Malitovska" });

// console.log(Kris); // age: "" city: "" firstName: "Kristina" lastName: Malitovska

// const Dasha = new User({ name: "Daria Novak" });

// console.log(Dasha); // age: "" city: "" firstName: "Datia" lastName: Novak

// -----

// Прототипи

// const a = [1, 2, 3];

// console.log(a);

// -----

// const a = {
//   x: 1,
//   y: 2,
// };

// // робимо b, в якому будуть посилання на a (щоб b мав в собі x та y)
// const b = Object.create(a);
// console.log(b); // отримуємо пустий обєкт {}, але в середені є [Prototype],
// //  в середені якого є x  та y

// console.log(a); // отримуємо  обєкт { x: 1, y: 2}, та в середені є [Prototype],

// console.log(b.x); // 1

// console.log(b.y); // 2
// // ланцюжок прототипів - те, що видає при console.log(b);

// console.log(b.hasOwnProperty("x")); // false - цей метод лежить в середені b в [Prototype]

// -----

// правктика

//  в магазині є менеджери.
// У кожного менеджера є своя знижка
// Ця знижка росте кожен місяць на 1

// 1 частина

// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;
// };

// const ann = new Manager("Anna", 5);
// const ivan = new Manager("Ivan", 10);

// console.log(ann); // Manager {name: 'Anna', sales: 5}

// 2 частина

// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;

//   this.sale = function () {
//     this.sales += 1;
//   }; // додаємо функцію, що знижка росте
// };

// const ann = new Manager("Anna", 5);
// const ivan = new Manager("Ivan", 10);

// // console.log(ann); // Manager {name: 'Anna', sales: f}
// console.log(ann.sales); // 5
// ann.sale(); // додаємо функцію, що знижка росте
// console.log(ann.sales); // 6

// 3 частина - робимо, щоб функцію, що знижка росте додавалась автоматично

// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;
// };

// const ann = new Manager("Anna", 5);
// const ivan = new Manager("Ivan", 10);

// Manager.prototype.sale = function () {
//   this.sales += 1;
// };

// console.log(ann.sales); // 5
// ann.sale(); // додаємо функцію, що знижка росте
// console.log(ann.sales); // 6

// // перевіряємо функції

// console.dir(Manager); // бачимо функції

// -----

// class CoffeMachine {
//   _water = 0;

//   #waterlimit = 500;

//   constructor(power) {
//     this.power = power;
//   }

//   // робимо захищену water
//   set waterAmount(value) {
//     if (value < 0) {
//       value = 0;
//     }
//     this._water = value; // _ - це означає захищений параметр
//   }
// }

// let coffeeMachine = new CoffeMachine(100);
// console.log(coffeeMachine); // CoffeMachine {_water: 0, power: 100}
// coffeeMachine.waterAmount = 20;
// console.log(coffeeMachine); // CoffeMachine {_water: 20, power: 100}
// coffeeMachine.waterAmount = -20;
// console.log(coffeeMachine); // CoffeMachine {_water: 0, power: 100}
