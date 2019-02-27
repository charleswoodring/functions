/*
CHICKENMONKEY
Print from 1 to 100.
Multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number
For the multiples of seven (7, 14, 21, etc.) print "Monkey"
For numbers which are multiples of both five and seven print "ChickenMonkey".
*/
// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 5 & 7, and check if the remainder is 0
//     if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
//         console.log("ChickenMonkey")
//     } else {
//         // Divide the current number by 5 and check if the remainder is 0
//         if (currentNumber % 5 === 0) {
//             console.log("Chicken")
//         } else {
//             // Divide the current number by 7 and check if the remainder is 0
//             if (currentNumber % 7 === 0) {
//                 console.log("Monkey")
//             } else {
//                 if (currentNumber % 5 != 0 || currentNumber % 7 != 0) {
//                     console.log(currentNumber)
//                 }
//                 // Print numeric value if not divisible by 5 or 7
//             }
//         }
//     }
// }
//
/*
BATTLEOFTHEBANDS
*/
// let bandNumber = 1 //let instead of const because its value will change

// const takeNumber = function (bandName) {
// console.log(`${bandNumber}. ${bandName}`)
// bandNumber = bandNumber + 1
// }
// takeNumber("Galactic Scum")
// // console.log(scum)  // This should print "1. Galactic Scum" in the console
// takeNumber("Underdogs")
// // console.log(under)  // This should print "2. Underdogs" in the console
//
/*
COOKOUT
*/
const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}
// An array that is grouping the objects together.
const rawfoods = [hamburger, zucchini, chickenBreast, corn, steak];

// display table of uncooked foods
console.table(rawfoods)

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

// the instructions for the grill funtion to perform when called
//pass argument currentObject (each food) to the grill function one at a time
function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;
    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

//call or invoke the grill function
rawfoods.forEach(item => { //array foods foreach food
    grill(item)
});
// display table of cooked foods
console.table(cookedFood)