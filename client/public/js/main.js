	// create the module and name it 
	var app = angular.module('theseusApp', ['ngRoute', 'ui.bootstrap', 'mapper']);



    // ---------------------------------------------------------
	// configure our routes
    // ---------------------------------------------------------
	app.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			.when('/mazes', {
				templateUrl : 'pages/mazes.html',
				controller  : 'mapsController'
			})

			.when('/designer', {
				templateUrl : 'pages/designer.html',
				controller  : 'mapperController'
			})

			.when('/profile', {
				templateUrl : 'pages/profile.html',
				controller  : 'profileController'
			})

			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})
			.when('/viewmap/:mapId', {
				templateUrl : 'pages/viewmap.html',
				controller  : 'viewController'
			})			
			
			.otherwise({redirectTo:'/'});
	});




    // ---------------------------------------------------------
    // Main Controller
    // ---------------------------------------------------------

	app.controller('mainController', function($scope) {
		$scope.maintitle= "HOME";

			$scope.popularmaps = [
				{id:"1246", title:"Basic House", author:"Mark McSherry", created:"5/6/2014", description:"Basic House Wooden 5x5x5", likes:63, rating:5},
				{id:"1245", title:"Village Tower", author:"Mark McSherry", created:"22/5/2014", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl ex, vestibulum non efficitur et, lobortis vel nisi. Integer euismod neque id fringilla congue.", likes:57, rating:4},
				{id:"1244", title:"Village Farm House", author:"Mark McSherry", created:"31/5/2014", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl ex, vestibulum non efficitur et, lobortis vel nisi. Integer euismod neque id fringilla congue.", likes:21, rating:2},
				{id:"1243", title:"Village Church", author:"Mark McSherry", created:"1/2/2014", description:"Standard Village Church", likes:10, rating:3}
			];

			$scope.latestmaps = [
				{id:"1243", title:"Village Idiot", author:"Someone Else", created:"1/2/2014", description:"Standard Village Church", likes:10, rating:3},
				{id:"1244", title:"Village Farm House", author:"Mark McSherry", created:"31/5/2014", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl ex, vestibulum non efficitur et, lobortis vel nisi. Integer euismod neque id fringilla congue.", likes:21, rating:2},
				{id:"1245", title:"Village Tower", author:"Mark McSherry", created:"22/5/2014", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl ex, vestibulum non efficitur et, lobortis vel nisi. Integer euismod neque id fringilla congue.", likes:57, rating:4},
				{id:"1246", title:"Basic House", author:"Mark McSherry", created:"5/6/2014", description:"Basic House Wooden 5x5x5", likes:63, rating:5}
			];
		  
	 	$scope.alerts = [
	 	    { type: 'danger', msg: 'Demo Application - data is Mock!!' }
	 	];
	 	  
		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
		};

	});





    // ---------------------------------------------------------
    // Maps controller
    // ---------------------------------------------------------
    
	app.controller('mapsController', function($scope) {
		$scope.maintitle= "MAPS";

	    $scope.maprating = 5;
	
		$scope.maps = [
	    {id:"124300", title:"Church", author:"John Jones", description:"Standard Village Church", likes:10, rating:3},
	    {id:"124411", title:"Farm House", author:"Marty Mann", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl ex, vestibulum non efficitur et, lobortis vel nisi. Integer euismod neque id fringilla congue.", likes:21, rating:2},
	    {id:"124522", title:"Mage Tower", author:"Sid Smart", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl ex, vestibulum non efficitur et, lobortis vel nisi. Integer euismod neque id fringilla congue.", likes:57, rating:4},
	    {id:"124699", title:"Basic House", author:"Frieda Farrel", description:"Basic House Wooden 5x5x5", likes:63, rating:5}
	    ];

        $scope.newmap = function() {
            $scope.alerts.push({ type: 'danger', msg: 'Create new map! What happened to the old one?' });
        };

	});


    // ---------------------------------------------------------
    // Mapper controller
    // ---------------------------------------------------------
    
	app.controller('mapperController', function($scope) {
		$scope.maintitle= "~ MAP MAKER";
        $scope.mapdata2 = [
                ['a', '1', '1'],
                ['2', 'b', '2'],
                ['2', '3', 'c'],
                ['1', 'd', '2']
               ];
               
        $scope.newmap = function() {
            $scope.alerts.push({ type: 'danger', msg: 'Create new map! What happened to the old one?' });

        };
        
	});



    // ---------------------------------------------------------
    // profile controller
    // ---------------------------------------------------------
	app.controller('profileController', function($scope, $location) {
		$scope.maintitle= "~ PROFILE";

//		var params = $location.search();
//        $scope.alerts.push({ type: 'danger', msg: 'userid='+params.userID });
		
		
		$scope.contact = {id:"123226", name:"Mark McSherry", email:"mark.mcsherry@gmail.com", tagline:"Putting the Dead into Deadline", picture:"unknown.jpg", status:"Active"};

		$scope.profilemaps = [
	    {id:"1243", title:"Village Church", author:"Mark McSherry", created:"1/2/2014", description:"Standard Village Church", likes:10, rating:3},
	    {id:"1246", title:"Basic House", author:"Mark McSherry", created:"5/6/2014", description:"Basic House Wooden 5x5x5", likes:63, rating:5}
	    ];
	    
	    
	    
// -         -------------------------------------------------------------------

 /*         $http.get("https://github.wdf.sap.corp/api/v3/repos/norman/architecture/issues?labels=Architecture%20Elaboration," + encodeURI(targetReleaseIssues.targetRelease))
                        .success(function (data) {
                            
                        })
                        .error(function () {
                            $log.log("Error while retrieving issues for release " + targetReleaseIssues.targetRelease);
                        });
   */                     
                        
// -   ---------------------------------------------------------------------------------------                        

	});


    // ---------------------------------------------------------
    // Contact controller
    // ---------------------------------------------------------
	app.controller('contactController', function($scope) {
		$scope.maintitle= "~ CONTACT US";


	});
	
    // ---------------------------------------------------------
    // about controller
    // ---------------------------------------------------------
	app.controller('aboutController', function($scope) {
		$scope.maintitle= "- ABOUT";



	});
	


   // ---------------------------------------------------------
    // View controller
    // ---------------------------------------------------------
    
	app.controller('viewController', function($scope, $routeParams) {
		$scope.maintitle= "MAPS";

        $scope.map_id = $routeParams.mapId;

	});


	
	
    // ---------------------------------------------------------
	// Map Table List Directive
    // ---------------------------------------------------------
    app.directive('mapList',function(){
        return {
        	restrict: 'E',
          	scope: {
          		maps: '=data'
      	  	},
          	templateUrl: "js/templates/maplist.html"
        };
        
    });


    // ---------------------------------------------------------
	// Map View Directive
    // ---------------------------------------------------------
    app.directive('mapView',function(){
        return {
        	restrict: 'E',
          	scope: {
          		map: '=data'
      	  	},
          	templateUrl: "js/templates/mapview.html"
        };
        
    });
	
	