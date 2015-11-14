angular.module('app').factory('userDataService', function($http, $q){

  return {
    getUsers: getUsers
  };

  function getUsers(opts){
    var limit = opts.limit || 20;
    return $http.get('http://api.randomuser.me/?results='+limit)
      .then(function(res){
        var results = res.data.results;
        var users = _.map(results, function(r){ return r.user});
        return users;
      });

  }
});