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
// 	console.log(numbA + " is the largest number amongst these numb");
// } else if (numbB >= numbA && numbB >= numbC && numbB >= numbD && numbB >= numbE) {
// 	console.log(numbB + " is the largest number amongst these numb");
// } else if (numbC >= numbA && numbC >= numbB && numbC >= numbD && numbC >= numbE) {
// 	console.log(numbC + " is the largest number amongst these numb");
// } else if (numbD >= numbA && numbD >= numbB && numbD >= numbC && numbD >= numbE) {
// 	console.log(numbD + " is the largest number amongst these numb");
// } else {
// 	console.log(numbE + " is the largest number amongst these numb");
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

// //TASK 4: Create a function that should receive an array of numb, find the second lowest and second greatest number, and console log result


// function secondLowestNumb(numb) {
// 	var lowestNumber = numb[0];
// 	var secondLowest = numb[1];

// 	if (secondLowest < lowestNumber) {
// 		var temoporary = lowestNumber;
// 		lowestNumber = secondLowest;
// 		secondLowest = temoporary;

// 	} for (var i = 0; i < numb.length; i++) {
// 		if (numb[i] < lowestNumber) {
// 			lowestNumber = numb[i];

// 	} else if (numb[i] < secondLowest && numb[i] > lowestNumber) {
// 		secondLowest = numb[i];
// 		}
// 	}
// 	return secondLowest;
// }

// function secondGreatestNumb(numb) {
// 	var greatestNumber = numb[0];
// 	var secondGreatest = numb[1];

// 	if (secondGreatest > greatestNumber) {
// 		var temoporary = greatestNumber;
// 		greatestNumber = secondGreatest;
// 		secondGreatest = temoporary;
	
// 	} for (var i = 0; i < numb.length; i++) {
// 		if (numb[i] > greatestNumber) {
// 			greatestNumber = numb[i];

// 	} else if (numb[i] > secondGreatest && numb[i] < greatestNumber) {
// 		secondGreatest = numb[i];
// 		}
// 	}
// 	return secondGreatest;
// }

// function getBothnumb(numb) {
// 	var secondLowest = secondLowestNumb(numb);
// 	var secondLargest = secondGreatestNumb(numb);

// 	var values = [secondLowest, secondLargest];

// 	console.log(values);

// 	return values;
// }

// getBothnumb([43, 75, 15, 64, 18, 122, 7, 33]);


// //TASK 5: Create two functions. First one should receive two parameters, an array of numb, and a single number. Then it should call the second function, and pass the same array and number into it. The second function should, based on an array and number provided, find all numb in an array which are bigger then a provided number, and create an array of those numb. Then it should console log result.


// function firstFunc(arr, numb) {

// 	var firstArr = [];

// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] > numb) {
// 			firstArr[firstArr.length] = arr[i];
// 		}
// 	}
// 	return firstArr;
// }

// function secondFunc(arr, numb) {

// 	var greaternumb = firstFunc(arr, numb);

// 	console.log(greaternumb);
// }

// secondFunc([3, 17, 42, 31, 28, 12], 15);


// CALLBACK FUNCTIONS HOMEWORK

// TASK 6: Create three functions. 

// First one should receive an array and return the lowest number in the array.
// Second one should receive an array and return the highest number if an array.

// Third function should receive first two functions, and should multiply the result of the first function with the result of the second function. Then it should console log the result.

// var numArr = [7, 5, 14, 23, 121, 99];

// function min(numArr) {

// 	var minNumber = numArr[0];

// 	for(i = 0; i < numArr.length; i++) {
// 		if(typeof minNumber === "number" && typeof numArr[i] === "number") {
// 			if(minNumber < numArr[i]) {
// 				minNumber = minNumber;
// 			} else if (minNumber === numArr[i]) {
// 				minNumber = minNumber;
// 			} else if (minNumber > numArr[i]) {
// 				minNumber = numArr[i];
// 			}
// 		}
// 	}
// 	return minNumber;
// }

// function max(numArr) {

// 	var maxNumb = numArr[0];

// 	for(i = 0; i < numArr.length; i++) {

