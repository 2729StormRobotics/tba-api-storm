<div align="center">
  <p>
    <a href="https://nodei.co/npm/tba-api-storm/"><img src="https://nodei.co/npm/tba-api-storm.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
  <p>
    <a href="http://www.stormroboticsnj.org"><img src="https://img.shields.io/badge/team-2729-f68424.svg"/></a>
    <a href="https://www.npmjs.com/package/tba-api-storm"><img src="https://img.shields.io/npm/v/tba-api-storm.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/tba-api-storm"><img src="https://img.shields.io/npm/dt/tba-api-storm.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://david-dm.org/2729StormRobotics/tba-api-storm"><img src="https://img.shields.io/david/2729StormRobotics/tba-api-storm.svg?maxAge=3600" alt="Dependencies" /></a>
    <a href="https://travis-ci.org/2729StormRobotics/tba-api-storm"><img src="https://travis-ci.org/2729StormRobotics/tba-api-storm.svg?branch=master" alt="Build Status" /></a>
  </p>
  <p>
    <a href="https://sonarcloud.io/dashboard?id=tba-api-storm"><img src="https://sonarcloud.io/api/project_badges/measure?project=tba-api-storm&metric=alert_status" alt="Quality Gate" /></a>
    <a href="https://sonarcloud.io/dashboard?id=tba-api-storm"><img src="https://sonarcloud.io/api/project_badges/measure?project=tba-api-storm&metric=sqale_rating" alt="Maintainability Rating" /></a>
    <a href="https://sonarcloud.io/dashboard?id=tba-api-storm"><img src="https://sonarcloud.io/api/project_badges/measure?project=tba-api-storm&metric=reliability_rating" alt="Reliability Rating" /></a>
    <a href="https://sonarcloud.io/dashboard?id=tba-api-storm"><img src="https://sonarcloud.io/api/project_badges/measure?project=tba-api-storm&metric=security_rating" alt="Security Rating" /></a>
  </p>
  <p>
    <a href="https://sonarcloud.io/dashboard?id=tba-api-storm"><img src="https://sonarcloud.io/api/project_badges/measure?project=tba-api-storm&metric=coverage" alt="Test Coverage" /></a>
    <a href="https://sonarcloud.io/dashboard?id=tba-api-storm"><img src="https://sonarcloud.io/api/project_badges/measure?project=tba-api-storm&metric=bugs" alt="Bug Count" /></a>
    <a href="https://sonarcloud.io/dashboard?id=tba-api-storm"><img src="https://sonarcloud.io/api/project_badges/measure?project=tba-api-storm&metric=vulnerabilities" alt="Vulnerabilities" /></a>
    <a href="https://sonarcloud.io/dashboard?id=tba-api-storm"><img src="https://sonarcloud.io/api/project_badges/measure?project=tba-api-storm&metric=code_smells" alt="Code Smells" /></a> 
  </p>
</div>

Simple NodeJS API to get data from [thebluealliance](https://www.thebluealliance.com)

Note: All methods return Promises, so if you do not know what they are, read [this](https://davidwalsh.name/promises) article before continuing

# Usage

## Installation

```
npm install tba-api-storm
```

## Intialization

The constructor takes in the data needed for the X-TBA-App-Id header, which is needed for the API requests (For more info on thebluealliance RESTful API, see [this](https://www.thebluealliance.com/apidocs))

## Method Overview

Dcoumentation and method calls for API v3 is in the form of docstrings for now.

## Notes

Anyone who upgrades from version 1.0.6 to a newer version, please look at the method signatures for some have changed 
