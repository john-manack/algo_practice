// Problem 

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Givens 
// - Only one valid answer exists 
// - nums will always be Array, and target will always be number 
// - 2 <= nums.length <= 1,000
// - -1,000,000,000 <= nums[i] <= 1,000,000,000 
// - -1,000,000,000 <= target <= 1,000,000,000 

// Examples
// Ex input: nums = [2,7,11,15], target = 9
// Ex output: [0,1]
// Ex input: nums = [3,2,4], target = 6
// Ex output: [1,2]
// Ex input: nums = [3,3], target = 6
// Ex output: [0,1]

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = (i+1); j < nums.length; j++)  {
            if (nums[i] + nums[j] === target ) {
                return [i, j]
            }
        }
    }
};

arr1 = [2,7,11,15];
target1 = 9;

arr2 = [3,2,4];
target2 = 6

console.log(twoSum(arr1, target1));
console.log(twoSum(arr2, target2));