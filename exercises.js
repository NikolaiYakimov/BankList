'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
// //SLice method
// console.log(arr.slice(arr.indexOf('b'), arr.indexOf('h' + 1)));
// console.log(arr.slice(1, -2));
// console.log(arr.slice(-1));
// console.log(arr.slice(3, -3));
// console.log(arr.slice());
// console.log('--------------------');
// // console.log(arr.splice(2));
// arr.splice(2, 3);
// console.log(arr);
// //REVERSE
// arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
// const arr2 = ['j', 'k', 'l', 'm', 'o', 'p'];
// //const arr2 = arr.reverse();
// console.log(arr2);
// console.log(arr);

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join('--'));

// //AT()
// const numberArr = [1, 2, 3, 4];
// console.log(numberArr.at(1));

// //geting the last el of an array

// console.log(numberArr[numberArr.length - 1]);
// console.log(numberArr.slice(-1));
// console.log(numberArr.at(-1));
// console.log('Nikolay'.at(-1));
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement < 0) console.log(`You withdraw ${Math.abs(movement)}`);
//   else if (movement > 0) console.log(`You deposited ${Math.abs(movement)}`);
// }

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${Math.abs(movement)}`);
//   } else if (movement < 0) {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// });

//0:function(200)
//1:function(450)
//2:function(400)
//When we need the counteer or the index of the arr
//With for of

// for (const [i, movement] of movements.entries()) {
//   if (movement < 0)
//     console.log(`Movement ${i + 1}:You withdraw ${Math.abs(movement)}`);
//   else if (movement > 0)
//     console.log(`Movement ${i + 1}: You deposited ${Math.abs(movement)}`);
// }
// console.log('--------------------------');
// //With forEach
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${Math.abs(movement)}`);
//   } else if (movement < 0) {
//     console.log(`Movement${index + 1}: You withdraw ${Math.abs(movement)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key) {
//   console.log(`${value} is ${key}`);
// });

// const arr = [1, 2, 2, 3, 4, 5, 6, 3, 4, 4];
// const setArr = new Set(arr);

// //In set the foreach method key and value is the same ell,the programers do it
// setArr.forEach(function (key, value) {
//   console.log(`${key}: ${value} `);
// });

//

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   // const dogsJuliaCorrected = [...dogsJulia];
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsKate.concat(dogsJuliaCorrected);
//   console.log(dogs);
//   dogs.forEach(function (years, dog) {
//     if (years >= 3) {
//       console.log(`Dog number ${dog + 1} is adult,and is ${years} years old`);
//     } else {
//       console.log(`Dog number ${dog + 1} is still a puppy`);
//     }
//   });
// };

// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUSD = 1.1;

// const usdDollars = movements.map(function (movement) {
//   return movement * euroToUSD;
// });
// console.log(movements);
// console.log(usdDollars);

// const movUSDfor = [];
// for (const mov of movements) {
//   movUSDfor.push(mov * euroToUSD);
// }

// console.log(movUSDfor);

// const eutoToUsdArrFunc = movements.map(mov => mov * euroToUSD);
// console.log(eutoToUsdArrFunc);

// const stringMove = movements.map(function (movement, index) {
//   return `Movement ${
//     index + 1
//   }: You ${movement > 0 ? 'deposit' : 'withdraw'} ${Math.abs(movement)}`;
// });

// console.log(stringMove);

// const depositArr = movements.filter(function (movement) {
//   return movement > 0;
// });

// console.log(depositArr);

//The same with for of instead
// const depArr = [];
// for (const mov of movements) {
//   if (mov > 0) depArr.push(mov);
// }
// console.log(depArr);

// const withdrawArr = movements.filter(function (movement) {
//   return movement < 0;
// });

// console.log(withdrawArr);
//accumulator ->snowball
// const balance = movements.reduce(function (accom, mov, i) {
//   console.log(`Iteration ${i}: ${accom} `);
//   return accom + mov;
// }, 0);
// console.log(balance);

// const balance = movements.reduce((accum, mov) => accum + mov, 0);
// console.log(balance);
//Doing it with for loop

// let forBalance = 0;
// for (const mov of movements) {
//   forBalance += mov;
// }
// console.log(forBalance);

//Maximum value
// const maxValueEl = movements.reduce(
//   (acc, mov) => (mov > acc ? mov : acc),
//   movements[0]
// );
// console.log(maxValueEl);

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
// */
// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(function (dogAge) {
//     // console.log(dogAge);
//     return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
//   });
//   const adultDogs = humanAge.filter(function (dogHumanYear) {
//     return dogHumanYear >= 18;
//   });
//   // console.log(humanAge);
//   // console.log(adultDogs);

