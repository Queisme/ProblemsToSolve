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

function Dog(breed) {
  this.breed = breed;
}

const snoopy = new Dog('Beagle');

snoopy.bark = function () {
  return 'Woof';
};

const scoobydoo = new Dog('Great Dane');

scoobydoo.bark = function () {
  return 'Woof';
};

console.log(scoobydoo.bark());
console.log(snoopy.bark());
