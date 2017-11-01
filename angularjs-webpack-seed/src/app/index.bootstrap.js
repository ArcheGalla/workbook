class Emitter {
	constructor() {
		this.listeners = {};
	}

	emit(name, data) {
		if(this.listeners[name]){
			this.listeners[name].forEach(handler=>{
				handler(data);
			});
		}
	}

	on(name, callback) {
		if (this.listeners[name]) {
			this.listeners[name].push(callback)
		} else {
			this.listeners[name] = [];
			this.listeners[name].push(callback);
		}

		return () => {
			let index = this.listeners[name].indexOf(callback);
			this.listeners[name] = this.listeners[name].splice(index, 1);
		}
	}
}

// const emitter = new Emitter();

//import Store from 'repatch';
//import { thunk } from 'repatch';
//
//const store = new Store({ counter: 0 }).addMiddleware(thunk);
//
//const button = document.getElementById('button');
//const output = document.getElementById('output');
//
//button.addEventListener('click', function () {
//	store.dispatch((state) => ({ counter: state.counter + 1 }))
//});
//
//button.addEventListener('mouseover', function () {
//	console.log('hover event');
//
//	store.dispatch(function (state) {
//		return {
//			counter: state.counter + 2
//		}
//	});
//});
//
//store.subscribe(() => {
//	const state = store.getState();
//	console.log('state ', state);
//	output.innerHTML = state.counter;
//});
//
//store.subscribe(() => {
//	const state = store.getState();
//	console.log('state 2 ', state);
//});