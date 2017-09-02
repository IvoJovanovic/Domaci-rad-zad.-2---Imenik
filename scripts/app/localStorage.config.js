angular.module('eImenik').run(function(localStorageService){
    if(!localStorageService.get('students'))
        localStorageService.set('students', [{ 
            firstName : "Stipe", 
            lastName : "Stipic", 
            finalGrade : 5 
        }, 
        { 
            firstName : "Jure", 
            lastName : "Juric", 
            finalGrade : 5
        }
    ]);
})