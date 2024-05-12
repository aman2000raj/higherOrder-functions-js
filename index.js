import map from './customFunctions/map.js';
import forEach from './customFunctions/forEach.js';
import filter from './customFunctions/filter.js';
import reduce from './customFunctions/reduce.js';

const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'orange', 'banana', 'cherry'];
const scores = [70, 85, 90, 50, 65];

// double numbers using custom map methods
const callBackFunctionForMap = (Element) => Element * 2;
const doubledNumbers = map(numbers, callBackFunctionForMap);

console.log(doubledNumbers);

// logging fruits with indexes using custom forEach method
const callBackFunctionForEach = (Element, idx) => {
  console.log(`Fruits ${idx + 1}: ${Element}`);
};
forEach(fruits, callBackFunctionForEach);

// filter scores array with custom filter methods
const callBackFuctionForFilter = (Element) => {
  // scores above 70 is considered.
  if (Element >= 70) return true;
  return false;
};

const filteredScores = filter(scores, callBackFuctionForFilter);
console.log(filteredScores);

// calculate total of number array using custom reduce method
const callBackFuctionForReduce = (accumulator, Element) =>
  accumulator + Element;

const totalSum = reduce(numbers, callBackFuctionForReduce);
console.log(totalSum);
