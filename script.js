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


const flight = 'LH234';
const elena = {
    name:'Elena Cristescu',
    passport:172927301,
}

const checkIn = function(flightNum,passenger){
    flightNum='LH999',
    passenger.name='Ms. '+ passenger.name;

    if(passenger.passport===172927301){
        alert('Check In')
    }else{
        alert('Wrong passport!!')
    }
}

checkIn(flight,elena);
console.log(flight);
console.log(elena);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*10000000000000);
};
newPassport(elena);
checkIn(flight,elena);