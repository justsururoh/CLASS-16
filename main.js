let user = "one";

let password = 1234;

if (user = "one")  {
    console.log (password); 
} else if (user = "two"); {
    console.log("0");   
} 


let dayOfTheWeek = 1

if (dayOfTheWeek = 1) {
    console.log("Sunday"); 
} else if  (dayOfTheWeek == 2); {
    console.log("Monday");
} 
  
// Switch Statement

let dayofTheWeek = 1

switch (dayofTheWeek) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
}


let studentGrade = 70

switch (studentGrade) {
    case 70:
        console.log("Grade A");
        break;
    case 60:
        console.log("Grade B");
        break;
    case 50:
        console.log("Grade C");
        break;
    case 40:
        console.log("Grade D");      
}


let score = 100;

const message = score === 100 ? "perfect score" : "try again";
 console.log(message);
 

let age = 19

const old = age >= 19 ? "old enough to vote" : "not old enough to vote"
console.log(old);


let membershiplevel = "#"

const discount = (membershiplevel == 'Gold') ? '20%' : (membershiplevel == 'Silver') ? '15%' :' 0% ';
console.log(discount);

// if statement
let Membershiplevel = 'Silver'

if (Membershiplevel = 'Gold') {
    console.log("20%"); 
} else if (Membershiplevel = 'Silver') {
    console.log("15%");  
} else {
    console.log("0%");  
}



// FUNCTION

function Kill(Donot) {
    console.log("i will harm you" + Donot);   
}

Kill ()

// task one

function Sum(Sum1, Sum2) {
    console.log(Sum1 + Sum2);   
}

Sum(100, 20)


// Assignment 

function findLargestNumber(num1, num2, num3) {
    // Check if num1 is the largest
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    }
    // Check if num2 is the largest
    else if (num2 >= num1 && num2 >= num3) {
        return num2;
    }
    // If neither num1 nor num2 is the largest, num3 must be the largest
    else {
        return num3;
    }
}

// Example usage:
let number1 = 10;
let number2 = 20;
let number3 = 15;

let largest = findLargestNumber(number1, number2, number3);
console.log(`The largest number is: ${largest}`);
