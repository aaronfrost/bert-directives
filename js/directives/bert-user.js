angular.module('app').directive('bertUser', function(){

  return {
    restrict: 'E',
    templateUrl: "js/directives/bert-user.html",
    replace: false,
    scope:{
      userObject: "="
    },
    link: function(scope, elem, attrs){

      scope.blah = blah;

      init();

      function init(){

      }

      function blah(){
        console.log('blah');
      }
    }
  };
});