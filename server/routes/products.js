var mongoose = require('mongoose');
var Data = mongoose.model('Data');

var products = {
 
  getAll: function(req, res, next) {
    Data.find(function(err, allProducts){
      if(err){ return next(err); }

      res.json(allProducts);
    });
  },
 
  getOne: function(req, res) {
    var id = req.params.id;
    console.log("get one by id " + id)
    Data.findById(id, function(allProducts){
      res.json(allProducts);
    });    
  },
 
  create: function(req, res) {
    var newProduct = new Data(req.body);
    newProduct.save(function(err, newProduct){
      if(err){ return next(err); }

      res.json(newProduct);
    });
  },
 
  update: function(req, res) {
    var id = req.params.id;
    var updateProduct = req.body;
    var query = Data.findById(id);
    console.log("update function " + id)  
    Data.update({ _id: id }, { $set: updateProduct}, function(err, allProducts){
      res.json(allProducts);
    });    
  },
 
  delete: function(req, res) {
    var id = req.params.id;
    var query = Data.findById(id);  
    console.log("delete function " + id)
    query.remove(function(allProducts){
      res.json(allProducts);
    });
  }
};

 
module.exports = products;