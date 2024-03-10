/*
    Recursion is a process in which a function calls itself as a subroutine.
*/

// Example 1

// function sayHello() {
//     console.log('Hello');
//     sayHello();
// }

// sayHello();

// Debug: Recursion Tree

/*
    sayHello()
        - console.log('Hello')
        - sayHello()
            - console.log('Hello')
            - sayHello()
                - console.log('Hello')
                - sayHello()
                    ...
                    ...
*/

// Example 2
/*
    Problem: To print the message 'hello' 3 times
*/

// Iterative Way

// function sayHello(times) {
//     while (times--) {
//         console.log('Hello');
//     }
// }

// sayHello(5);

// Recursive Way

// function sayHello(times) {
//     if (times === 0) return;

//     console.log('Hello');
//     times--;
//     sayHello(times);
// }

// sayHello(5);

/*
    sayHello(5)
        - console.log('Hello')
        - sayHello(4)
            - console.log('Hello')
            - sayHello(3)
                - console.log('Hello')
                - sayHello(2)
                    - console.log('Hello')
                    - sayHello(1)
                        - console.log('Hello')
                        - sayHello(0)
                            - return
    
    sayHello(5)                   
*/

// Example 3
/*
    Problem: Given N, write a recursion function to print the numbers from N to 1.

    Input: 

    5

    Output:

    5
    4
    3
    2
    1

    Input:

    3

    Output:

    3
    2
    1
*/

// function printNumbers(n) {
//     if (n === 0) return;

//     console.log(n);
//     n--;
//     printNumbers(n);
// }

// printNumbers(3);

// function printNumbers(n) {
//     if (n === 0) return;

//     console.log(n);
//     printNumbers(n-1);
// }

// printNumbers(3);

// Example 4
/*
    Problem: Given N, write a recursion function to print the numbers from 1 to N.

    Input: 

    5

    Output:

    1
    2
    3
    4
    5

    Input:

    3

    Output:

    1
    2
    3
*/

// function printNumbers(n) {
//     if (n === 0) return;

//     printNumbers(n - 1);
//     console.log(n);
// }

// printNumbers(5);

/*
    Recursion Tree

    printNumbers(5)
        - n = 5; 5 === 0; false
        - printNumbers(4)
            - n = 4; 4 === 0; false
            - printNumbers(3)
                - n = 3; 3 === 0; false
                - printNumbers(2)
                    - n = 2; 2 === 0; false
                    - printNumbers(1)
                        - n = 1; 1 === 0; false
                        - printNumbers(0)
                            - n = 0; 0 === 0; true
                            - return
                        - console.log(1) x
                    - console.log(2) x    
                - console.log(3) x
            - console.log(4) x
        - console.log(5) x


    printNumbers(5)
*/

/*
    Problem: Given N, write a recursion function to find the sum of numbers from 1 to N.

    Input:

    5

    Output:

    15

    Explanation:    

    1 + 2 + 3 + 4 + 5 = 15

    Input:

    3

    Output:

    6

    Explanation:

    1 + 2 + 3 = 6
*/

// let sum = 0;

// function findSum(n) {
//     if (n === 0) return sum;
//     sum = sum + n;
//     return findSum(n - 1);
// }

// console.log(findSum(10));

// function findSum(n, sum = 0) {
//     if (n === 0) return sum;
//     sum = sum + n;
//     return findSum(n - 1, sum);
// }

// console.log(findSum(10));

// function findSum(n, sum = 0) {
//     if (n === 0) return sum;
//     return findSum(n - 1, sum + n);
// }

// console.log(findSum(10));

/*
    Recurrence Relation

    Its a way to represent a recursive function in a mathematical form.

    S(n) = ?

    Start with the base case

    for n = 1, S(n) = 1

    for n = 2, S(n) = 1 + 2 = 3
    for n = 3, S(n) = 1 + 2 + 3 = 6
    for n = 4, S(n) = 1 + 2 + 3 + 4 = 10
    for n = 5, S(n) = 1 + 2 + 3 + 4 + 5 = 15

    Applying backward substitution

    for n = 1, S(1) = 1

    for n = 2, S(2) = S(1) + 2 = 3
    for n = 3, S(3) = S(2) + 3 = 6
    for n = 4, S(4) = S(3) + 4 = 10
    for n = 5, S(5) = S(4) + 5 = 15

    Now we can write the recurrence relation, generalizing the above pattern

    For n = 1, S(n) = 1
    For n > 1, S(n) = S(n-1) + n
*/

// function S(n) {
//     // For n = 1, S(n) = 1
//     if (n === 1) return 1;

//     // For n > 1, S(n) = S(n-1) + n
//     return S(n - 1) + n;
// }

// console.log(S(10));

/*
    Problem: Given N, write a recursion function to find the factorial of N.

    Input:

    5

    Output:

    120

    Explanation:

    5! = 5 * 4 * 3 * 2 * 1 = 120

    Input:

    3

    Output:

    6

    Explanation:

    3! = 3 * 2 * 1 = 6
*/