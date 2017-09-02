angular.module('eImenik').config(function ($stateProvider) {
	$stateProvider
		.state('studentsList', {
			url: '/students-list',
			controller: 'studentsListController',
			template: `
			<h2>Popis svih učenika: </h2>
			<hr>			
			<div ng-repeat="student in students">
				<p>{{student.firstName + " " + student.lastName}}</p>
				<button ui-sref="details({firstName : student.firstName, lastName : student.lastName, finalGrade : student.finalGrade})">O učeniku</button>				
				<button ng-click="removeStudentFromList(student)">Ukloni učenika</button>
				<hr>			
			</div>
			<button ui-sref = "add">Napravite novog učenika</button>  
       `
		});
});