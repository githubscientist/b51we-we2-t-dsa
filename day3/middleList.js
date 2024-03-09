// var findLength = function(head) {
//     // create an empty array
//     let nodes = [];

//     let thead = head;

//     while (thead != null) {
//         nodes.push(thead.val);
//         thead = thead.next;
//     }

//     return nodes.length;
// }

// // time: O(n)
// var middleNode = function(head) {
//     // find the length of the linked list
//     let length = findLength(head); // O(n)

//     let moves = Math.floor(length/2); // O(1)

//     // O(n/2) => O(n)
//     while(moves--){
//         head = head.next;
//     }

//     return head;
// };

// // n + 1 + n + 1
// // O(n) 

// time: O(n)
var middleNode = function(head) {
    let slow = fast = head; // O(1)

    // O(n/2) => O(n)
    while(fast!=null && fast.next!=null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow; // O(1)
};

// 1 + n/2 + 1
// O(n)
