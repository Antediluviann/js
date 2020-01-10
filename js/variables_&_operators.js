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
// 	console.log("Kon"nichiwa Sekai");
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

// var dataOld = [34, true, "Peter", 1992];
// var dataNew = [];

// for (var i = 0; i < dataOld.length; i++) {
// 	dataNew[i] = dataOld[i];
// } 

// console.log(dataNew);

// // 2. Zadatak
// // Repack old array to the new one in the reverse order. Console log the result.

// var dataOld = [34, true, "Peter", 1992]
// var dataNew = [];

// for (var j = dataOld.length - 1; j >= 0; j-- ) {
// 	dataNew[dataOld.length - 1 - j] = dataOld[j];
// }

// console.log(dataNew)

// // 3. Zadatak
// // Repack old array to the new one so the data from two arrays is joined, starting with existing data from the new one. Console log the result.

// var dataOld = [34, true, "Peter", 1992];
// var dataNew = [12, "Jack"];
// var i = 0;

// while (i < dataOld.length) {

// 	dataNew[2 + i] = dataOld[i];
// 	i++;
// }

// console.log(dataNew);

// // 4. Zadatak
// // Create a new array that contains data from both arrays starting with data from array a. Console log the result.

// var a = [12, 56, 32, 44, 69];
// var b = [88, 7, 13];
// var c = [];

// for ( var i = 0; i < a.length; i++) {

// 	c[i] = a[i];

// } for ( var j = a.length; j < a.length + b.length; j++) {

// 	c[j] = b[j - a.length];
// }

// console.log(c);

// // 5. Zadatak
// // Create a new array that contains data from both arrays but in the alternating order, one element from array a, then one element from array b and so on. In the end it should look like this: [12, 88, 56, 7, 32, 13, 44] Console log the result.

// var a = [12, 56, 32, 44];
// var b = [88, 7, 13];
// var c = [];

// for (var i = 0; i < a.length; i++) {

// 	c[i * 2] = a[i];

// } for (var j = 0; j < b.length; j++) {

// 	c[j * 2 + 1] = b[j];
// }

// console.log(c);

// // 6. Zadatak
// // Console log next pattern (You are allowed to use only single *)

// for (var i = 1; i < 7; i++) {

// 	var star = "";

// 	for (var j = 0; j < i; j++) {

// 		star += "*";

// 	} console.log(star);
// }

// // 7. Zadatak
// // Console log next pattern (You are allowed to use only sinngle *)

// var star = "";
// var a = 6;
// var b = 11;

// for (var i = 0; i < a; i++) {

// 	for (var j = 0; j < b; j++) {

// 		if (j > 0 && j < 10 && i > 0 && i < 5) {

// 			star += " ";
// 		} else {
// 			star += "*";
// 		}
// 	} star += "\n";

// } console.log(star);


// // FUNCTIONS HOMEWORK

// //TASK 1: Create a function that should receive an array, and return an array in reverse order. Result should be stored in a variable

// function arr(names) {

// 	var reverse = [];

// 	for (var i = names.length - 1; i >= 0; i--) {
// 		reverse[names.length - 1 - i] = names[i];
// 	}

// 	console.log(reverse);
// }

// arr(["John", "Mike", "Jack", "Peter"]);

// //TASK 2: Create a function that should receive parameter of any type, and console log the type of received data

// function dType(type) {

// 	console.log("The type of data is " + typeof type)
// };

// dType("Vlad the Impaler");
// dType(true);
// dType(1389);

// //TASK 3: Create a function that should receive an array of at least five names, and return the length of the longest name in the array (hint - you can get the length of an string the same way as for array). Result should be stored in a variable

// function club(fiveNames) {

// 	var longName = "";

// 	for (var i = 0; i < fiveNames.length; i++) {

// 		if (fiveNames[i].length > longName.length) {
// 			longName = fiveNames[i];
// 		}
// 	}
// 	console.log("The longest name is " + longName);
// }

// club(["Denver Nuggets", "Dallas Maverics", "Sacremento Kings", "Toronto Raptors", "Chicago Bulls"]);

// //TASK 4: Create a function that should receive an array of numbers, find the second lowest and second greatest number, and console log result


// function secondLowestNumb(numbers) {
// 	var lowestNumber = numbers[0];
// 	var secondLowest = numbers[1];

// 	if (secondLowest < lowestNumber) {
// 		var temoporary = lowestNumber;
// 		lowestNumber = secondLowest;
// 		secondLowest = temoporary;

// 	} for (var i = 0; i < numbers.length; i++) {
// 		if (numbers[i] < lowestNumber) {
// 			lowestNumber = numbers[i];

// 	} else if (numbers[i] < secondLowest && numbers[i] > lowestNumber) {
// 		secondLowest = numbers[i];
// 		}
// 	}
// 	return secondLowest;
// }

