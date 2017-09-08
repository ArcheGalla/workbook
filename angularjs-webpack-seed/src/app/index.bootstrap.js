import Store from 'repatch';
import { thunk } from 'repatch';

const store = new Store({ counter: 0 }).addMiddleware(thunk);

const button = document.getElementById('button');
const output = document.getElementById('output');

button.addEventListener('click', function () {
	store.dispatch((state) => ({ counter: state.counter + 1 }))
});

store.subscribe(() => {
	const state = store.getState();
	output.innerHTML = state.counter;
});