// Take in an arr of integers AND an integer target
// Locate the two indices that add up to the target integer
// Return those two indices.

// Input: 
const numbers = [2,7,11,15] 
const target = 9;
// Output: [0,1];

const twoSum = (nums, target) => {
  for(let i = 0; i < nums.length; i++) {
    for(let j = 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j];
      } 
    }
  }
}

console.log(twoSum(numbers, target));