// 		if(typeof maxNumb === "number" && typeof numArr[i] === "number") {
// 			if(maxNumb > numArr[i]) {
// 				maxNumb = maxNumb;
// 			} else if (maxNumb < numArr[i]) {
// 				maxNumb = numArr[i];
// 			} else if (maxNumb === numArr[i]) {
// 				maxNumb = maxNumb;
// 			}
// 		}
// 	}
// 	return maxNumb;
// }

// function multiply(min, max) {

// 	var result = min(numArr) * max(numArr);

// 	console.log(result);
// }

// multiply(min, max);




// // TASK 7:

// // Create a function that should receive an array and the second function.

// // Array should be:

// // [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64]

// // After array is received you should find all numb from array which are unique, and create a new array out of them.

// // Then, the second function that is passed in the first one should be called, and it should receive this new array we created. It should then delete the biggest number in the array, and console log the result (array).


// var numbArr = [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64];

// var deleteBiggest = function (uninumb) {

// 	var bigNumb = uninumb[0];

// 	for(i = 0; i < uninumb.length; i++) {
// 		if(bigNumb > uninumb[i]) {
// 			bigNumb = bigNumb;
// 		} else if(bigNumb < uninumb[i]) {
// 			bigNumb = uninumb[i];
// 		} else if(bigNumb = uninumb[i]) {
// 			bigNumb = bigNumb;
// 		}
// 	}
	

// 	for(i = 0; i < uninumb.length; i++) {
// 		if(bigNumb == uninumb[i]) {
// 			delete uninumb[i];
// 		}
// 	}

// 	console.log(uninumb);

// }

// var printArr = function(numbArr, deleteBiggest) {

// 	var uninumb = [];
	

// 	for(i = 0; i < numbArr.length; i++) {
// 		var k = 0;
// 		if(typeof numbArr[i] === "number" ) {
// 			for(j = 0; j < numbArr.length; j++) {
// 				if(numbArr[i] == numbArr[j]) {
// 					k = k + 1;		
// 				} 
// 			}
// 			if(k < 2) {
// 				uninumb[uninumb.length] = numbArr[i];
// 			}
// 		} 		
// 	}

//  deleteBiggest(uninumb);
	
// }

// printArr(numbArr, deleteBiggest);

// OBJECT HOMEWORK


// TASK 1: Based on existing object: Create a function which should change age to 34, and delete married property. In the end console.log object.

// var person = {

// 	name : 'Mike',
// 	age : 28,
// 	married : true

// }

// function valueChange(person, age) {

// 	if(person.age !== age){
// 		person.age = age;
// 	}

// return person;

// }


// function finderertyDelete(person) {

// 	if(person.married === true || person.married === false) {

// 		delete person.married;
// 	}

// return person;

// }


// function deleteFunc(person, age) {

// 	valueChange(person, age);
// 	finderertyDelete(person)

// 	console.log(person)
// }

// deleteFunc(person, 34)


// // TASK 2: Based on existing object: Create a function which should check if person has children findererty, if not add it. Its value should be array containing two objects with children data. Each object should contain child name, age and gender.

// var persons = {

// 	name: "Jack",
// 	age: 32,
// 	married: true	
// }

// var children = [
	
// 	{
// 		name: "Bobo",
// 		age: 7,
// 		gender: "Male"
// 	},
// 	{
// 		name: 'Stevanita',
// 		age: 4,
// 		gender: "Female"
// 	}
// ]

// function kids(persons, children) {

// 	if(persons.children === undefined){

// 		addKids(persons, children);
// 	} 

// 	console.log(persons);

// }

// function addKids(persons,children) {
	
// 	persons.children = children;

// 	return persons;
// }

// kids(persons, children);

// // TASK 3: Based on existing object: Create a function which should console.log if student passed exam, result should be something like: "Jack passed exam" or "Mike didn't pass exam"

// var students = [ 
//    {
//        name: 'Mike',
//        age: 28,
//        passed: false
//    },
//    {
//        name: 'Anna',
//        age: 23,
//        passed: true
//    },
//    {
//        name: 'Jack',
//        age: 32,
//        passed: true
//    },
// ];

// function print(text) {

// 	console.log(text);
// }

// function exam(students) {

