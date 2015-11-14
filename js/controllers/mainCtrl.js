angular.module('app').controller('mainCtrl', function($scope, userDataService){

  var userAmount = 25;

  $scope.sayHi=sayHi;

  init();

  function init(){
    $scope.vm = {};
    getUsers(userAmount);

  }

  function getUsers(limit){
    userDataService.getUsers({limit: limit})
      .then(function(results){
        $scope.vm.users = results;
      });
  }

  function sayHi(){
    console.log('Hi Bert');
  }

});