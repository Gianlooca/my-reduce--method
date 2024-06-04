  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => {
//   console.log(
//     "Accumulator:", acc,
//     "Current value", curr,
//     "Total:", acc + curr
//   );
//   return acc + curr;
// }, 0);
// console.log(sum);
/**
 * The callback function executes four times, once for each element of the array
 * (excluding the initial element of the array, and we'll get to why that is in a moment).
 * The important thing to recognize here is that the accumulator is accumulating the sum of
 * the current values as the function is executing for each element.
 * After having understood how this specific callback function works to accumulate values,
 * let's explore WHY this function only executes 4 times even though there are 5 elements
 * in the array. THE REASON IS THAT THE REDUCE METHOD ACTUALLY TAKES TWO PARAMETERS, THE INITIAL
 * VALUE TO USE AS THE ACCUMULATOR. IF THE INITIAL VALUE IS NOT SPECIFIED, THE ACCUMULATOR
 * WILL DEFAULT TO THE FIRST ELEMENT IN THE ARRAY. IN THIS CASE THAT ELEMENT WAS ZERO, AND THE
 * ACCUMULATION PROCESS STARTS WITH THE SECOND ELEMENT IN THE ARRAY, SO 1 IS ADDED TO 0.
 * However, if we explicitly specify an initial value to use as the accumulator, then the
 * callback function will execute five times, beginning with the first element of the array, and
 * using our explicit initial value as the accumulator (in our case we set the second parameter as 0).
 * In a practical sense, using the initial value is a good way to add more to a previously calculated 
 * subtotal, add more items to an existing array, or inject additional properties into an
 * existing object.
 * THOUGH IT'S OPTIONAL, AS AN ADVANCED JAVASCRIPT DEVELOPER YOU SHOULD ALWAYS SPECIFY THE INITIAL VALUE
 * TO USE FOR THE ACCUMULATOR IN ORDER TO BE EXPLICIT WITH YOUR INTENTIONS. NOT DOING SO CAN LEAD TO UNEXPECTED
 * BEHAVIOURS AND STRANGE BUGS IN OUR CODE.
 * 
 */

// We can simplify the upper callback function by turning it back into a one liner, and explicitly specifying
// the initial value of zero:
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experienceByProfession);