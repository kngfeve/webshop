myApp.factory('dataFactory', function($http) {
  /** https://docs.angularjs.org/guide/providers **/
  var urlBase = 'http://localhost:3000/api/v1/';
  var _prodFactory = {};
 
  _prodFactory.getProducts = function() {
  	console.log("_prodFactory.getProducts");
    return $http.get(urlBase + "products");
  }; 

  _prodFactory.create = function(data) {
  	console.log("_prodFactory.create");
    return $http.post(urlBase + "product", data)
  };
  _prodFactory.updateData = function(id, data) {
  	console.log("_prodFactory.updateData " + id);
    return $http.put(urlBase + "product/" + id, data)
  };    
  _prodFactory.deleteData = function(id) {
  	console.log("_prodFactory.deleteData " + id);
    return $http.delete(urlBase + "product/" + id)
  };      
  return _prodFactory;
});