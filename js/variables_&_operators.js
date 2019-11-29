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

var numbA = 15;

var numbB = -2;

var numbC = 22;

var numbD = 0;

var numbE = 13;

if (numbC >= numbA, numbC >= numbB, numbC >= numbD, numbC >= numbE) {
	console.log(numbC + " is the largest number amongst these numbers");
}

// 2. Zadatak

var rarA = 3;

var rarB = -7;

var rarC = 2;

var product = rarA * rarB * rarC

if ( rarA * rarB * rarC ) {
	console.log(product);
	console.log("The sign is -")
}

// 3. Zadatak

var name = "English";

switch (name) {
	case "English":
	   console.log("Hello World");
	case "German":
	   console.log("Hallo Welt");   
	case "Russian":
	   console.log("Привет, Mир");   
	case "Japan":
	   console.log("Kon'nichiwa Sekai");
	case "Serbian":
	   console.log("Zdravo Svete");      
}

// 4. Zadatak

var userAge = 15;

var age = 28;

var result = userAge >= age;

userAge >= age ? console.log(userAge) : console.log(result);

if (userAge <= age) {
	console.log("User is less than " + age + " years old");
};

userAge = 35;

if (userAge >= age) {
	console.log("User is older than " + age);
} else if (userAge === age) {
	console.log("User is " + age );
} else {
	console.log("User is less than " + age);
}
