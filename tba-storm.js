const https = require('https')
class TBA {
    constructor(auth_key) {
        this.header = '?X-TBA-Auth-Key=' + auth_key;
        this.base = 'https://www.thebluealliance.com/api/v3/';
    }

    callAPI(uri) {
        return new Promise((resolve, reject) => {
            let content = '';
            https.get(this.base + uri + this.header, res => {
                if (res.statusCode != 200) {
                    reject(res.statusCode + ': ' + res.statusMessage);
                }

                res.on('data', data => {
                    content += data;
                });

                res.on('end', data => {
                    if (res.statusCode == 200) resolve(JSON.parse(content));
                });
            });
        });
    }
    
    //Teams

    getTeamList(pageNum) {
        return this.callAPI('teams/' + pageNum);
    }
    
    getTeamListSimple(pageNum) {
        return this.callAPI('teams/' + pageNum + '/simple');
    }
    
    getTeamList(year, pageNum) {
        return this.callAPI('teams/' + year + '/' + pageNum);
    }
    
    getTeamListSimple(year, pageNum) {
        return this.callAPI('teams/' + year + '/' + pageNum + '/simple');
    }

    getTeam(teamNum) {
        return this.callAPI('team/frc' + teamNum);
    }
    
    getTeamSimple(teamNum) {
        return this.callAPI('team/frc' + teamNum + '/simple');
    }
    
    getYearsParticipated(teamNum) {
        return this.callAPI('team/frc' + teamNum + '/years_participated');
    }
    
    getTeamDistricts(teamNum) {
        return this.callAPI('team/frc' + teamNum + '/districts');
    }

    getTeamRobots(teamNum) {
        return this.callAPI('team/frc' + teamNum + '/robots');
    }
    
    getTeamEvents(teamNum) {
        return this.callAPI('team/frc' + teamNum + '/events');
    }
    
    getTeamEvents(teamNum, year) {
        return this.callAPI('team/frc' + teamNum + '/events/' + year);
    }
    
    getTeamEventsSimple(teamNum) {
        return this.callAPI('team/frc' + teamNum + '/events/simple');
    }
    
    getTeamEventsSimple(teamNum, year) {
        return this.callAPI('team/frc' + teamNum + '/events/' + year + '/simple');
    }
    
    getTeamEventsKeys(teamNum) {
        return this.callAPI('team/frc' + teamNum + '/events/keys');
    }
    
    getTeamEventsKeys(teamNum, year) {
        return this.callAPI('team/frc' + teamNum + '/events/' + year + '/keys');
    }
    
    getTeamEventMatches(teamNum, eventKey) {
        return this.callAPI('team/frc' + teamNum + '/event/' + eventKey + "/matches");
    }
    
    getTeamEventMatchesSimple(teamNum, eventKey) {
        return this.callAPI('team/frc' + teamNum + '/event/' + eventKey + "/matches/simple");
    }
    
    getTeamEventMatchesKeys(teamNum, eventKey) {
        return this.callAPI('team/frc' + teamNum + '/event/' + eventKey + "/matches/simple");
    }
    
    getTeamEventAwards(teamNum, eventKey) {
        return this.callAPI('team/frc' + teamNum + '/event/' + eventKey + '/awards');
    }
    
    getTeamEventStatus(teamNum, eventKey) {
        return this.callAPI('team/frc' + teamNum + '/event/' + eventKey + '/awards');
    }
    
    getTeamAwards(teamNum, year) {
        return this.callAPI('team/frc' + teamNum + '/awards' + year);
    }
    
    getTeamMatches(teamNum, year) {
        return this.callAPI('team/frc' + teamNum + '/matches/' + year);
    }
    
    getTeamMatchesSimple(teamNum, year) {
        return this.callAPI('team/frc' + teamNum + '/matches/' + year + '/simple');
    }
    
    getTeamMatchesKeys(teamNum, year) {
        return this.callAPI('team/frc' + teamNum + '/matches/' + year + '/keys');
    }

    getTeamMedia(teamNum, year) {
        return this.callAPI('team/frc' + teamNum + '/media/' + year);
    }
    
    getTeamSocialMedia(teamNum) {
        return this.callAPI('team/frc' + teamNum + '/social_media');
    }
    
    //Events

    getEventList(year) {
        return this.callAPI('events/' + year);
    }

    getEvent(eventKey) {
        return this.callAPI('event/' + eventKey);
    }

    getEventTeams(eventKey) {
        return this.callAPI('event/' + eventKey + '/teams');
    }

    getEventMatches(eventKey) {
        return this.callAPI('event/' + eventKey + '/matches');
    }

    getEventStats(eventKey) {
        return this.callAPI('event/' + eventKey + '/stats');
    }

    getEventRankings(eventKey) {
        return this.callAPI('event/' + eventKey + '/rankings');
    }

    getEventAwards(eventKey) {
        return this.callAPI('event/' + eventKey + '/awards');
    }

    getEventDistrictPoints(eventKey) {
        return this.callAPI('event/' + eventKey + '/district_points');
    }

    getSingleMatch(matchKey) {
        return this.callAPI('match/' + matchKey);
    }

    getDistrictList(year) {
        return this.callAPI('districts/' + year);
    }

    getDistrictEvents(districtShort, year) {
        return this.callAPI('district/' + districtShort + '/' + year + '/events');
    }

    getDistrictRankings(districtShort, year) {
        return this.callAPI('district/' + districtShort + '/' + year + '/rankings');
    }

    getDistrictTeams(districtShort, year) {
        return this.callAPI('district/' + districtShort + '/' + year + '/teams');
    }
}
module.exports = TBA;
