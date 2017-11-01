console.time('start');

const arr = [];
for (let i = 0; i < 1000000; i++) {

	arr.push((function () {
		const a = {
			b: 'asdasda',
			c: 121312312313,
			v: function () {
				const a = 'adasdad';
				const b = 'adasdad';
				const Va = 'adasdad';
				const C = 'adasdad';
			}
		};

		return a;
	})());
}
console.log('arr ', arr.length);

console.timeEnd('start');