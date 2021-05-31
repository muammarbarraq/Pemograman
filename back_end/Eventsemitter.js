const {EventEmitter} = require('events');

const myEventEmitter = new EventEmitter();

//fungsi yang akan dijalankan ketika event coffe-order terjadi
const makeCoffee = ({name}) => {
    console.log(`Kopi ${name} telah dibuat`);
};

const makeBill = ({price}) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
};

//mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);

//memicu event coffee-order terjadi
myEventEmitter.emit('coffee-order', { name : 'Tubruk', price : 15000});
