app.controller('detailsController',function ($scope, $stateParams){
    $scope.firstName = $stateParams.firstName;
    $scope.lastName = $stateParams.lastName;
    $scope.finalGrade = $stateParams.finalGrade;
})
