angular.module('eImenik').config(function ($stateProvider) {
	$stateProvider
		.state('details', {
			url: '/:firstName',
			controller: 'detailsController',
			template: `
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
