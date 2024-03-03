/*
    Time Complexity

    We need performance factors to decide which algorithm is better than the other.

    - time: how long it takes to run
    - space: how much memory it takes

    We can measure time complexity by counting the number of operations an algorithm performs.

    To represent the time complexity of an algorithm, we use mathematical notations. they are called as Asymptotic notations.

    Asymptotic Notations:

    - Big O Notation - Worst Case
    - Omega Notation - Best Case
    - Theta Notation - Average Case (Best and Worst)

    Example to understand Worst, Best and Average Case:

    Let's say we have an array of numbers and we want to find a number in the array.

    Algorithm: Linear Search

    let's say we have an array of 10 numbers and we want to find the number Key.

    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    Best Case: Key is at the first index

    For Example: Key = 1; comparisons = 1; time complexity = O(1), constant time

    Average Case: Key is at the middle index

    For Example: Key = 5; comparisons = 5; time complexity = O(n/2) => O(n), linear time

    Worst Case: Key is at the last index, or not present in the array

    For Example: 
        Key = 10; comparisons = 10; time complexity = O(n), linear time
        Key = 11; comparisons = 10; time complexity = O(n), linear time
*/

/*
    Example #1

    let a = 0, b = 0;
    for (let i = 0; i < N; i++) {
        a = a + Math.random();
    }
    for (let j = 0; j < M; j++) {
        b = b + Math.random();
    }

    Options: 

    O(1)
    O(logN)
    O(N)
    O(NlogN)
    O(N^2)
    O(2^N)
    O(N!)

    Answer: O(N + M)

    Explanation:

    let a = 0, b = 0;

    => O(1)

    for (let i = 0; i < N; i++) {
        a = a + Math.random();
    }

    => number of executions = number of values that i takes
    i = 0, 1, 2, 3, 4, ...., N-1 => N times
    => O(N)

    for (let j = 0; j < M; j++) {
        b = b + Math.random();
    }

    => number of executions = number of values that j takes
    j = 0, 1, 2, 3, 4, ...., M-1 => M times
    => O(M)

    Total time complexity, T(N, M) = 1 + N + M
                                   = N + M [1 is a constant, so we can ignore it]
                                   = O(N + M)

*/

/*
    Example #2

    let a = 0, b = 0;
    for (let i = 0; i < N; i++) {
        a = a + Math.random();
    }
    for (let j = 0; j < N; j++) {
        b = b + Math.random();
    }

    Answer: O(N)

    Explanation:

    let a = 0, b = 0;
    => 1

    for (let i = 0; i < N; i++) {
        a = a + Math.random();
    }
    => N

    for (let j = 0; j < N; j++) {
        b = b + Math.random();
    }
    => N

    Total time complexity, T(N) = 1 + N + N
                                = 1 + 2N 
                                = 2N [1 is a constant, so we can ignore it]
                                = N [2 is a constant, so we can ignore it]
                                = O(N)
*/

/*
    Example #3

    let a = 0, b = 0;
    for (let i = 0; i < N; i++) {
        a = a + Math.random();
        for (let j = 0; j < N; j++) {
            b = b + Math.random();
        }
    }

    Answer: O(N^2)

    Explanation:

    Method #1: Count the number of operations

    let a = 0, b = 0;
    => 1 [declarations, intializations, assignments, conditionals, switch cases, etc]

    outer loop: 
        number of executions = N
    
    inner loop: 
        number of executions = N
    
    Total time complexity, T(N) = 1 + N * N
                                = 1 + N^2
                                = O(N^2)
*/

// let N = 10;
// let executions = 0;

// for (let i = 0; i < N; i++){
//     executions++;
// }

// for (let j = 0; j < N; j++){
//     executions++;
// }

// console.log(executions); 

// let N = 7;
// let executions = 0;

// for (let i = 0; i < N; i++){
//     for (let j = 0; j < N; j++){
//         executions++;
//     }
// }

// console.log(executions); 

