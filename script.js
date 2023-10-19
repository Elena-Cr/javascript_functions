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

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book:function(){}
  book(flightNum, name) {
    console.log(
      `${name}  booked a seat on ${this.airline} fligh ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(234, 'Elena Cristescu');
lufthansa.book(673, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//Does NOT Work
//book(23, 'Sarah Williams');

//CALL Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 247, 'Mary Copper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 753, 'Mary Cooper');
console.log(swiss);

const flightData = [575, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
