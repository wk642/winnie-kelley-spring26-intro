//----------------------------------
// LESSON 4 ALGORITHMS
//----------------------------------

// ---------- QUESTION 1 ----------
// Create a function called 'convertTemp' that takes 1 temperatue parameter in celsius and return the temperature in Fahrenheit. Log both the input and output values

// EXAMPLE LOG:
//  console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// EXAMPLE OUTPUT:
//  Q1 convertTemp: 0 32

// Call convertTemp with several different celsium temperatures

// PUT YOUR CODE HERE
function convertTemp(celsius){
    // return as Fahrenheit
    // equation for C to F is (9/5(c) + 32)
    let farenheitResults = (9/5)*(celsius) + 32;
    return farenheitResults;
}

// creating variable of temperature
const celsiusTemp = 0;

// log both input and output values
console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// ---------- QUESTION 2 ----------
// Create a function called 'reverseString' that takes 1 string parameter and returns the reverseString. Use a for loop. Log both the input and output values.

// EXAMPLE LOG:
//  console.log("Q2 reverseString: ", inputString, reverseString(inputString));
// EXAMPLE OUTPUT:
//  Q2 reverseString: HelloWorld dlroWolleH

// Call reverseString with several different strings. Make sure it works for an empty string.

// PUT YOUR CODE HERE
function reverseString(phrase){
    // variable to store reversed string
    let phraseReversed = "";
    
    // create a loop to go from the last letter to the first. 
    // using a backwards loop for this
    for (let i = phrase.length - 1; i >= 0; i--){
        // add each letter to phraseReversed
        phraseReversed += phrase[i];
    }

    return phraseReversed;
}

let inputString = "HelloWorld";
console.log("Q2 reverseString: ", inputString, reverseString(inputString));

// edge cases:
// empty string
inputString = ""; // blank
console.log("Q2 reverseString: edge case: ", inputString, reverseString(inputString));
// with spaces
inputString = "Detective Pikachu"; // uhcakiP evitceteD
console.log("Q2 reverseString: edge case: ", inputString, reverseString(inputString));
// just spaces
inputString = " "; // spaces
console.log("Q2 reverseString: edge case: ", inputString, reverseString(inputString));
// numbers
inputString = "123456"; //654321
console.log("Q2 reverseString: edge case: ", inputString, reverseString(inputString));
// mixed numbers, letters and symbols
inputString = "Question #2!"; // !2# noitseuQ
console.log("Q2 reverseString: edge case: ", inputString, reverseString(inputString));

// ---------- QUESTION 3 ----------
// Let's make a useful math problem - create a tip calculator! Create a function named tipCalculator that takes two parameters - billTotal and tipPercentage.  Return the total bill amount

// EXAMPLE LOG:
//  console.log("Q3 tipCalculator: ", tipCalculator (20, .20));
// EXAMPLE OUTPUT:
//  Q3 tipCalculator: 50 0.2 60

// PUT YOUR CODE HERE

// Don't forget your console.logs!
function tipCalculator(billTotal, tipPercentage){
    // tip is billTotal * tip Percentage
    // add that to the bill total and return it
    return billTotal + (billTotal * tipPercentage);
}

console.log("Q3 tipCalculator: 20, 0.20", tipCalculator (20, .20));

// to get the example output: 
console.log("Q3 tipCalculator: 50, 0.20", tipCalculator (50, .20));

// ---------- QUESTION 4 ----------
// Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).

// EXAMPLE LOG:
//  console.log("Q4: ", num1, num2, multiplyThese(num1, num2));
// EXAMPLE OUTPUT: 
//  Q4 multiplyThese: 10 10 100

// PUT YOUR CODE HERE

let num1 = 6;
let num2 = 42; 

function multiplyThese(num1, num2){
    // multiple the two numbers
    return num1 * num2;
}

console.log("Q4: ", num1, num2, multiplyThese(num1, num2));

// ---------- QUESTION 5 ----------
// Create a function called 'getAverage' that takes 2 parameters and returns their average. NOTE: In some programming languages, the types of numbers you use in equations can effect what type of number (integer/floating point) you get as a result. We suggest using 2.0 instead of 2 as you're calculating the average.

// EXAMPLE LOG:
//  console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));
// EXAMPLE OUTPUT: 
//  Q5 getAverage: 3 6 4.5

// PUT YOUR CODE HERE

function getAverage(num1, num2){
    // get average
    return (num1 + num2) / 2;

}

console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));

