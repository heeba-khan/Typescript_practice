//* 4. Filter Even Numbers
// Create a function that takes an array of numbers and returns a new array containing only the even numbers.

// function filterEvenNumbers(numbers: number[]): number[] {
  // Your code here
// }

// Example usage:
// console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Output: [2, 4]


// Solution:
function filterEvenNumbers(numbers:number[]):number[]{
    let ans:number[]=[];
    for(const num of numbers){
        if(num%2===0)
            ans.push(num)
    }
    return ans;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 