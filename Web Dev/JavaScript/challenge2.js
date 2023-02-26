/**
 * Write a javascript function that takes an array of numbers and a target number.
 * The function should find two different numbers in the array that, when added together, give the target number.
 * For example: answer([1,2,3], 4)should return [1,3]
 */

let ans = [];

function answer(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j <arr.length; j++) { 
            if(arr[i] + arr[j] === target) ans.push([arr[i], arr[j]]);
        }
    }
}

let input = [1,2,3,4,5,6,7,8,9,10];
let target = 15;

answer(input, target);
console.log(ans);