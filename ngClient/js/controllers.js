myApp.controller("HeaderCtrl", ['$scope', '$location', 'UserAuthFactory',
  function($scope, $location, UserAuthFactory, $log) {
 
    $scope.isActive = function(route) {
      return route === $location.path();
    }; 
    $scope.logout = function () {
      UserAuthFactory.logout();
    };

    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };
  }
]);

myApp.controller("HomeCtrl", ['$scope', 'dataFactory',
  function($scope, dataFactory) {
    $scope.name = "Home Controller";
    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];
    dataFactory.getProducts().then(function(data) {
      $scope.products = data.data;
    });  
    $scope.isCollapsed = true;
    $scope.myFilter = {
      metalevel: 1,
      type: 'Frigate'
    };
    $scope.categories = [
      {
        'category':'Frigates',
        'subcategories': [
          {
            'subcategory':'Standard Frigate',
            'type':'Frigate',
            'metalevel':'1'
          },
          {
            'subcategory':'Advanced Frigate',
            'type':'Frigate',
            'metalevel':'2'
          }          
        ]
      },
      {
        'category':'Cruisers',
        'subcategories': [
          {
            'subcategory':'Standard Cruiser',
            'type':'Cruiser',
            'metalevel':'1'
          },
          {
            'subcategory':'Advanced Cruiser',
            'type':'Cruiser',
            'metalevel':'2'
          }          
        ]
      },
      {
        'category':'Battle Cruisers',
        'subcategories': [
          {
            'subcategory':'Standard Battlecruiser',
            'type':'Battlecruiser',
            'metalevel':'1'
          },
          {
            'subcategory':'Advanced Battlecruiser',
            'type':'Battlecruiser',
            'metalevel':'2'
          }          
        ]
      }     
    ];
  }
]);

myApp.controller("Page1Ctrl", ['$scope',
  function($scope) {
    $scope.name = "Page1 Controller";
  }
]);

myApp.controller("Page2Ctrl", ['$scope',
  function($scope) {
    $scope.name = "Page2 Controller";
    // below data will be used by checkmark filter to show a ✓ or ✘ next to it
    $scope.list = ['yes', 'no', true, false, 1, 0];
  }
]);

myApp.controller("Page3Ctrl", ['$scope', 'dataFactory',
  function($scope, dataFactory) {
    $scope.products = [];
 
    // Access the factory and get the latest products list
    dataFactory.getProducts().then(function(data) {
      $scope.products = data.data;
    });
    $scope.addProduct = function(){
      if(!$scope.name || $scope.name === '') { return; }
      dataFactory.create({
        id: $scope.id,
        name: $scope.name,
      }).success(function(data) {
        $scope.products.push(data);
      });
      $scope.id = '';
      $scope.name = '';
    };
    $scope.deleteProduct = function(id, $index){
      dataFactory.deleteData(id).success(function(data) {
          $scope.products.splice($index, 1);
      });
    };    
  }
]);

myApp.controller('Page4Ctrl', function($scope, $filter, $http, dataFactory) {
  $scope.products = [];
  $scope.sortReverse = false;
  $scope.sortType = 'id';
  // Access the factory and get the latest products list
  dataFactory.getProducts().then(function(data) {
    $scope.products = data.data;
  });  

  $scope.saveProduct = function(data, id) {
    if(! id){
      dataFactory.create(data);
      console.log("-created-");     
    };
    if(id){
      dataFactory.updateData(id, data);
      console.log("-updated-");
    };
  };

  // remove Product
  $scope.deleteProduct = function(id, $index){
    dataFactory.deleteData(id).success(function(data) {
        $scope.products.splice($index, 1);
    });
  };  

  // add user
  $scope.addProduct = function() {
     $scope.inserted = {
        id: $scope.id,
        name: $scope.name,
        desc: $scope.desc,
    };
    $scope.products.push($scope.inserted);
    console.log($scope.inserted)
  };
  $scope.types = ['Frigate','Cruiser','Battlecruiser','Battleship']; 
  $scope.factions = ['Gallente','Caldari','Amarr','Minmatar']; 
});
