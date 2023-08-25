// All questions should be printed to your Browser's console using console.log()


//------------------------------------------------

/****Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.
****/

//Create the array of ages
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Programmatically subtract value of the first element with the last
//Get first age
const first = ages[0];
console.log(first);

//Get second age
const last = ages[ages.length -1];
console.log(last);

//Print the subtraction of first and last ages
console.log(first - last);



//------------------------------------------------
//------------------------------------------------



/****
Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
****/

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
    //Initialize variables for the letter count and name length 
    let letterCount = 0;
    const numLetters = names.length;

     //Calculate average number of letters for each name to calculate the average
    for (let i = 0; i < numLetters; i++) {
        letterCount += names[i].length;
    };
    //Use letterCount value to calculate average number of letters
    const averageNumLetters = letterCount / numLetters;

    //Initialize concatenated name variable
    let concatNames = '';
    //Iterate through array to concatenate names with a space
    for (let i = 0; i < numLetters; i++) {
        concatNames += names[i] + ' ';
    }
    //Print average number of letters per name and a list of concatenated names 
    console.log(`Average number of letters per name: ${averageNumLetters}`);
    console.log(`Concatenated list of names: ${concatNames}`);


//------------------------------------------------
//------------------------------------------------

// How do you access the last element of any array?

const animalReactions = ['boo', 'hiss', 'spit', 'screech', 'scratch'];
let accessLastElement = animalReactions[animalReactions.length - 1];

console.log(accessLastElement);

//------------------------------------------------
//------------------------------------------------

// How do you access the first element of any array?
const carReactions = ['sizzle', 'hiss', 'hum', 'putt', 'rumble'];
let accessFirstElement = carReactions[0];
console.log(accessFirstElement);
/*

//------------------------------------------------
//------------------------------------------------

Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array
*/

//Create the empty nameLengths array
const nameLengths = [];
    //Iterate through the previous names array. Add lengths to nameLengths array
    for (let i = 0; i < names.length; i++){
        nameLengths.push(names[i].length);
    }
    //Print array   
    console.log(`New array: ${nameLengths}`);

//------------------------------------------------
//------------------------------------------------



// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

//Initialize variable
let sumOfAll = 0;
//Get the nameLengths for each name in the array
for (let i = 0; i < nameLengths.length; i++) {
    sumOfAll += nameLengths[i]; 
}
    console.log(`The sum of lengths is: ${sumOfAll}`);




//------------------------------------------------
//------------------------------------------------



/*Write a function that takes two parameters, word and n, as arguments and returns the word concatenated 
to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/

function saySomething (word, n) {
    //Initialize empty string 
    let talk = '';

    for (let i = 0; i < n; i++){
    talk += word;  

    }
    return talk;
}
console.log(saySomething('Hello', 4));


//------------------------------------------------
//------------------------------------------------

// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function getFullName (firstName, lastName) {
    fullName = firstName + ' ' + lastName;
    return fullName;
}
getFullName('Bryan', 'Gaskins');
console.log(`The full name is: ${fullName}`);

//------------------------------------------------
//------------------------------------------------

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

const numbers = [1, 23, 40, 67, 86, 32, 99];

function greaterThan100 (numbers) {
    //Initialize variable for sum of numbers
    let sumOfAll = 0;
    //Get the sum of all numbers in the array
    for (let i = 0; i < numbers.length; i++) {
        sumOfAll += numbers[i];
    }
    //If the sum of all numbers is greater than 100, it will return 'true'
    if (sumOfAll > 100) {
        return true;
    }
}
//Print true or false, depending on the numbers in the numbers array
console.log(greaterThan100(numbers));


//------------------------------------------------
//------------------------------------------------


// Write a function that takes an array of numbers and returns the average of all the elements in the array.

const numbers2 = [2, 33, 50, 7, 26, 82, 96];

function averageOfElements (numbers2) {
    //Initialize the sum variable and start at zero
    let sum = 0;
    //Get sum of the numbers in array
    for (let i = 0; i < numbers2.length; i++) {
        sum += numbers2[i];
    }
        //Calculate the average of all numbers
        const average = sum / numbers2.length;

        return average;
    }
    console.log("The average of all elements is: " + averageOfElements(numbers2));


//------------------------------------------------
//------------------------------------------------


/* Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array 
is greater than the average of the elements in the second array.*/

const firstArr = [16, 42, 75, 3, 20, 89, 99];
const secondArr = [8, 56, 40, 3, 21, 66, 19];

function greaterAverage (firstArr, secondArr) {
 //Initialize the sum variable and start at zero
 let sum1 = 0;
 let sum2 = 0;
 //Get sum of numbers from first array
 for (let i = 0; i < firstArr.length; i++) {
    sum1 += firstArr[i];
 }
 //Get sum of numbers from second array
 for (let i = 0; i < secondArr.length; i++) {
    sum2+= secondArr[i];
}
     //Calculate the average of the first and second array of numbers
     const firstAverage = sum1 / firstArr.length;
     const secondAverage = sum2 / secondArr.length;
    //Returns true f the average of the elements/numbers in the first array is greater than the second
    if (firstAverage > secondAverage) {
        return true;
    } else {
        return false;
    }
 }
console.log(greaterAverage(firstArr, secondArr));


//------------------------------------------------
//------------------------------------------------


/* Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50. */

let isHotOut = true; 
let money = 8.50; //Amount of moneyInPocket

function willBuyDrink (isHotOutside, moneyInPocket) {
    //Check if it is hot out AND if there is more than $10.50 available
    if(isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(isHotOut, money));



//------------------------------------------------
//------------------------------------------------

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

/* A lemonade stand needs to refresh its stock of 2 lemonade coolers everyday at noon. On hot days they need to add a third cooler.
to keep up with demand. Write a function that refills the lemonade at noon and makes an extra cooler on a hot day. Show the cooler count,
so inventory is always kept*/

let isHot = true; //Is it hot out? If so, an extra cooler is made
let isNoon = true; //At noon the coolers will need to be refilled
let coolerCount = 0; 

function makeLemonade (isHot, isNoon, coolerCount) {
    //If it is noon, the cooler count will be at zero and 2 coolers will be added to the count
    if (isNoon) {
        //At noon, the cooler count restarts at 2
        if (coolerCount === 0) {
            coolerCount = 2 
            console.log(`Two fresh coolers made for noon. ${coolerCount} cooler(s) available`);
        //If there are 3 or more coolers, no cooler will be made 
        if (coolerCount >= 3) {
            console.log(`No need for a new cooler. ${coolerCount} cooler(s) already available`);
        }
    //If it is hot AND noon, the cooler count will set to 3, adding an extra cooler 
        if (isHot) {
            if (coolerCount === 0) {
                coolerCount = 3;
                console.log(`Fresh coolers + 1 extra made. ${coolerCount} cooler(s) available`);
            } 
    } 
    //If it is not noon, there is no need for new coolers
       } else {
        //If it isn't noon or hot outside, there is no need for a refill of coolers
        console.log(`Not time for new coolers. ${coolerCount} cooler(s) already available`);

       }

       return coolerCount;

    } else {
        //If it isn't noon or hot. no coolers are needed
        console.log("No coolers needed.");
    }
}
coolerCount = makeLemonade(isHot, isNoon, 0);
//Print the cooler count
console.log(`The cooler count is: ${coolerCount}`);

