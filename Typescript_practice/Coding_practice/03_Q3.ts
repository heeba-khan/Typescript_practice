//* 3. String Manipulation
// Write a function that takes a string and returns the number of vowels in that string.
//  Consider vowels to be a, e, i, o, u (case insensitive).

// function countVowels(input: string): number {
  // Your code here
// }

// Example usage:
// console.log(countVowels("Hello World")); // Output: 3


// Solution:
function countVowels(input:string):number{
    let ans=0;

    for(const s of input){
        if(s==='A'||s==='E'||s==='I'||s==='O'||s==='U'||s==='a'||s==='e'||s==='i'||s==='o'||s==='u')
            ans++;
    }
    return ans;
}

console.log(countVowels("Hello"));