// 	for(i = 0; i < students.length; i++) {
// 		students[i].passed ? print(students[i].name + ' passed exam.') : print(students[i].name + " didn't passed exam.");
// 	}
// }

// exam(students);

// // TASK 4: Based on existing object: Create a function which should repack existing data into three arrays, names, ages, and passed. Example of names array: var names = ['Mike', 'Anna', 'Jack'];

// function repack(finder, students) {

// 	var data = [];	
	
//     for(i = 0; i < students.length; i++) {
		
// 			data[i] = students[i][finder];
// 		}	
	
// 	return data;
// }


// function gettData(students) {

// 	var names = repack("name", students);
// 	var ages = repack("age", students);
// 	var exams = repack("passed", students);

// 	console.log(names, ages, exams);
// }

// gettData(students);

// // TASK 5: Based on existing object: Create the other object which should inherit data from existing object. Then console.log age by accessing the newly created object.

// var person = {
// 	name: "Jack",
// 	age: 32,
// 	married: true
// }

// var newObject = Object.create(person);

// function inheritData(newObject, person) {
    
//     newObject.age === person.age;
// 	newObject.name === person.name;
// 	newObject.married === person.married;

// 	console.log(newObject.age)
// }

// inheritData(newObject, person);

// // TASK 6: Based on existing object: Create a method which, when called, should console.log name and age of existing object.

// var person = {

// 	name: "Mike",
// 	age: 28,
// 	married: true,
// 	print: function(age, name) {

// 		console.log(this.name, this.age)
// 	}
// }

// person.print(person.name, person.age);

// // TASK 7: Based on existing object: Create a method which should create name, age and married properties in existing object, based on parameters passed in method.

// var person = {

// 	addMeth: function(name, age, married) {

// 		this.name = name;
// 		this.age = age;
// 		this.married = married;
// 	}
// };

// person.addMeth("Vlad the Impaler", 31, false)

// console.log(person)

// JS OBJECTS NASLEDJIVANJE

// TASK 1: Create array with data, and loop through it, so in the end you console log this:

// var numb = [1,2,3]
// var count = 1;

// function counting(numb, count) {

// 	for(i = 0; i < numb.length; i++) {
// 		for(j = 0; j < numb.length; j++) {
// 			console.log("At position "+ i +", subposition "+ j+", value is "+ count);
// 			count ++;
// 		}
// 	}
// }

// counting(numb, count);

// // TASK 2: Create a method that should console log name and age from any object. Then create array with multiple objects, each object should contain different names and ages. Call a method on each of them.

// Object.prototype.print = function() {

// 	var name = this.name;
// 	var age = this.age;

// 	console.log(name, age);
// }

// var arr = [
// 	{
// 		name: "Bobo",
// 		age: 63
// 	},
// 	{
// 		name: "Stevanita",
// 		age: 13
// 	},{
// 		name: "Gandalf",
// 		age: 999
// 	}
// ]

// function printFunc(arr) {

// 	for(i = 0; i < arr.length; i++) {
// 		arr[i].print();
// 	}
// }

// printFunc(arr);

// // TASK 3: Create a function that should receive this object, and repack it to the new object where values from previous object represent both, keys and values of the new object.

// var data = {
// 	name: "Peter",
// 	lastName: "Dinklage",
// 	status: "married"
// };

// data.makeThis = makeThis;

// function makeThis() {
// 	var person = {};

// 	person[this.name] = this.name;
// 	person[this.lastName] = this.lastName;
// 	person[this.status] = this.status;

// 	console.log(person)
// }

// data.makeThis();

// // TASK 4: Based on array: var someData = [13, 45, 56, [32, 11], 27, [55, 92]]; Create a function that should repack this array to another one where all numbers are contained in the same array, in the exact order like in provided array

// var data = [13, 45, 56, [32, 11], 27, [55, 92]];

// function repacking(data) {
// 	var newArr = [];

// 	for(i = 0; i < data.length; i++) {
// 		if( typeof data[i] === 'object') {
// 			for(k = 0; k < data[i].length; k++){
// 				newArr[newArr.length] = data[i][k];
// 			}
// 		} else {
// 			newArr[newArr.length] = data[i];
// 		}
// 	}
// 	console.log(newArr)
// }


