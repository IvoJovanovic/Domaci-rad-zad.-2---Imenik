angular.module('eImenik').config(function ($stateProvider) {
	$stateProvider
		.state('add', {
			url: '/add',
			controller: 'addController',
			template: `
            Ime: <input type="text" ng-model="firstname"></input>
            Prezime : <input type="text" ng-model="lastname"></input><br>
            Zaključna ocijena : <input type="text" ng-model="finalgrade"></input>            
            <input type="submit" ng-click="makeNewStudentOnClick()" ng-show = "firstname.length > 0 && lastname.length > 0 && finalgrade >= 1 && finalgrade <= 5"></input> 
        `,
            params:
            {
                firstName : null,
                lastName : null,
                finalGrade : 0
            }
		});
});
