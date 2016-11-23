#Usage

1. Import the module
```javascript
const TBA = require('tba-storm-node');
```

2. Intialize with constructor, taking in your ID, description of the usage of the api, and version
```javascript
var request = new TBA('atf1999', 'demo', 1);
```

3. Use built-in methods to request data from thebluealliance(uses javascript promises). Data is returned as JSON
Ex: get team 2729 from the api
```javascript
request.getTeam(2729).then(res => {
  console.log(res);
}).catch(res => {
  console.log(res);
});
```
TODO: Documentation
