const TBA = require('./tba-storm');

var test = new TBA('1',1,'1');
console.time('test');
test.getTeamEvents(2729, 2015).then(res => {
  console.log(res);
  console.timeEnd('test');
}).catch(res => {
  console.log(res);
});
