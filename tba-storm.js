'use strict';
const unirest = require('unirest');
class TBA{
  constructor(id, desc, version){
    this.header = id + ':' + desc + ':' + version;
    this.base = 'https://www.thebluealliance.com/api/v2/';
  }
  
  callApi(uri){
    return new Promise((resolve, reject) => {
      unirest.get(this.base + uri + '?X-TBA-App-Id=' + this.header)
      .header('Accept', 'application/json')
      .end(function(response){
        if(response.error){
          reject('Error.  Status Code: ' + response.code);
        }
        else{
          resolve(JSON.parse(response.raw_body));
        }
      });
    });
  }
}
