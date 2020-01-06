// 1. Zadatak

// var Peter,
//     Jim,

// Peter = "3500$";
// Jim = "5000$";

// console.log(Peter + " is less than " + Jim);
// console.log(Peter >= Jim);


// // 2. Zadatak

// var John,
//     Mike,
//     a,

// John = 38;
// a =8;
// Mike = 2;

// console.log("Mike is " + (John + a) / Mike + " years old");  

// // 3.Zadatak

// var firstFlock,
//     secondFlock,

// firstFlock = 78;
// secondFlock = 57;

// console.log(firstFlock - 12);
// console.log(secondFlock + 12 - 4); 	
// console.log((firstFlock - 12) >= (secondFlock + 12 - 4));    


// JS TIPOVI I KONDICIONALI DOMACI

// 1. Zadatak

// var numbA = 15;

// var numbB = -2;

// var numbC = 22;

// var numbD = 0;

// var numbE = 13;

// if (numbA >= numbB && numbA >= numbC && numbA >= numbD && numbA >= numbE) {
// 	console.log(numbA + " is the largest number amongst these numbers");
// } else if (numbB >= numbA && numbB >= numbC && numbB >= numbD && numbB >= numbE) {
// 	console.log(numbB + " is the largest number amongst these numbers");
// } else if (numbC >= numbA && numbC >= numbB && numbC >= numbD && numbC >= numbE) {
// 	console.log(numbC + " is the largest number amongst these numbers");
// } else if (numbD >= numbA && numbD >= numbB && numbD >= numbC && numbD >= numbE) {
// 	console.log(numbD + " is the largest number amongst these numbers");
// } else {
// 	console.log(numbE + " is the largest number amongst these numbers");
// }



// // 2. Zadatak

// var rarA = 3;

// var rarB = -7;

// var rarC = 2;

// if (rarA * rarB * rarC > 0) {
// 	console.log("+")
// } else {
// 	console.log("-")
// };


// // 3. Zadatak

// var name = "English";

// switch (name) {
// 	case "English":
// 	console.log("Hello World");
// 	case "German":
// 	console.log("Hallo Welt");   
// 	case "Russian":
// 	console.log("Привет, Mир");   
// 	case "Japan":
// 	console.log("Kon'nichiwa Sekai");
// 	case "default":
// 	console.log("Zdravo Svete");      
// }

// // 4. Zadatak

// var userAge = 15;

// var age = 28;

// var result = userAge >= age;

// userAge >= age ? console.log(userAge) : console.log(result);

// if (userAge <= age) {
// 	console.log("User is less than " + age + " years old");
// };

// userAge = 35;

// if (userAge >= age) {
// 	console.log("User is older than " + age);
// } else if (userAge === age) {
// 	console.log("User is " + age );
// } else {
// 	console.log("User is less than " + age);
// }

// JS ARRAYS & LOOPS HOMEWORK

// 1. Zadatak
// Repack old array to the new one in the same order. Console log the result.

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i = 0; i < dataOld.length; i++) {
	dataNew[i] = dataOld[i];
} 

console.log(dataNew);

// 2. Zadatak
// Repack old array to the new one in the reverse order. Console log the result.

var dataOld = [34, true, "Peter", 1992]
var dataNew = [];

for (var j = dataOld.length - 1; j >= 0; j-- ) {
	dataNew[dataOld.length - 1 - j] = dataOld[j];
}

console.log(dataNew)

// 3. Zadatak
// Repack old array to the new one so the data from two arrays is joined, starting with existing data from the new one. Console log the result.

var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];
var i = 0;

while (i < dataOld.length) {

	dataNew[2 + i] = dataOld[i];
	i++;
}

console.log(dataNew);

// 4. Zadatak
// Create a new array that contains data from both arrays starting with data from array a. Console log the result.

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var c = [];

for ( var i = 0; i < a.length; i++) {

	c[i] = a[i];

} for ( var j = a.length; j < a.length + b.length; j++) {

	c[j] = b[j - a.length];
}

console.log(c);

// 5. Zadatak
// Create a new array that contains data from both arrays but in the alternating order, one element from array a, then one element from array b and so on. In the end it should look like this: [12, 88, 56, 7, 32, 13, 44] Console log the result.

var a = [12, 56, 32, 44];
var b = [88, 7, 13];
var c = [];

for (var i = 0; i < a.length; i++) {

	c[i * 2] = a[i];

} for (var j = 0; j < b.length; j++) {

	c[j * 2 + 1] = b[j];
}

console.log(c);

// 6. Zadatak
// Console log next pattern (You are allowed to use only single *)

for (var i = 1; i < 7; i++) {

	var star = "";

	for (var j = 0; j < i; j++) {

		star += "*";

	} console.log(star);
}

// 7. Zadatak
// Console log next pattern (You are allowed to use only sinngle *)

var star = "";
var a = 6;
var b = 11;

for (var i = 0; i < a; i++) {

	for (var j = 0; j < b; j++) {

		if (j > 0 && j < 10 && i > 0 && i < 5) {

			star += " ";
		} else {
			star += "*";
		}
	} star += "\n";

} console.log(star);




