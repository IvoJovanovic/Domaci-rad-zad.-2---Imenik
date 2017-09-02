angular.module('eImenik').config(function ($stateProvider) {
	$stateProvider
		.state('studentsList', {
			url: '/students-list',
			controller: 'studentsListController',
			template: `
            <h2>Popis svih učenika: </h2>
            <div ng-repeat="student in students">
                <p ui-sref="details({firstName : student.firstName, lastName : student.lastName, finalGrade : student.finalGrade})">
				{{student.lastName + " " + student.firstName}}
				</p>
				<button ng-click="removeStudentFromList(student)">Remove</button>
            </div>
			<button ui-sref = "add">Napravite novog učenika</button>  
       `
		});
});