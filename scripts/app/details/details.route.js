angular.module('eImenik').config(function ($stateProvider) {
	$stateProvider
		.state('details', {
			url: '/:firstName',
			controller: 'detailsController',
            template: `
            <button ui-sref="studentsList">Svi učenici</button>    
            <h2>{{firstName + " " + lastName}}</h2>
            <p>Zaključna ocijena: {{finalGrade}}</p>
        `,
            params:
            {
                firstName : null,
                lastName : null,
                finalGrade : 0
            }
		});
});