// repacking(data);


// // TASK 5: Based on array: var someData = [13, 45, 56, [32, 11], 27, [55, 92]]; Create a function that should receive array, get both subarrays from parent array, and pass it into another function, which should then join those arrays. In the end result should be returned and stored in variable which contains first function.

// var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

// function doSomething(someData) {

// 	getTogether(someData, join(loop(someData)));

// }

// function loop(someData) {
// 	var arr = [];

// 	for(i = 0; i < someData.length; i++) {
// 		if(typeof someData[i] === "object") {
// 			arr[arr.length] = someData[i];
// 		}
// 	}

// 	return arr;

// }

// function join(arr) {
// 	var arr3 = [];

// 	for(i = 0; i < arr.length; i++){
// 		for(j = 0; j < arr[i].length; j++){
// 			arr3[arr3.length] = arr[i][j];
// 		}
// 	}
// 	return arr3;
	
// }

// function getTogether(someData, someOtherData) {

// 	for(i = 0; i < someOtherData.length; i++) {
// 		someData[someData.length] = someOtherData[i];
// 	}
// 	console.log(someData);
// }


// doSomething(someData);


// // TASK 6: Based on object: Create a function that should check if there is name in object, if yes it should return another function which should remove name from the function, if no then it should return a function which would set a name propery to the object, with the value passed once function is called.

// var someData = {
// 	name: "Peter",
// 	lastName: "Dinklage",
// 	status: "married"
// };



// function name(someData) {

// 	if(someData.name) {
// 		deleteName(someData);
// 	} else {
// 		addName(someData);
// 	}

// 	console.log(someData);
// };



// function deleteName(someData) {

// 	delete someData.name;
// };


// function addname(someData) {

// 	someData.name = "Peter";
// };


// name(someData);

// // TASK 7: Create a method that should check if there is name in object, if yes it should create second method in the same object and then call it. The second method should remove name from the function, and console log the object in it's current state. The second method should then create a third method and call it. Third method should add name property back to the object, with value of "Mike", and then console log object.

// // BONUS: Try to set name with value it had before.

// var someData = {
// 	name: "Peter",
// 	lastName: "Dinklage",
// 	status: "married"
// };

// console.log(someData);

// someData.name = function() {

// 	if(someData.name) {
// 		var name = someData.name;
		
// 		someData.removeName = function(name) {
// 			this.name = name;
			
// 			delete someData.name;
// 			console.log(someData)
			
// 			someData.addName = function(name) {
// 				this.name = name;
// 				someData.name = name;
// 				console.log(someData);
// 			}
// 			someData.addName(name);
// 		};
// 		someData.removeName(name);
// 	} 
// }

// someData.name();


// ADVANCED FUNCTIONS

// TASK 1: Create a constructor function for generating student objects. Each student object should have name, last name, age and average grade.

function student(student) {

	this.name = student[0];
	this.lastName = student[1];
	this.age = student[2];
	this.averageGrade = student[3];
}

var data = [
	["Vlad", "The Impaler", 31, 8.5],
	["Geralt", "of Rivia", 123, 9],
	["Vesemir", "the Master", 325, 10],
	["Yennefer", "of Vengerberg", 35, 6],
];

function list(data) {

	for(i = 0; i < data.length; i++) {
		this[data[i][0].toLowerCase()] = new student(data[i]);
	}
};

list(data);

console.log(vlad, geralt, vesemir, yennefer);

// TASK 2: Create a constructor function for generating objects with data about players of your favorite football team (name, age, goals scored, yellow cards). You can find statistics online.

function player(name, age, pointsScored, fouls) {

	this.name = name;
	this.age = age;
	this.pointsScored = pointsScored;
	this.fouls = fouls;
}	

var nikolaJokic = new player("Nikola", 24, 19.2, 3);
var jamalMurray = new player("Jamal", 22, 17.6, 1.7);
var garryHarris = new player("Garry", 27, 11, 2.4);
var malikBeasly = new player("Malik", 23, 16.7, 1.2);
var masonPlumlee = new player("Mason", 29, 7.3, 1);


console.log(nikolaJokic, jamalMurray, garryHarris, malikBeasly, masonPlumlee);


