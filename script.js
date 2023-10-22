'use strict';

// const bookings = [];

// const createBooking = function (flightNum,
//     numPassengers=1,
//     price=199*numPassengers){
// // numPassengers=numPassengers||1;
// // price=price||199;

// const booking = {
//     flightNum,
//     numPassengers,
//     price
// };
// console.log(booking);
// bookings.push(booking);
// };

// createBooking('LH123')
// createBooking('LH123',2,800)
// createBooking('LH123',2)
// createBooking('LH123',5)

// const flight = 'LH234';
// const elena = {
//     name:'Elena Cristescu',
//     passport:172927301,
// }

// const checkIn = function(flightNum,passenger){
//     flightNum='LH999',
//     passenger.name='Ms. '+ passenger.name;

//     if(passenger.passport===172927301){
//         alert('Check In')
//     }else{
//         alert('Wrong passport!!')
//     }
// }

// checkIn(flight,elena);
// console.log(flight);
// console.log(elena);

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random()*10000000000000);
// };
// newPassport(elena);
// checkIn(flight,elena);

// const oneWord = function(str){
//     return str.replace(/ /g,'').toLowerCase();
// }

// const upperFirstWord = function(str){
//     const [first,...other] = str.split(' ');
//     return [first.toUpperCase(),...other].join(' ');
// }

// const transformer = function(str,fn){
//     console.log(`Original string: ${str}`);
// console.log(`Transformed string: ${fn(str)}`);

// console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!',upperFirstWord);
// transformer('JavaScript is the best!',oneWord);

// //JS callbacks
// const high5 = function(){
//     console.log('✋');
// }

// document.body.addEventListener('click',high5);

// ['Elena','Martha','Adam'].forEach(high5);

//Functions returning Functions
// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }
// const greeterHey = greet("Hey");

// greeterHey('Elena');
// greeterHey('Adam ');

// greet('Hello')('Elle');

// const greetArr = greeting => name=>console.log(`${greeting} ${name}`);

// greetArr('Hey')('Amanda');

//The call and apply Method

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   //book:function(){}
//   book(flightNum, name) {
//     console.log(
//       `${name}  booked a seat on ${this.airline} fligh ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(234, 'Elena Cristescu');
// lufthansa.book(673, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// //Does NOT Work
// //book(23, 'Sarah Williams');

// //CALL Method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 247, 'Mary Copper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Line',
//   iataCode: 'LX',
//   bookings: [],
// };
// book.call(swiss, 753, 'Mary Cooper');
// console.log(swiss);

// const flightData = [575, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// //bind method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Ellen Kris');
// bookEW23('Martha Cooper');

// //With Event Listener
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// //lufthansa.buyPlane();
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Partial Application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);

// console.log(addVAT2(100));

// //Challenge 1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
// };

// poll.registerNewAnswer = function () {
//   let answer = +prompt(
//     'What is your favourite programming language?\n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++\n(Write option number)'
//   );
//   if (answer && typeof answer === 'number' && answer > -1 && answer < 4) {
//     // console.log(answer, 'call');
//     poll.answers[answer]++;
//     console.log(poll);
//   } else {
//     answer = prompt(
//       'Please select one of the following options: \n What is your favourite programming language?\n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++\n(Write option number)'
//     );
//   }
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

//  poll.registerNewAnswer();
//  console.log(poll);

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// //IIFE Immediatialey Invoked Function Expresion
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// // console.log(isPrivate);

// (() => console.log('This ALSO will never run again'))();

// {
//   const isPrivate = 23;
//   //var variables ignore blocks
//   var notPrivate = 12;
// }
// //console.log(isPrivate);
// console.log(notPrivate);

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
