//Promises are and alternate to the callback approach in the if the functions fails then error is
//passed to the catch else the data is passed to the `then` function


new Promise((resolve, reject) => {
	if(1) {
		resolve('yeah')
	} else reject('naah')

})

a().then((data)=> {console.log(data)})
.catch(console.error)
