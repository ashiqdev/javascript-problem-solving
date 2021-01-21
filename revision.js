// 1. inch to feet () [feet = inch/12]

const inchToFeet = (inch) => inch / 12;

console.log(inchToFeet(28));

// 2. factorial

const factorial = (num) => {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
};

console.log(factorial(5));

// 3. fibonacci

// 3.1. print the nth fibo number
function nthFibo(n) {
  let n3;
  let n1 = 0;
  let n2 = 1;

  for (let i = 2; i < n; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
  return n3;
}

console.log(nthFibo(10));

// 3.2. print the fibo series until nth position
function fiboSeries(n) {
  let n3;
  let n1 = 0;
  let n2 = 1;
  let fib = [n1, n2];

  for (let i = 2; i < n; i++) {
    n3 = n1 + n2;
    fib.push(n3);
    n1 = n2;
    n2 = n3;
  }
  return fib;
}

console.log(fiboSeries(10));

// 4. leap year

const leapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
};

console.log(leapYear(2020));

// 5. prime number

// 5.1. check a number is prime or not

const isPrime = (num) => {
  let flag = 0;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      flag = 1;
      break;
    }
  }

  // if (num === 1) {
  //   return false;
  // } else {
  //   if (flag === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  if (num === 1) return false;

  return flag === 0;

  // return flag === 0;
};

console.log(isPrime(11));

// 5.2. print list of prime number upto nth position
const printPrime = (num) => {
  for (let counter = 1; counter <= num; counter++) {
    let flag = 0;
    for (let i = 2; i < counter; i++) {
      if (counter % i === 0) {
        flag = 1;
        break;
      }
    }
    if (flag === 0 && counter !== 1) console.log(counter);
  }
};

printPrime(20);

// 6. swap two variable (temp, without-temp, destrucuring)

// 6.1. (using temp)

let p = 5;
let q = 7;
let temp;

console.log(`Before: ${p} ${q}`);

temp = p;
p = q;
q = temp;

console.log(`After: ${p} ${q}`);

// 6.2. using ninja idea
let a = 18;
let b = 11;

console.log(`Before: ${a} ${b}`);

a = a + b;
b = a - b;
a = a - b;

console.log(`After: ${a} ${b}`);

// 6.3. array destructuring
let x = 30;
let y = 40;

console.log(`Before: ${x} ${y}`);

[x, y] = [40, 30];

console.log(`After: ${x} ${y}`);

// 7. remove duplicate element from an array (for-of, filter, set)

// 1. for-of

// 7.1. for-of
const removeDuplicate = (numbers) => {
  const unique = [];
  for (let number of numbers) {
    if (unique.indexOf(number) === -1) unique.push(number);
  }
  return unique;
};

console.log(removeDuplicate([3, 5, 4, 5, 2, 4, 3, 1, 4, 10]));

// 7.2. filter
const removeDuplicateUsingFilter = (numbers) => {
  const result = numbers.filter(
    (number, index) => numbers.indexOf(number) === index
  );

  return result;
};

console.log(removeDuplicateUsingFilter([3, 5, 4, 5, 2, 4, 3, 1, 4, 10]));

// 7.3. set
const uniqueArray = [...new Set([3, 5, 4, 5, 2, 4, 3, 1, 4, 10])];
console.log(uniqueArray);

// 8. largest/smallest element of an array  (loop, reduce)

// 8.1. loop(largest)

const largest = (numbers) => {
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
};

console.log(largest([100, 10, 30, 40, 20, 120, 90]));

// 8.2. loop(smallest)
const smallest = (numbers) => {
  let min = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
};

console.log(smallest([100, 10, 30, 40, 20, 120, 90]));

// 8.3. reduce(largest)
const largestReduce = (numbers) => {
  return numbers.reduce((a, c) => {
    if (a > c) return a;
    else return c;
  });
};

console.log(largestReduce([100, 10, 30, 40, 20, 120, 90]));

// 8.4. reduce(smallest)
const smallestReduce = (numbers) => {
  return numbers.reduce((a, c) => {
    if (a < c) return a;
    else return c;
  });
};

console.log(smallestReduce([100, 10, 30, 40, 20, 120, 90]));

// 9. maximum number of 3

const maximumNumber = (n1, n2, n3) => {
  let max;
  if (n1 > n2) {
    max = n1;
  } else {
    max = n2;
  }

  if (n3 > max) max = n3;

  return max;
};

console.log(maximumNumber(30, 50, 20));

// 10. reverse a string (reverse, reduce, another-way)

// 10.1. split
const reverseStr = (string) => string.split('').reverse().join('');
console.log(reverseStr('ashik'));

// 10.2. another-way
const reverseTheStr = (string) => {
  let res = '';
  for (let char of string) {
    res = char + res;
  }
  return res;
};

console.log(reverseStr('ashik'));

// 10.3. reduce
const reverseReduce = (string) => string.reduce((a, c) => c + a, '');
console.log(reverseStr('ashik'));


// 11. count number of word in a string (loop, split)

// 11.1. loop
const countWord = (string) => {
  let count = 1;
  for (let char of string) {
    if (char === ' ') count++;
  }

  return count;
};

console.log(countWord('Ashiqur Rahman Ashik'));

// 11.2. split
const countWordSplit = (string) => {
  return string.split(' ').filter((char) => char !== '').length;
};

console.log(countWordSplit('Ashiqur    Rahman  Ashik'));



// 12. sum of an array (normal, reduce)

// 12.1. normal

const sumArray = (numbers) => {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }

  return sum;
};

const result = sumArray([3, 5, 6, 2]);
console.log(result);

// 12.2. reduce
const sumOfArray = (numbers) => numbers.reduce((a, c) => a + c, 0);
console.log(sumArray([3, 5, 6, 2]));
