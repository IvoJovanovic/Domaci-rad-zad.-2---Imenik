angular.module('eImenik').config(function ($stateProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			controller: 'homeController',
			template: `
            <h1>Dobrodošli na Imenik</h1>
            <button ui-sref="studentsList">Pregledaj sve učenike</button>
       `
		});
});