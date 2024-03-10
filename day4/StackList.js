class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        return this.top === null;
    }

    peek() {
        if (!stack.isEmpty()) {
            return this.top.data;
        } else {
            return null;
        }
    }

    push(data) {
        let newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (!stack.isEmpty()) {
            this.top = this.top.next;
        }
    }
}

let stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(5);

stack.pop();
stack.pop();
stack.pop();

console.log(stack.peek());