// TASK 3: Try to do the same thing as in the previous task, but when creating player objects try to do it dinammicaly (usign loop). For that you'll need data in following format: var players = [["Player name", 27, 12, 4], ["Player name", 27, 12, 4], ["Player name", 27, 12, 4]];

function Player(player) {

	this.name = player[0];
	this.lastName = player[1];
	this.age = player[2];
	this.pointsScored = player[3];
	this.fouls = player[4];
}	

var denver = [
	["Nikola","Jokic", 24, 19.2, 3],
	["Jamal","Murray", 22, 17.6, 1.7],
	["Garry","Harris", 27, 11, 2.4],
	["Malik","Beasly", 23, 16.7, 1.2],
	["Mason","Plumlee", 29, 7.3, 1],
];

function topPlayers(players) {

	for(i = 0; i < players.length; i++) {
		this[players[i][0].toLowerCase() + "_" + players[i][1].toLowerCase()] = new Player(players[i]);
	}
};

topPlayers(denver);

console.log(nikola_jokic,jamal_murray,garry_harris,malik_beasly,mason_plumlee);


//TASK 4: Create a construction function that should contain properties for first number, second number, and method. Then create a four instances of object from that constructor, each with different numbers, and different method. First should have method for multiplying of its own numbers, second for dividing, third for adding and fourth for subtracting.


function calculus(item) {

	this.firstNumber = item[0];
	this.secondNumber = item[1];
	this.sign = item[2];
	this.operation = function(firstNumber, secondNumber, sign) {

						var result;
						if(this.sign === "-"){
							result = this.firstNumber - this.secondNumber;
						} else if(this.sign === "+") {
							result = this.firstNumber + this.secondNumber;
						} else if(this.sign === "/") {
							result = this.firstNumber / this.secondNumber;
						} else if(this.sign === "*") {
							result = this.firstNumber * this.secondNumber;
						}

						return result;
					}
}

var arr = [

	[11, 23, "*"],
	[7, 3, "/"],
	[17, 9, "+"],
	[43, 69, "-"],

]

for(var i = 0; i < arr.length; i++) {
	this[name(i)] = new calculus(arr[i]);
	console.log(this[name(i)]);
}

function name(i) {
	var orderedNumber;

	if(i === 0) {
		orderedNumber = "Zero";
	} else if(i === 1) {
		orderedNumber = "One";
	} else if(i === 2) {
		orderedNumber = "Two";
	} else if(i ===3) {
		orderedNumber = "Three";
	}

	return "object" + orderedNumber;
}

//TASK 5: Test your understanding of closures and scope with following examples. IMPORTANT! - First read the task and try to give an answer, and then copy the code to your file and check what do you get in console.

    // QUESTION 1:

	// What’s the result of executing this code and why? 

	// ANSWER: The result is undefined because the return 2 is not defined.

		function test() {
		   console.log(a);
		   console.log(foo());
		   
		   var a = 1;
		   function foo() {
		      return 2;
		   }
		}

		test();


	// QUESTION 2:

	// What is result?

	// ANSWER: the result is 2

		var a = 1; 

		function someFunction(number) {
		  function otherFunction(input) {
		    return a;
		  }
		  
		  a = 5;
		  
		  return otherFunction;
		}

		var firstResult = someFunction(9);
		var result = firstResult(2);


	// QUESTION 3:

	// What is the result of the following code? Explain your answer.

	// ANSWER: the result is Aurelio De Rosa and John Doe. The first console log is getting an obj. prop from get full name function and the second console log is logging var test.

		var fullname = 'John Doe';
		var obj = {
		   fullname: 'Colin Ihrig',
		   prop: {
		      fullname: 'Aurelio De Rosa',
		      getFullname: function() {
		         return this.fullname;
		      }
		   }
		};

		console.log(obj.prop.getFullname());

		var test = obj.prop.getFullname;

		console.log(test());


	// QUESTION 4:

	// What will you see in the console for the following example?

	// ANSWER: I will probably see 1

		var a = 1; 
		function b() { 
		    a = 10; 
		    return; 
		    function a() {} 
		} 
		b(); 
		console.log(a);