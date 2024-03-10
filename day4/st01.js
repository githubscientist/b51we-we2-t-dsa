// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    peek() {
        return this.items[this.top];
    }

    isEmpty() {
        return this.top === -1;
    }
}

inp.on("close", () => {
    let words = userInput[0].split(' ');

    // create an empty stack
    let stack = new Stack();

    // traverse the words array
    for (let word of words) {
        // for every word,
        // check if the stack is empty
        if (stack.isEmpty()) {
            // stack is empty
            // push the current word to the stack
            stack.push(word);
        } else {
            // stack is not empty
            // compare if the current word is equal to the top of the stack
            if (word === stack.peek()) {
                // pop the stack
                stack.pop();
            } else {
                stack.push(word);
            }
        }
    }

    if (!stack.isEmpty()) {
        console.log(stack.items.join(' '));
    } else {
        console.log(-1);
    }
});