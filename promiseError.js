new Promise((resolve, reject) => {
	resolve('error')
}).then((data)=> {console.log(data)})
.catch(console.error)


//you were not resolving or rejecting