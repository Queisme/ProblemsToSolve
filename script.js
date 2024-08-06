// 1

function evens(start, end) {
  for (let i = start; i <= end; i++) {
    if ([i] % 2 === 0) {
      console.log(i);
    }
  }
}

//evens(1, 100);

// 2

function multiTable(num1, num2) {
  for (let a = num1; a <= num2; a++) {
    for (let b = 1; b <= num2; b++) {
      console.log(`${a} * ${b} = ${a * b}`);
    }
  }
}

//multiTable(4, 8);

// 3

function kiloToMiles(kilos) {
  let miles = (kilos / 1.609).toFixed(2);
  console.log(`${kilos} kilometers is equal to ${miles} miles`);
}

//kiloToMiles(102);

// 4

function sumOf(arr) {
  console.log(arr.reduce((total, current) => total + current));
}

// sumOf([1, 2, 3, 4, 5]); // 15
// sumOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 55
// sumOf([-33, 45, 67, 98, 2.3, -34, 102]); // 247.3

// 5

function reversedArr(rra) {
  console.log(rra.toReversed());
}

// reversedArr([1, 2, 3, 4, 5]);
// reversedArr([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

// 6

// function lowToHigh() {}

// function yourFutureCareer() {
//   const career = Math.random();
//   if (career <= 0.32) {
//     return 'FrontEnd Developer';
//   } else if (career <= 0.65) {
//     return 'BackEnd Developer';
//   } else {
//     return 'Full-Stack Developer';
//   }
// }

// console.log(yourFutureCareer());

// const yourFutureCareer = () => {
//   const choices = [
//     'FrontEnd Developer',
//     'BackEnd Developer',
//     'Full-Stack Developer',
//   ];
//   return choices[Math.floor(Math.random() * choices.length)];
// };

// console.log(yourFutureCareer());

// function Dog(breed) {
//   this.breed = breed;
// }

// const snoopy = new Dog('Beagle');

// snoopy.bark = function () {
//   return 'Woof';
// };

// const scoobydoo = new Dog('Great Dane');

// scoobydoo.bark = function () {
//   return 'Woof';
// };

// console.log(scoobydoo.bark());
// console.log(snoopy.bark());

// const sum = (nums) => {
//   if (nums.length === 0) return 0;
//   const answer = nums.reduce((prev, curr) => prev + curr);
//   return answer;
// };

// console.log(sum([]));

// describe('sum', () => {
//   test('computes the sum of an empty array', () => {
//     expect(calculator.sum([])).toBe(0);
//   });

//   test('computes the sum of an array of one number', () => {
//     expect(calculator.sum([7])).toBe(7);
//   });

//   test('computes the sum of an array of two numbers', () => {
//     expect(calculator.sum([7, 11])).toBe(18);
//   });

//   test('computes the sum of an array of many numbers', () => {
//     expect(calculator.sum([1, 3, 5, 7, 9])).toBe(25);
//   });
// });

// const palindromes = (words) => {
//   const reverWords = [...words].toReversed('').join('');
//   return reverWords === words;
// };

// palindromes('racecar');
// palindromes('tacos');
// //npm test palindromes.spec.js

// const fibonacci = function fib(n) {
//   if (n < 0) return 'OOPS';
//   if (n === '0') return 0;
//   let a = 0,
//     b = 1,
//     c,
//     i;
//   if (n === 0) return a;
//   for (i = 2; i <= n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// };

// console.log(fibonacci('0'));

const books = [
  {
    title: 'Book',
    author: 'Name',
  },
  {
    title: 'Book2',
    author: 'Name2',
  },
  {
    title: 'Book3',
    author: 'Name3',
  },
  {
    title: 'Book4',
    author: 'Name4',
  },
  {
    title: 'Book5',
    author: 'Name5',
  },
  {
    title: 'Book6',
    author: 'Name6',
  },
];

const getTitles = function (books) {
  return arr.map(() => book.title);
};

getTitles;
