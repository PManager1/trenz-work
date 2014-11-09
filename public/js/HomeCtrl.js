'use strict';

angular.module('MyApp').controller('mvUserListCtrl', function ($scope, mvUser) {

  console.log(' ------------ from  Home Ctrl ');

  $scope.users = mvUser.query();


})
