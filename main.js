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
let bandNumber = 1 //let instead of const because its value will change

const takeNumber = function (bandName) {
console.log(`${bandNumber}. ${bandName}`)
bandNumber = bandNumber + 1
}
takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console
takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console