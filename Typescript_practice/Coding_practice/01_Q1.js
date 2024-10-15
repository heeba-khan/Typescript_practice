//* 1. Sum of an Array
// Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
// function sumArray(numbers: number[]): number {
// Your code here
// }
// Example usage:
// console.log(sumArray([1, 2, 3, 4])); // Output: 10
// Output:
function sumArray(numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        sum += num;
    }
    return sum;
}
console.log(sumArray([1, 2, 4, 5]));
