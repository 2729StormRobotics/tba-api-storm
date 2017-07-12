const TBA = require('./tba-storm');
var test = new TBA('token');

console.time('test');
test.getTeamEventList(2729, 2016).then(res => {
	console.log(res);
	console.timeEnd('test');
}).catch(res => {
	console.log(res);
});
