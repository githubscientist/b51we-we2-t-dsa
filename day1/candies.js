// // time complexity: O(n)
// var isGreater = function(totalCandies, candies, i){
//     // create an assumption that the totalCandies is >= all the kids candies in candies array
//     let assumption = true;

//     // iterate the candies array and check if the totalCandies is less than atleast one of the kids candies
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 // update our assumption
//                 assumption = false;
//             }
//         }
//     }

//     // return the assumption
//     return assumption;
// }

// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
// // time complexity: O(n^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     // create an empty boolean array <- result
//     let result = [];

//     // iterate or traverse the candies array i <- 0 to candies.length-1
//     for(let i=0; i<candies.length; i++){
//         // find the totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than or equal to all the other kids candies
//         if(isGreater(totalCandies, candies, i)){
//             // if true => push 'true' to the result array
//             result.push(true);
//         } else {
//             // else false => push 'false' to the result array
//             result.push(false);
//         }
//     }

//     // return the result array
//     return result;
// };

/*
    candies = [2, 3, 5, 1, 3]
            i [0][1][2][3][4]
    extraCandies = 3

    result = [true, true, ]

    For i = 0, result[0] = true

        totalCandies = candies[i] + extraCandies
                     = 2 + 3
                     = 5 >=[3, 5, 1, 3]
                           [1][2][3][4]
    
    For i = 1, 

        totalCandies = 3 + 3
                     = 6 >= [2, 5, 1, 3]
*/

// time complexity: O(n)
// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 assumption = false;
//             }
//         }
//     }
//     return assumption;
// }

// // O(n)
// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 assumption = false;
//                 break;
//             }
//         }
//     }
//     return assumption;
// }

// O(n)
// var isGreater = function(totalCandies, candies, i){
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// O(n)
// var isGreater = function(totalCandies, candies, i){
//     for(let index=0; index<candies.length; index++) if(totalCandies < candies[index]) return false;
//     return true;
// }


// time complexity: O(n^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(isGreater(totalCandies, candies, i)){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// O(n)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         result.push(totalCandies >= greatestCandy);
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     result = candies.map(candy => candy + extraCandies >= greatestCandy);
//     return result;
// };


// time complexity: O(n^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     return candies.map(candy => candy + extraCandies >= Math.max(...candies));
// };

// time complexity: O(n)
var kidsWithCandies = function(candies, extraCandies) {
    let greatestCandy = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= greatestCandy);
};