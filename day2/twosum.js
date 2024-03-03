// Algorithm #1
// // time complexity: O(N^2)
// var twoSum = function(nums, target) {
//     // generate all the possible pairs
//     for(let i=0; i<nums.length-1; i++){
//         for(let j=i+1; j<nums.length; j++){
//             // for every pair, find the sum of the pair
//             // check if the sum is equal to the target
//             if(nums[i] + nums[j] === target){
//                 // if true => return the pair of elements indices       
//                 return [i, j];
//             }
//         }
//     }
// };

// Algorithm #2
// // time complexity: O(N LogN)
// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length; i++){
//         if(nums.includes(target - nums[i], i+1)){
//             return [i, nums.indexOf(target - nums[i], i+1)];
//         }
//     }
// };


// Algorithm #3
// time complexity: O(N)
var twoSum = function(nums, target) {
    let nums2d = nums.map((num, index) => [index, num]);

    nums2d.sort((a, b) => a[1] - b[1]);

    let first = 0;
    let last = nums2d.length - 1;

    while(first < last){
        if(nums2d[first][1] + nums2d[last][1] === target){
            return [nums2d[first][0], nums2d[last][0]];
        } else if(nums2d[first][1] + nums2d[last][1] < target){
            first++;
        } else {
            last--;
        }
    }
};