// ---------- QUESTION 6 ----------
// Create a function named 'isPrime' that returns true or false based on whether the number is prime or not.
// Hint: To determine if a number is prime, you can check if it's divisible by any number from 2 up to the square root of the number. 0 and 1 are not prime numbers.
// Make sure you test several prime and non prime numbers along with 0 and 1.

// EXAMPLE LOG:
//  console.log("Q6 isPrime: ", number, isPrime(number));
// EXAMPLE OUTPUT: 
//  Q6 isPrime: 12 false

// PUT YOUR CODE HERE

function isPrime(number){
    // 0, 1 are not prime
    if (number < 2) {
        return false;
    }

    // divisible by 2
    // up to square root of number
    for (let i = 2; i <= Math.sqrt(number); i++){
        // if it's divisible with no remainer, not prime
        if (number % i === 0){
            return false;
        }
    }
    // otherwise prime number
    return true;
}
let number;

number = 0; // false
console.log("Q6 isPrime: ", number, isPrime(number)); 
number = 1; // false
console.log("Q6 isPrime: ", number, isPrime(number));
number = 2; // true
console.log("Q6 isPrime: ", number, isPrime(number));
number = 3; // true
console.log("Q6 isPrime: ", number, isPrime(number));
number = 4; // false
console.log("Q6 isPrime: ", number, isPrime(number));
number = 5; // true
console.log("Q6 isPrime: ", number, isPrime(number));
number = 6; // false
console.log("Q6 isPrime: ", number, isPrime(number));
number = 7; // true
console.log("Q6 isPrime: ", number, isPrime(number));
number = 8; // false
console.log("Q6 isPrime: ", number, isPrime(number));
number = 9; // false
console.log("Q6 isPrime: ", number, isPrime(number));
number = 10; // false
console.log("Q6 isPrime: ", number, isPrime(number));
number = 11; // true
console.log("Q6 isPrime: ", number, isPrime(number));
number = 12; // false
console.log("Q6 isPrime: ", number, isPrime(number));
number = 13; // true
console.log("Q6 isPrime: ", number, isPrime(number));

// ---------- QUESTION 7 ----------
// Using the 'isPrime' function created in the previous question, create another function named 'getPrimesUpTo' that takes an integer as an input and returns an array of all primes up to and including the input number. 
// Be sure to include several test cases

// EXAMPLE LOG:
//  console.log("Q7 getPrimesUpTo: ", number, isPrime(number));
// EXAMPLE OUTPUT:
//  Q7 getPrimesUpTo: 13 [2,3,5,7,11,13]

// PUT YOUR CODE HERE
function getPrimesUpTo(number){
    // create an empty array to store the prime numbers
    let primeNumbersResults = [];

    // 0, 1 are not prime, start loop at 2
    for (let i = 2; i <= number; i++){
        // using isPrime function from question 6
        // if the function come back to true
        if (isPrime(i)){
            // add the number to the array
            primeNumbersResults.push(i);
        }
    }
    return primeNumbersResults;
}

number = 13;
console.log("Q7 getPrimesUpTo: ", number, getPrimesUpTo(number));

// ---------- QUESTION 8 ----------
// Now, we're going to write several functions that calculate a student's grade.  
// First, write a function named 'calculateAverage' that takes an input array of scores and calculates a student's average based on those scores.
// Check all of the grades in the array and ignore any values that are not in the range 0 - 100.
// Also, make sure that an empty array or no valid values in the array do not result in an error (hint: make sure you aren't dividing by 0)

// EXAMPLE LOG:
//  console.log("Q8 calculateAverage: ", calculateAverage(scores));
// EXAMPLE OUTPUT:
//  Q8 calculateAverage: 85 // input array let scores = [90, 80, 85];

// PUT YOUR CODE HERE
function calculateAverage(scores){
    // create variable to score the total of scores
    let scoresTotal = 0;
    // create variable to keep the total number of valid scores
    let validNumbersCount = 0;

    // error handling: empty array
    if (scores.length === 0){
        return "There were no scores provided";
    }

    // loop through array
    for (let i = 0; i < scores.length; i++){
        // grade is between 0 - 100
        if ((scores[i] >= 0) && (scores[i]<= 100)){
            // increase valid scores numbers by 1
            validNumbersCount++;
            // add to sum 
            scoresTotal += scores[i];
        }
    }

    // error handling: no valid scores, 
    if (validNumbersCount <= 0) {
        return "The scores provided are not valid.";
    }
    return scoresTotal / validNumbersCount;
}

let scores = [90, 80, 85];
console.log("Q8 calculateAverage: ", calculateAverage(scores));

