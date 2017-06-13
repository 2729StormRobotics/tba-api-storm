<div align="center">
  <p>
    <a href="https://nodei.co/npm/tba-api-storm/"><img src="https://nodei.co/npm/tba-api-storm.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
  <p>
    <a href="http://www.stormroboticsnj.org"><img src="https://img.shields.io/badge/team-2729-f68424.svg"/></a>
    <a href="https://www.npmjs.com/package/tba-api-storm"><img src="https://img.shields.io/npm/v/tba-api-storm.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/tba-api-storm"><img src="https://img.shields.io/npm/dt/tba-api-storm.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://david-dm.org/2729StormRobotics/tba-api-storm"><img src="https://img.shields.io/david/2729StormRobotics/tba-api-storm.svg?maxAge=3600" alt="Dependencies" /></a>
  </p>
</div>

Simple NodeJS API to get data from [thebluealliance](https://www.thebluealliance.com)

Note: All methods return Promises, so if you do not know what they are, read [this](https://davidwalsh.name/promises) article before continuing

DEPRECATED: thebluealliance has deprecated their v2 api and will be decomissioned soon

# Usage
## Installation

```js
npm install tba-api-storm
```
## Intialization
The constructor takes in the data needed for the X-TBA-App-Id header, which is needed for the API requests (For more info on thebluealliance RESTful API, see [this](https://www.thebluealliance.com/apidocs))

## Method Overview
### Team Requests

[Team List Request](https://www.thebluealliance.com/apidocs#team-list-request)

`getTeamList(pageNum)`

[Team Request](https://www.thebluealliance.com/apidocs#team-request)

`getTeam(teamNum)`

[Team Events](https://www.thebluealliance.com/apidocs#team-events-request)
(year is optional)
`getTeamEvents(teamNum, year)`

[Team Event Awards](https://www.thebluealliance.com/apidocs#team-event-awards-request)

`getTeamEventAwards(teamNum, eventCode)`

[Team Event Matches](https://www.thebluealliance.com/apidocs#team-event-matches-request)

`getTeamEventMatches(teamNum, eventCode)`

[Team Years Participated](https://www.thebluealliance.com/apidocs#team-years-participated-request)

`getYearsParticipated(teamNum)`

[Team Media](https://www.thebluealliance.com/apidocs#team-media-request)
(year is optional)
`getTeamMedia(teamNum, year)`

[Team Event History](https://www.thebluealliance.com/apidocs#team-history-events-request)

`getTeamEventHistory(teamNum)`

[Team Award History](https://www.thebluealliance.com/apidocs#team-history-awards-request)

`getTeamAwardHistory(teamNum)`

[Team Robot History](https://www.thebluealliance.com/apidocs#team-history-robots-request)

`getTeamRobotHistory(teamNum)`

[Team District History](https://www.thebluealliance.com/apidocs#team-history-districts-request)

`getTeamDistrictHistory(teamNum)`

### Event Requests

[Event List](https://www.thebluealliance.com/apidocs#event-list-request)

`getEventList(year)`

[Event details](https://www.thebluealliance.com/apidocs#event-request)

`getEvent(eventCode)`

[Event Teams](https://www.thebluealliance.com/apidocs#event-teams-request)

`getEventTeams(eventCode)`

[Event Matches](https://www.thebluealliance.com/apidocs#event-matches-request)

`getEventMatches(eventCode)`

[Event Stats](https://www.thebluealliance.com/apidocs#event-stats-request)

`getEventStats(eventCode)`

[Event Rankings](https://www.thebluealliance.com/apidocs#event-rankings-request)

`getEventRankings(eventCode)`

[Event Awards](https://www.thebluealliance.com/apidocs#event-awards-request)

`getEventAwards(eventCode)`

[Event District Points](https://www.thebluealliance.com/apidocs#event-points-request)

`getEventDistrictPoints(eventCode)`

### Match Requests

[Single Match Request](https://www.thebluealliance.com/apidocs#match-request)

`getSingleMatch(matchKey)`

### District Requests

[District List Request](https://www.thebluealliance.com/apidocs#district-list-request)

`getDistrictList(year)`

[District Events Request](https://www.thebluealliance.com/apidocs#district-events-request)

`getDistrictEvents(district, year)`

[District Rankings Request](https://www.thebluealliance.com/apidocs#district-rankings-request)

`getDistrictRankings(district, year)`

[District Teams Request](https://www.thebluealliance.com/apidocs#district-teams-request)

`getDistrictTeams(district, year)`

TODO: Documentation 