/*
    Example #3

    let a = 0, b = 0;
    for (let i = 0; i < N; i++) {
        a = a + Math.random();
        for (let j = 0; j < N; j++) {
            b = b + Math.random();
        }
    }

    Method #2

    1. Assume some random values for N

    N = 4
    N = 5
    N = 6

    2. Count the number of operations for each value of N

    N = 4
        i = 0; j = 0, 1, 2, 3; total = 4
        i = 1; j = 0, 1, 2, 3; total = 4
        i = 2; j = 0, 1, 2, 3; total = 4
        i = 3; j = 0, 1, 2, 3; total = 4

        number of operations = 4 + 4 + 4 + 4 = 16

    N = 5
        i = 0; j = 0, 1, 2, 3, 4; total = 5
        i = 1; j = 0, 1, 2, 3, 4; total = 5
        i = 2; j = 0, 1, 2, 3, 4; total = 5
        i = 3; j = 0, 1, 2, 3, 4; total = 5
        i = 4; j = 0, 1, 2, 3, 4; total = 5

        number of operations = 5 + 5 + 5 + 5 + 5 = 25
    
    N = 6
        i = 0; j = 0, 1, 2, 3, 4, 5; total = 6
        i = 1; j = 0, 1, 2, 3, 4, 5; total = 6
        i = 2; j = 0, 1, 2, 3, 4, 5; total = 6
        i = 3; j = 0, 1, 2, 3, 4, 5; total = 6
        i = 4; j = 0, 1, 2, 3, 4, 5; total = 6
        i = 5; j = 0, 1, 2, 3, 4, 5; total = 6

        number of operations = 6 + 6 + 6 + 6 + 6 + 6 = 36

    3. Observe the pattern

    N = 4; number of operations = 16
    N = 5; number of operations = 25
    N = 6; number of operations = 36

    number of operations = N^2

    4. Find the time complexity

    Total time complexity, T(N) = 1 + N^2
                                = O(N^2)
*/

/*
    Example #4

    let a = 0;
    for (let i = 0; i < N; i++) {
        for (let j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    Solution:

    Method #2:

    1. Assume some random values for N

    N = 4
    N = 5
    N = 6

    2. Count the number of operations for each value of N

    N = 4
        i = 0; j = 4, 3, 2, 1; total = 4
        i = 1; j = 4, 3, 2; total = 3
        i = 2; j = 4, 3; total = 2
        i = 3; j = 4; total = 1

        number of operations = 4 + 3 + 2 + 1 = 10
    
    N = 5
        i = 0; j = 5, 4, 3, 2, 1; total = 5
        i = 1; j = 5, 4, 3, 2; total = 4
        i = 2; j = 5, 4, 3; total = 3
        i = 3; j = 5, 4; total = 2
        i = 4; j = 5; total = 1

        number of operations = 5 + 4 + 3 + 2 + 1 = 15
    
    N = 6

        i = 0; j = 6, 5, 4, 3, 2, 1; total = 6
        i = 1; j = 6, 5, 4, 3, 2; total = 5
        i = 2; j = 6, 5, 4, 3; total = 4
        i = 3; j = 6, 5, 4; total = 3
        i = 4; j = 6, 5; total = 2
        i = 5; j = 6; total = 1

        number of operations = 6 + 5 + 4 + 3 + 2 + 1 = 21
    
    3. Observe the pattern

    N = 4; number of operations = 10
    N = 5; number of operations = 15
    N = 6; number of operations = 21

    number of operations = N + (N - 1) + (N - 2) + ... + 1
                         = sum of first N natural numbers

    S(N) = N + (N - 1) + (N - 2) + ... + 3 + 2 + 1
    S(N) = 1 + 2 + 3 + ... + (N - 2) + (N - 1) + N

------------------------------------------------------------

    2 * S(N) = N+1 + N+1 + N+1 + .... + N+1 + N+1 + N+1
    2 * S(N) = N * (N + 1)
    S(N) = [N * (N + 1) / 2]

    Number of operations = [N * (N + 1) / 2]

    4. Find the time complexity

    Total time complexity, T(N) = 1 + [N * (N + 1) / 2]
                                = 1 + (N^2 + N) / 2
                                = (N^2 + N)/2
                                = N^2 + N
                                = N^2 [as N^2 is the dominant term]
                                = O(N^2)
 
*/

/*
    Example #5

    let i, j, k = 0;
    for (i = n / 2; i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    } 

*/  