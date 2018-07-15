Promise.resolve(1)
//Passes 1 to next function
//y = 1
.then(y => y+1)
//increments y and passes y + 1 i.e. 2 to next function
.then(y => {
	throw new Error('Error');
})
//throw error to the next function
.catch(() => 1)
//error is caught in the next catch and then 1 is passed to the next then as an argument
.then(y => y + 1)
//incremented 1 to 2
.then(y => console.log(y))
//print the value from the prevoius function
.catch(console.error)
//catch error if there are any


//Output: 2