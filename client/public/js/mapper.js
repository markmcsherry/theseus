//
// MAP MODULE
//


(function() {

	var app = angular.module('mapper', []);

    app.directive('mapViewer',function(){
        return {
          restrict: 'E',
          templateUrl: "templates/mapview.html"
        };
        
    });

    app.directive('mapEditor',function(){
        return {
            restrict: 'E',
            templateUrl: "templates/mapeditor.html",
            controller: function() {
                this.mapdata =  [
                    ['1', '1', '6'],
                    ['2', '3', '2'],
                    ['1', '4', '1'],
                    ['2', '3', '2'],
                    ['2', '3', '2'],
                    ['1', '1', '2']
                    ];

                this.isSet = function(checkTab) {
                  return this.tab === checkTab;
                };
        
                this.setTab = function(activeTab) {
                  this.tab = activeTab;
                };
            },
            controllerAs: "mapeditor"
        };
        
    });




})();