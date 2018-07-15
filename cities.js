const locations = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i'
];


let location_one = locations.splice(0,3);
let location_two = locations.splice(0,3);
let location_three = locations.splice(0,3);

let cities = `List of cities 
1. ${location_one}
2. ${location_two}
3. ${location_three}`

console.log(cities);