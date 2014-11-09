'use strict';

exports.inject = function(app) {
  


  // $scope.helo = " hello from Example Ctrl"; 

  console.log('  in Home ctrl 2 js');
                                              // require('./../directives/TestDirective').inject(app);
  app.controller('TestCtrl', exports.controller);
  return exports.controller;
};




exports.controller = function($scope, Auth, $http) {

console.log(' 1  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ');

 var Twit          = require('twit'),
    config        = require('./twitConfig.js'),
    colors        = require('colors'),
    _             = require('underscore'),
    fs            = require('fs'),
    T             = new Twit(config),
    command       = process.argv[2],
    args          = process.argv.splice(3),
    woeid         = 1,
    DST           = 1,
    aantal        = 20,
    expanded      = false,
    date          = new Date(),
    timestamp     = date.valueOf(),
    filename      = 'output\\' + command + '-' + timestamp + '.txt',
    writeFile     = null,
    argLine       = args.join(' '),
    toWrite       = true;


var trends = function (id) {
    console.log('  ~~~~~~~~~~~~~~~~~~~~~~~~~~ callign trends');
    var woeid = (id === '2') ? 23424909 : 1,
        i;

    T.get('trends/place', {id : woeid}, function (err, reply) {

        if (err) {
            output(err, true);
            return false;
        }

        output('trends for: ' + reply[0].locations[0].name + '\r\n');

        for (i = 0; i < reply[0].trends.length; i++) {
            output('--> ' + reply[0].trends[i].name);
        }

        graceFullExit();

    });
};

trends(1); 




























console.log(' 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ');

  $scope.testvar = 'Aap';
  $scope.auth = Auth;
  console.log(' $scope. auth  = ', $scope.auth);


          $scope.courses = [
                                  {name: 'C++ for Sociopaths', featured: true, published: new Date('10/5/2013')},
                                  {name: 'C# for Non-Sociopaths', featured: true, published: new Date('10/12/2013')},
                                  {name: 'Super Duper Expert C#', featured: false, published: new Date('10/1/2013')},
                                  {name: 'Visual Basic for Visual Basic Developers', featured: false, published: new Date('7/12/2013')},
                                  {name: 'Pedantic C++', featured: true, published: new Date('1/1/2013')},
                                  {name: 'JavaScript for People over 20', featured: true, published: new Date('10/13/2013')},
                                  {name: 'Maintainable Code for Cowards', featured: true, published: new Date('3/1/2013')},
                                  {name: 'A Survival Guide to Code Reviews', featured: true, published: new Date('2/1/2013')},
                                  {name: 'How to Job Hunt Without Alerting your Boss', featured: true, published: new Date('10/7/2013')},
                                  {name: 'How to Keep your Soul and go into Management', featured: false, published: new Date('8/1/2013')},
                                  {name: 'Telling Recruiters to Leave You Alone', featured: false, published: new Date('11/1/2013')},
                                  {name: "Writing Code that Doesn't Suck", featured: true, published: new Date('10/13/2013')},
                                  {name: 'Code Reviews for Jerks', featured: false, published: new Date('10/1/2013')},
                                  {name: 'How to Deal with Narcissistic Coworkers', featured: true, published: new Date('2/15/2013')}
                ];

    
};

