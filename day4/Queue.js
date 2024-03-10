class Queue {
    constructor() {
        this.items = [];
        this.front = this.rear = -1;
    }

    isEmpty() {
        return this.front === -1 && this.rear === -1;
    }

    enqueue(data) {
        this.items.push(data);
        if (queue.isEmpty()) {
            this.front++;
            this.rear++;
        } else {
            this.rear++;
        }
    }

    dequeue() {
        if (!queue.isEmpty()) {
            // proceed with the dequeue operation
            // check if the queue has one element
            if (this.front === 0 && this.rear === 0) {
                // queue has one element
                this.items.shift();
                this.front = this.rear = -1;
            } else {
                // queue has more than one element
                this.items.shift();
                this.rear--;
            }
        }
    }
}

let queue = new Queue();

queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);