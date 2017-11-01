const moment = require('moment');


//const utc = moment().utc().format('X');

const unix = moment().format('x');
const minus = moment().subtract(10, 'minutes').format('X');

const diff = 10 * 60;

//console.log('Result of subtract ', (unix - minus) === diff);

console.log('unix    ', unix * 10000);
console.log('compare ', 15060965629480000);
