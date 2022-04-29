const EventEmitter = require('events');
const emitter = new EventEmitter();

// enregistrer un écouteur (un listener)
emitter.on('messageReçu', function() {
	console.log('message reçu');
});

console.log("Heyyy, après la def de l'event listener mais avant l'émission de l'event");

emmiter.emit('messageReçu');
