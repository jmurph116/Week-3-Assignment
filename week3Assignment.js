// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
let subtract = ages.slice(-1) - ages[0];
console.log(subtract);


// Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(95);
subtract = ages.slice(-1) - ages[0];
console.log(subtract);


// Use a loop to iterate through the array and calculate the average age. Print the result to the console.
console.log(ages);
let averageAge = 0;
for(let i = 0; i < ages.length; i++){
    averageAge += ages[i] / ages.length;
}
console.log(Math.round(averageAge));


// Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);
console.log("length of names array: ", names.length)

// Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let lettersInNames = 0;

for(let i = 0; i < names.length; i++){
//print each iteration
console.log("Index #: ", i, "name:", names[i]);
console.log("Index #: ", i, " count: ", names[i].length);
lettersInNames = lettersInNames + names[i].length;
}
console.log("Sum of letters in names array: ", lettersInNames)
//take average
let average = lettersInNames / names.length;
console.log("average letters in names array: ", average);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
console.log(names);
let concatenatedNames = "";

for(let i = 0; i < names.length; i++){
    console.log("each name: ", names[i])
    concatenatedNames = concatenatedNames + names[i] + " ";
}
console.log(concatenatedNames);

// How do you access the last element of any array?
console.log(names.slice(-1));
// How do you access the first element of any array?
console.log(names[0]);

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array

let nameLengths = []; //empty array
console.log(nameLengths);

for(let i = 0; i < names.length; i++){
    console.log("name: ", names[i]);
    console.log("letter count: ", names[i].length);
    nameLengths.push(names[i].length);
}
console.log(nameLengths);


// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
//nameLengths = [3, 5, 3, 5, 4, 3];

let sumOfArray = 0;
console.log(nameLengths);
for(let i = 0; i < nameLengths.length; i++){
    sumOfArray = sumOfArray + nameLengths[i];
}
console.log(sumOfArray);

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function repeat(str, numTimes) {
    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result = result + str;
    }
    console.log(result);
}

repeat("Hello", 3);

// Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName)
}

fullName("Joshua", "Huckstep");

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let myNumbers = [12, 22, 34, 46, 51];

function greaterThan(array){

    let totalSum = 0;
    for(let i = 0; i < array.length; i++){
        totalSum = totalSum + array[i];
    } if (totalSum > 100){
        return true;
    } else {
        return false;
    }
}

console.log(greaterThan(myNumbers));




// Write a function that takes an array of numbers and returns the average of all the elements in the array.
function numArray(array){
    let average = 0;
    for(let i = 0; i < array.length; i++){
        average += array[i] / array.length;
    } return average;

} console.log(numArray(myNumbers));


// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

// let myNumbers = [12, 22, 34, 46, 51];
let newNumbers = [1, 2, 3, 4, 5, 6];


function multiArray(array1, array2){
    let avg1 = 0;
    for(let i = 0; i < array1.length; i++){
        avg1 += array1[i] / array1.length;
    }

    let avg2 = 0;

    for(let i =0; i < array2.length; i++){
        avg2 += array2[i] / array2.length;
    } 
    
    if (avg1 > avg2){ //avg1 = 33 //avg2 = 3.5
        return true;
    } else {
        return false;
    }

} console.log(multiArray(myNumbers, newNumbers));


// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let isHotOutside = true;
moneyInPocket = 10.51;

function willBuyDrink(boolean, money){
    if(boolean === true && money >= 10.50){
        return true;
    } else {
        return false;
    }
} console.log(willBuyDrink(isHotOutside, moneyInPocket));


// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function isPrime(num) //this function determines whether or not the passed number is a prime number or not
{

  if (num === 1) {
    return false;
}
  else if(num === 2) {
    return true;
  }else
{
    for(var i = 2; i < num; i++) {
      if(num % i === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(isPrime(37));