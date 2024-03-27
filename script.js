'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};
createUsernames(accounts);

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (accum, mov) {
    return accum + mov;
  }, 0);

  labelBalance.textContent = `${acc.balance}€`;
};
// calcPrintBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((accom, mov) => accom + mov, 0);
  labelSumIn.textContent = `${income}€`;

  const outcome = movements
    .filter(mov => mov < 0)
    // Може и така
    // .reduce((accom, mov) => accom - mov, 0);
    .reduce((accom, mov) => accom + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const intrest = movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter((mov, i, arr) => {
      // console.log(arr);
      return mov >= 1;
    })
    .reduce((accom, intr) => accom + intr, 0);
  labelSumInterest.textContent = `${intrest}€`;
};

const updateUi = function (acc) {
  displayMovements(acc.movements);
  //Display summery
  calcDisplaySummary(acc);
  //Display balance
  calcPrintBalance(acc);
};

// calcDisplaySummary(account1.movements);
//Event hendler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //Displayin User Interface and welcome message
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    //Display movements

    //Display summery
    //Display balance
    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const transferAcc = accounts.find(
    acc => acc?.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    transferAcc &&
    currentAccount.balance > +amount &&
    transferAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    transferAcc.movements.push(amount);
    updateUi(currentAccount);
  }
  // console.log(transferAcc);
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov > 0.1 * loanAmount)
  ) {
    currentAccount.movements.push(loanAmount);
    updateUi(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Close');
  // const closeUsername = inputCloseUsername.value;
  // const closePin = Number(inputClosePin.value);
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
});
let sorted = false;
btnSort.addEventListener('click', function () {
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
// labelBalance.textContent = ac;
// console.log(accounts);
// console.log(containerMovements.innerHTML);

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
console.log(movements.sort((a, b) => a - b));
//descending
console.log(
  movements.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
  })
);
