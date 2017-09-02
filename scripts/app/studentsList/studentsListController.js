angular.module('eImenik').controller('studentsListController',function ($scope, localStorageService){
    
    $scope.students = localStorageService.get('students');

    $scope.removeStudentFromList = function(student)
    {
        $scope.students.splice($scope.students.indexOf(student), 1);
        localStorageService.set('student', $scope.students);
    }
})