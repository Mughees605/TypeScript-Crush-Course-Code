function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
	return firstName + "," + restOfName.join(",");
}

var employeeName = buildName("Moheed", "Shoaib", "Dawood", "Wahaj");

console.log(`Employee Names: ${employeeName}`)

//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[])=>string =
function (firstName: string, ...restOfName: string[]) {
	return firstName + "," + restOfName.join(",");
}

var employeeName = buildNameFun("Noman", "Tahir", "Kashaf", "Rehman");

console.log(`Employee Names: ${employeeName}`)