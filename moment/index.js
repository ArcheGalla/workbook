const moment = require('moment');
//const timeShiftMin = 1440;
//const testDate = new Date();
//
//testDate.setHours(testDate.getHours() - 1);
//
//
//const current = moment().unix();
//const timePicker = moment(testDate).unix();
//
//console.log('current    ', current);
//console.log('timePicker ', timePicker);
//
//const diffInMin = current - timePicker;
//
//const timeShiftDuration = moment.duration(diffInMin, 'seconds').asMinutes();

//const result = timeShiftMin > timeShiftDuration;

//const now  = moment();
//const than =

//console.log('moment from now ', moment().subtract('minutes', 20000).fromNow(true));
//console.log('moment from now ', moment().subtract(20000, 'minutes').fromNow(true));

//const abj = {
//	a: 4,
//	b: 4,
//};
//
//let  a = abj.a;
//a = 6;
//
//console.log('object ', abj.a);
//console.log('a ', a);

const duration = 2345;
const result = moment(moment.duration(duration,'seconds')).format('HH:mm:ss');
console.log('result', result);