// function secondGreatestNumb(numbers) {
// 	var greatestNumber = numbers[0];
// 	var secondGreatest = numbers[1];

// 	if (secondGreatest > greatestNumber) {
// 		var temoporary = greatestNumber;
// 		greatestNumber = secondGreatest;
// 		secondGreatest = temoporary;
	
// 	} for (var i = 0; i < numbers.length; i++) {
// 		if (numbers[i] > greatestNumber) {
// 			greatestNumber = numbers[i];

// 	} else if (numbers[i] > secondGreatest && numbers[i] < greatestNumber) {
// 		secondGreatest = numbers[i];
// 		}
// 	}
// 	return secondGreatest;
// }

// function getBothNumbers(numbers) {
// 	var secondLowest = secondLowestNumb(numbers);
// 	var secondLargest = secondGreatestNumb(numbers);

// 	var values = [secondLowest, secondLargest];

// 	console.log(values);

// 	return values;
// }

// getBothNumbers([43, 75, 15, 64, 18, 122, 7, 33]);


// //TASK 5: Create two functions. First one should receive two parameters, an array of numbers, and a single number. Then it should call the second function, and pass the same array and number into it. The second function should, based on an array and number provided, find all numbers in an array which are bigger then a provided number, and create an array of those numbers. Then it should console log result.


// function firstFunc(arr, numbers) {

// 	var firstArr = [];

// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] > numbers) {
// 			firstArr[firstArr.length] = arr[i];
// 		}
// 	}
// 	return firstArr;
// }

// function secondFunc(arr, numbers) {

// 	var greaterNumbers = firstFunc(arr, numbers);

// 	console.log(greaterNumbers);
// }

// secondFunc([3, 17, 42, 31, 28, 12], 15);


// CALLBACK FUNCTIONS HOMEWORK

// TASK 6: Create three functions. 

// First one should receive an array and return the lowest number in the array.
// Second one should receive an array and return the highest number if an array.

// Third function should receive first two functions, and should multiply the result of the first function with the result of the second function. Then it should console log the result.

var numArr = [7, 5, 14, 23, 121, 99];

function min(numArr) {

	var minNumber = numArr[0];

	for(i = 0; i < numArr.length; i++) {
		if(typeof minNumber === "number" && typeof numArr[i] === "number") {
			if(minNumber < numArr[i]) {
				minNumber = minNumber;
			} else if (minNumber === numArr[i]) {
				minNumber = minNumber;
			} else if (minNumber > numArr[i]) {
				minNumber = numArr[i];
			}
		}
	}
	return minNumber;
}

function max(numArr) {

	var maxNumb = numArr[0];

	for(i = 0; i < numArr.length; i++) {

		if(typeof maxNumb === "number" && typeof numArr[i] === "number") {
			if(maxNumb > numArr[i]) {
				maxNumb = maxNumb;
			} else if (maxNumb < numArr[i]) {
				maxNumb = numArr[i];
			} else if (maxNumb === numArr[i]) {
				maxNumb = maxNumb;
			}
		}
	}
	return maxNumb;
}

function multiply(min, max) {

	var result = min(numArr) * max(numArr);

	console.log(result);
}

multiply(min, max);




// TASK 7:

// Create a function that should receive an array and the second function.

// Array should be:

// [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64]

// After array is received you should find all numbers from array which are unique, and create a new array out of them.

// Then, the second function that is passed in the first one should be called, and it should receive this new array we created. It should then delete the biggest number in the array, and console log the result (array).


var numbArr = [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64];

var deleteBiggest = function (uniNumbers) {

	var bigNumb = uniNumbers[0];

	for(i = 0; i < uniNumbers.length; i++) {
		if(bigNumb > uniNumbers[i]) {
			bigNumb = bigNumb;
		} else if(bigNumb < uniNumbers[i]) {
			bigNumb = uniNumbers[i];
		} else if(bigNumb = uniNumbers[i]) {
			bigNumb = bigNumb;
		}
	}
	

	for(i = 0; i < uniNumbers.length; i++) {
		if(bigNumb == uniNumbers[i]) {
			delete uniNumbers[i];
		}
	}

	console.log(uniNumbers);

}

var printArr = function(numbArr, deleteBiggest) {

	var uniNumbers = [];
	

	for(i = 0; i < numbArr.length; i++) {
		var k = 0;
		if(typeof numbArr[i] === "number" ) {
			for(j = 0; j < numbArr.length; j++) {
				if(numbArr[i] == numbArr[j]) {
					k = k + 1;		
				} 
			}
			if(k < 2) {
				uniNumbers[uniNumbers.length] = numbArr[i];
			}
		} 		
	}

 deleteBiggest(uniNumbers);
	
}

printArr(numbArr, deleteBiggest);
