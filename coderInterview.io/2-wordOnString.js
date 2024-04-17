function solution1(numbers, target) {
    let result = [];
    
    for (let i = 0; i < numbers.length; i++){
      for (let j = 0; j < numbers.length; j++){
        if(numbers[i] + numbers[j] === target){
          result.push(i+1);
          result.push(j+1);
          return result;
        }
      }
    }
    
    return result;
}

// Example usage
const sample = new Input([2, 7, 11, 15], 9);

const largeNumbersLargeArray = new Input(Array.from({length: 10000}, (_, i) => i + 1), 19999);

//2 , 5
const negativeNumbers = new Input([-10, -3, 0, 3, 10], 7);

const noSolution = new Input([1, 5, 8, 99], 20);

//[1, 5] or [4, 6]
const multiplePairs = new Input([1, 2, 3, 4, 7, 4, 11, 13], 8);

const firstAndLast = new Input([-500, -4, 0, 3, 500], 0);

console.log(solution1(sample.numbers, sample.target));
console.log(solution1(largeNumbersLargeArray.numbers, largeNumbersLargeArray.target));
console.log(solution1(negativeNumbers.numbers, negativeNumbers.target));
console.log(solution1(noSolution.numbers, noSolution.target));
console.log(solution1(multiplePairs.numbers, multiplePairs.target));
console.log(solution1(firstAndLast.numbers, firstAndLast.target));