//   const averageAge =
//     adultDogs.reduce(function (accom, dog) {
//       return accom + dog;
//     }, 0) / adultDogs.length;
//   console.log(Math.trunc(averageAge));
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//Get the all deposits,convert them from euros to dollars and add them in balance
// const euroToUSD = 1.1;
// const balanceUSD = movements
//   .filter(function (mov) {
//     return mov > 0;
//   })
//   .map(function (mov) {
//     return mov * 1.1;
//   })
//   .reduce(function (accum, mov) {
//     return accum + mov;
//   }, 0);

//With arrow func
//Pipeline
// const balanceUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUSD)
//   .reduce((accum, mov) => accum + mov, 0);

// console.log(balanceUSD);

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
// */
// const calcAverageHumanAgeChaning = function (ages) {
//   return ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((accum, age, i, arr) => accum + age / arr.length, 0);
// };
// console.log(calcAverageHumanAgeChaning([5, 2, 4, 1, 15, 8, 3]));
// calcAverageHumanAgeChaning([16, 6, 10, 5, 6, 1, 4]);

// //Find the first negative movement with Find Method
// // console.log(movements.find(mov => mov < 0));
// console.log(movements);
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// const account = accounts.find(account => account.username === 'stw');

// console.log(movements.some(mov => mov > 0));

// console.log(movements.every(mov => mov > 0));
// console.log(movements.filter(m));

// const arr = [[1, 2, 3], [4, 5], 6, 7, 8];
// console.log(arr.flat());

// const deepArr = [[[1, 2], 3], 4, [[5, 6], 7], 8, 9];
// console.log(deepArr.flat(2));
// //With flat and map
// const accountMomvmentsOveralBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((accum, mov) => accum + mov);
// console.log(accountMomvmentsOveralBalance);
// //With FlatMap method
// const accsMovementsFlatMap = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((accum, mov) => accum + mov);
// console.log(accsMovementsFlatMap);

const owners = ['Ivan', 'Nikolay', 'Aleks', 'Yordan', 'Stoian'];
console.log(owners.sort());

//return <0 A,B(keep order)
//return >0 B,A(switch order)
//Ascending
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1;
//   })
// );
//We can do it like this
// console.log(movements.sort((a, b) => a - b));
// //descending
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   })
// );

// const MyString = 'I am from Bulgaria!';
// console.log(MyString);
// console.log(
//   MyString.split(' ')
//     .map(name => name + 1)
//     .join(' ')

// const y = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

// const x = new Array(7);
// console.log(x);
// x.fill(2, 3, 5);
// console.log(x);
// x.fill(1);
// console.log(x);

// y.fill(23, 2, 6);

// //Array.from
// const formArray = Array.from({ length: 8 }, (_, i) => (i + 1) * 2);
// console.log(formArray);

// // const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// // console.log(movementsUI);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });
//Exercise 1
//How much is the deposit of all the accounts

// const deposits = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, mov) => sum + mov, 0);
// console.log(deposits);

//Exercise 2
//how much deposids are in the bank with over 1000 dollars
//Firt way
const numDepositsAtLeast1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(numDepositsAtLeast1000);

//Second way
const numDepositsAtLeast1000_2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, mov) => {
    return mov >= 1000 ? ++count : count;
  }, 0);
console.log(numDepositsAtLeast1000_2);

//Exercise 3
//get the deposit and withdraw in a object using reduce
//1-st way
// const { depositsArr, withdraws } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     function (sum, mov) {
//       if (mov > 0) sum.depositsArr += mov;
//       else sum.withdraws += mov;
//       return sum;
//     },
//     { depositsArr: 0, withdraws: 0 }
//   );
// console.log(depositsArr, withdraws);
//2-cond way
// const { deposits, withdraws } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     function (sum, mov) {
//       sum[mov > 0 ? 'deposits' : 'withdraws'] += mov;
//       return sum;
//     },
//     { deposits: 0, withdraws: 0 }
//   );
// console.log(deposits, withdraws);

// //Exercise 4
// //this is nice title->This Is Nice Title
// const convertTitleCase = function (title) {
//   const capitzalizeFirstWord = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word) ? word : capitzalizeFirstWord(word)
//     )
//     .join(' ');
//   return capitzalizeFirstWord(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
//2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);
console.log(
  `Sarah's dog eat too ${
    sarahDog.curFood > sarahDog.recFood ? 'much' : 'little'
  }`
);

//3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatToLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatToLittle);

//4
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatToLittle.join(' and ')} dogs eat too little!`);

//5
console.log(dogs.some(dog => dog.curFood === dog.recFood));
//6
const okayFood = function (dog) {
  dog.curFood > dog.recFood * 0.9 && dog < dog.recFood * 1.1;
};

console.log(dogs.some(okayFood));

//7
const eatOkeyDogs = dogs.filter(okayFood);

//8
const sortedDogs = dogs.slice().sort((a, b) => a.curFood - b.curFood);
console.log(sortedDogs);
