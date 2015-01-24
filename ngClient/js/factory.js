myApp.factory('dataFactory', function($http) {
  /** https://docs.angularjs.org/guide/providers **/
  var urlBase = 'http://localhost:3000/';
  var _prodFactory = {};
 
  _prodFactory.getProducts = function() {
  	console.log("_prodFactory.getProducts");
    return $http.get(urlBase + "products");
  }; 

  _prodFactory.create = function(data) {
  	console.log("_prodFactory.create");
    return $http.post(urlBase + "api/v1/product", data)
  };
  _prodFactory.updateData = function(id, data) {
  	console.log("_prodFactory.updateData " + id);
    return $http.put(urlBase + "api/v1/product/" + id, data)
  };    
  _prodFactory.deleteData = function(id) {
  	console.log("_prodFactory.deleteData " + id);
    return $http.delete(urlBase + "api/v1/product/" + id)
  };      
  return _prodFactory;
});