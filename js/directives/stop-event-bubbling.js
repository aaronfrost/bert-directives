angular.module('app').directive('stopEventBubbling', function(){
  return function(scope, elem, attrs){
    elem.on('click', function(event){
      if(event && event.stopPropagation){
        console.log('I AM STOPPING THE PROPAGATION');
        event.stopPropagation();
      }
    });
  }
});