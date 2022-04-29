const EventEmitter = requit('events');
const emitter = new EventEmitter();

emitter.on('listener', function() {
	console.log('reçu');
});

emitter.emit('listener');