// scores that aren't valid to test error message
scores = [-10, -8, 119];
console.log("Q8 calculateAverage: invalid numbers", calculateAverage(scores));

// empty array
scores = [];
console.log("Q8 calculateAverage: empty array", calculateAverage(scores));

// ---------- QUESTION 9 ----------
// Now, create a function - getLetterGrade(average) - that takes a grade average and returns a letter grade based on the following scale. Make sure you test with several averages.
// A: 90–100
// B: 80–89
// C: 70–79
// D: 60–69
// F: below 60

// EXAMPLE LOG:
//  console.log("Q9 getLetterGrade: ", getLetterGrade(95));
// EXAMPLE OUTPUT:
//  Q9 getLetterGrade(95): A

// PUT YOUR CODE HERE
function getLetterGrade(average){
    // error handling / edge case: grade is above 100
    if (average > 100){
        return `Above A!!! They scored ${average}`;
    } else if (average >= 90 && average <= 100){
        // A: 90–100
        return "A";
    } else if (average >= 80){
        // B: 80-89
        return "B";
    } else if (average >= 70){
        // C: 70–79
        return "C";
    } else if (average >= 60){
        // D: 60–69
        return "D";
    } else {
        // F: below 60
        return "F";
    }

}

console.log("Q9 getLetterGrade: ", getLetterGrade(95));
console.log("Q9 getLetterGrade: ", getLetterGrade(85));
console.log("Q9 getLetterGrade: ", getLetterGrade(75));
console.log("Q9 getLetterGrade: ", getLetterGrade(65));
console.log("Q9 getLetterGrade: ", getLetterGrade(55));
console.log("Q9 getLetterGrade: ", getLetterGrade(145));

// ---------- QUESTION 10 ----------
// Create a 3rd function named - passed(letterGrade) - that returns true if a student's grade is A, B or C, false otherwise. Make sure you handle a value other than A,B,C,D or F passed in.

// EXAMPLE LOG:
//  console.log("Q10 passed('A'): ", passed('A'));
// EXAMPLE OUTPUT:
//  Q10 passed('A''): true

// PUT YOUR CODE HERE
function passed(letterGrade){
    // using switch here, I could use a if else too, I just feel like a switch would be more efficient
    switch (letterGrade){
        // A, B, C = pass / true
        case "A":
        case "B":
        case "C":
            return true;    
        
        // D, F = fail / false
        case "D": 
        case "F":
            return false;
        
        // other = fail / false
        default: 
            return false;
    }
}

console.log("Q10 passed('A'): ", passed("A")); // true
console.log("Q10 passed('B'): ", passed("B")); // true
console.log("Q10 passed('C'): ", passed("C")); // true
console.log("Q10 passed('D'): ", passed("D")); // false
console.log("Q10 passed('F'): ", passed("F")); // false
console.log("Q10 passed('empty/ no grade passed in'): ", passed("")); // false
console.log("Q10 passed('Q'): ", passed("Q")); // false

// ---------- QUESTION 11 ----------
// Create a function named printClassResult (className, student, scores) that utilizes all three functions to output information on a student.
// Print yes is they have passed and no if they did not.

// EXAMPLE LOG:
//  console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [60, 70, 85, 87]));  
// EXAMPLE OUTPUT:
//  Q11: History 101 - Student: Jane Doe, Average: 75.5, Grade: C, Passed: yes

// PUT YOUR CODE HERE
function printClassResult(className, student, scores){
    // create variables to store their average, grade and passed or not passed
    // passing in score to calculate average
    let average = calculateAverage(scores);
    // use the above average calculated to get grade
    let grade = getLetterGrade(average);
    // determine pass or not using grade, if true = yes; false = no;
    let isPassed = passed(grade) ? "yes" : "no";

    // log out all of the details
    return (`${className} - Student: ${student}, Average: ${average}, Grade ${grade}, Passed: ${isPassed}`);
}

console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [60, 70, 85, 87]));

// ---------- QUESTION 12 ----------
// Now, let's see how to use a callback. First, create a function that simulates pushing a button. Name the function buttonPushed and log the message "The button was pushed!" in the function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  buttonPushed();

// EXAMPLE OUTPUT: (we're using this function in the next question as well)
//  Q12, Q13: The button was pushed!

// PUT YOUR CODE HERE


// ---------- QUESTION 13 ----------
// Now, create a function called simulateButtonPush and pass the function created in question 12 to that function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  simulateButtonPush(buttonPushed);

// EXAMPLE OUTPUT: 
//  The button was pushed!

// PUT YOUR CODE HERE