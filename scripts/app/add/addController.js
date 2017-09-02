app.controller('addController',function ($scope, localStorageService){

    $scope.students = localStorageService.get('students');


    $scope.makeNewStudentOnClick = function ()
    {
        $scope.students.push({
            firstName : $scope.firstname,
            lastName : $scope.lastname,
            finalGrade :  $scope.finalgrade
        })

        localStorageService.set('students', $scope.students);

    }
})
