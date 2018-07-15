//The new ways to create variable in js is using the keyword `let`
//The difference between var and let is in the scoping of the variables
//var is functional scope 
//let has block scope

function getClothing(isCold) {
	if(isCold) {
		var freezing = 'something';
	} else {
		var hot = 'other';
		console.log(freezing)
	}
}


getClothing(false);



//getClothing during runtime;


function getClothing2(isCold) {
	var freezing;
	var hot;
	if(isCold) {
		freezing = 'something';
	} else {
		hot = 'other';
		console.log(freezing)
	}
}

//could have avoided this developer bug using `let`