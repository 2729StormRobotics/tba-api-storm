'use strict';
const unirest = require('unirest');
class TBA{
  constructor(id, desc, version){
    this.header = id + ':' + desc + ':' + version;
    this.base = 'https://www.thebluealliance.com/api/v2/';
  }

  callAPI(uri){
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

  getTeamList(pageNum) {
    return this.callAPI('teams/' + pageNum);
  }

  getTeam(teamNum){
    return this.callAPI('team/frc' + teamNum);
  }

  getTeamEvents(teamNum, year){
    return this.callAPI('team/frc' + teamNum + (typeof year === undefined ? '/' + year : '') + '/events');
  }

  getTeamEventAwards(teamNum, eventKey){
    return this.callAPI('team/frc' + teamNum + '/event/' + eventKey + '/awards');
  }

  getTeamEventMatches(teamNum, eventKey){
    return this.callAPI('team/frc' + teamNum + '/event/' + eventKey + "/matches");
  }

  getYearsParticipated(teamNum){
    return this.callAPI('team/frc' + teamNum + '/years_participated');
  }

  getTeamMedia(teamNum, year){
    return this.callAPI('team/frc' + teamNum + (typeof year === undefined ? '/' + year : '') + '/media');
  }

  getTeamEventsHistory(teamNum){
    return this.callAPI('team/frc' + teamNum + '/history/events');
  }

  getTeamAwardsHistory(teamNum){
    return this.callAPI('team/frc' + teamNum + '/history/awards');
  }

  getTeamRobotsHistory(teamNum){
    return this.callAPI('team/frc' + teamNum + '/history/robots');
  }

  getTeamDistrictsHistory(teamNum){
    return this.callAPI('team/frc' + teamNum + '/history/districts');
  }

  getEventList(year){
    return this.callAPI('events/' + year);
  }

  getEvent(eventKey){
    return this.callAPI('event/' + eventKey);
  }

  getEventTeams(eventKey){
    return this.callAPI('event/' + eventKey + '/teams');
  }

  getEventMatches(eventKey){
    return this.callAPI('event/' + eventKey + '/matches');
  }

  getEventStats(eventKey){
    return this.callAPI('event/' + eventKey + '/stats');
  }

  getEventRankings(eventKey){
    return this.callAPI('event/' + eventKey + '/rankings');
  }

  getEventAwards(eventKey){
    return this.callAPI('event/' + eventKey + '/awards');
  }

  getEventDistrictPoints(eventKey){
    return this.callAPI('event/' + eventKey + '/district_points');
  }

  getSingleMatch(matchKey){
    return this.callAPI('match/' + matchKey);
  }

  getDistrictList(year){
    return this.callAPI('districts/' + year);
  }

  getDistrictEvents(districtShort, year){
    return this.callAPI('district/' + districtShort + '/' + year + '/events');
  }

  getDistrictRankings(districtShort, year){
    return this.callAPI('district/' + districtShort + '/' + year + '/rankings');
  }

  getDistrictTeams(districtShort, year){
    return this.callAPI('district/' + districtShort + '/' + year + '/teams');
  }
}
