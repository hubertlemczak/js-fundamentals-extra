// SecondsInHours
//
// Create a function that takes a number of hours and returns the number of
// seconds in those hours.
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below
const hoursToSecondsMultiplier = 3600;
// function hoursToSeconds(hours) {
//   return hours * hoursToSecondsMultiplier;
// }

let hoursToSeconds = (hours) => hours * hoursToSecondsMultiplier;

// MilesTravelled
//
// Create a function that takes a number representing speed in miles per hour,
// a duration in minutes, and returns the distance travelled in miles rounded
// *up* to the nearest whole mile. You can use the Math.ceil function to
// perform the rounding. You can assume only whole numbers will be provided
// to the function.
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below

let distance = (speed, time) => Math.ceil(speed * (time / 60));

// KilometersToMiles
//
// Create a function that takes a number of kilometers and converts it to miles.
// For this task assume there are exactly 1.6 kilometers in a mile. The returned
// mile distance should be rounded to the nearest mile. You can  use the Math.round
// function to do this.
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below
const kmToMMultiplier = 1.6;
let kmToM = (km) => Math.round(km / kmToMMultiplier);

// MakeSentence
//
// Create a function that takes a string and returns the same string with the
// first letter capitalized and a full stop added on to the end. If the string
// already ends with a full stop, question mark (?) or an exclamation mark(!)
// then a full stop should not be added.
//
// You may need to the use `String.substring` method.
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below

let makeSentence = (words) => {
  let capitaliseFirst = words[0].toUpperCase() + words.slice(1);
  let endPunctuation = words[words.length - 1].match(/[?!.]/gi);
  return endPunctuation === null ? `${capitaliseFirst}.` : `${capitaliseFirst}`;
};

// FileExtension
//
// Create a function that takes a filename as a string and returns the file extension
// - i.e. `image.png` should return `png`. If the file has no extension then an empty
// string should be returned. You may need to the use `String.substring` method and
// the `String.lastIndexOf` method.
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below

let fileExtension = (file) => {
  let extension = '';
  for (let i = 0; i < file.length; i++) {
    if (i === file.lastIndexOf('.')) {
      extension = file.slice(i + 1);
      break;
    }
  }
  return extension;
};

// THIS DOES NOT WORK BECAUSE YOU CANNOT 'BREAK LOOP' WITH A TERNARY OPERATOR
// let fileExtension = (file) => {
//   let extension = '';
//   for (let i = 0; i < file.length; i++) {
//     return file[i] === '.' ? (extension = file.slice(i + 1)) : extension;
//   }
// };

// Range
//
// Create a function that takes an array of numbers and returns the difference
// between the highest and lowest numbers in the array. You can assume the array
// will always contain at least 1 number (it will never be empty)
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below

let range = (array) => {
  let maxNum = Math.max(...array);
  let minNum = Math.min(...array);
  return maxNum - minNum;
};

// CheckTransactions
//
// Create a function that checks if a list of banking transactions is valid for
// a given account.
//
// The function should accept 3 arguments. The first is an array containing a
// list of transactions to apply to the account balance. Positive numbers are
// deposits and negative numbers are withdrawals. The second argument is the
// account starting balance and the third is the account overdraft. The function
// should return false if applying the list of transactions causes the account
// balance to go below the overdraft value at any point.
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below

let transactions = (payments, balance, overdraft) => {
  for (let i = 0; i < payments.length; i++) {
    balance += payments[i];
  }
  return overdraft === balance ? true : -overdraft < balance;
};
// console.log(transactions([-10, -20], 20, 15));
// FilmsInGenre
//
// Create a function that takes an array of film objects, a film genre, and returns
// an array of film names that match the supplied genre. Each film object contains a
// `name` key that contains the film name and a 'genre' key that contains an array
// of strings describing what genres the film belongs to. See the spec file for
// example data.
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below

// const films = [
//   {
//     name: 'The Power Of The Dog',
//     genres: ['Drama', 'Western'],
//   },
//   {
//     name: 'Dune',
//     genres: ['Sci-Fi'],
//   },
//   {
//     name: 'The Matrix Resurrections',
//     genres: ['Sci-Fi'],
//   },
//   {
//     name: 'The Last Duel',
//     genres: ['Drama', 'History'],
//   },
// ];

let filmGenre = (arr, genre) => {
  let indexOfGenre;
  let movieName = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 2; j++) {
      indexOfGenre = arr[i].genres[j] === genre;
      if (indexOfGenre === true) {
        movieName.push(arr[i].name);
      }
      // console.log(indexOfGenre);
      // console.log('i', i, 'j', j);
    }
  }
  return movieName;
};

// TODO: change undefined to be the name of the functions you defined
module.exports = {
  //SecondsInHours
  a: hoursToSeconds,

  //MilesTravelled,
  b: distance,

  //KilometersToMiles,
  c: kmToM,

  //MakeSentence
  d: makeSentence,

  //FileExtension
  e: fileExtension,

  //Range
  f: range,

  //CheckTransactions
  g: transactions,

  //FilmsInGenre
  h: filmGenre,
};
