var jobSearchApp = angular.module('jobSearchApp', []);



jobSearchApp.controller('jobSearchController', ['$scope', '$http', 'jobSearchService', function($scope, $http, jobSearchService) {
    
    $scope.vacancyTitle = '';
    $scope.selectedCV = '';
    $scope.name = '';
    $scope.$watch('vacancyTitle', function() {
       jobSearchService.vacancyTitle = $scope.vacancyTitle; 
    });
    $scope.$watch('selectedCV', function() {
       jobSearchService.selectedCV = $scope.selectedCV; 
    });
    
    $http.get('https://demo9419531.mockable.io/pz_data')
        .then(function (result) {
            $scope.sendCVS = result.data.data;

        });
    $scope.showfields = function () {
        for(i=0;i<=$scope.sendCVS.length;i++){
        if($scope.selectedCV == $scope.sendCVS[i].id){
            $scope.roleName = $scope.sendCVS[i].role;
            $scope.profile = $scope.sendCVS[i].profile;
            $scope.tender = $scope.sendCVS[i].tender;
        }
        }
    };
}]);

// SERVICES
jobSearchApp.service('jobSearchService', function() {
   
    this.vacancyTitle = "";
    this.selectedCV = '';
    
});
